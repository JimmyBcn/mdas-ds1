import { AppError, ValidationError, NotFoundError, ConflictError, DatabaseError, NetworkError, AuthError } from "../errors";
import { UserRepository, EmailService } from "./DataLayer";

export class UserService {
  private userRepository: UserRepository;
  private emailService: EmailService;

  constructor() {
    this.userRepository = new UserRepository();
    this.emailService = new EmailService();
  }

  private validateUserData(name: string, email: string): void {
    if (!name || name.trim().length === 0) {
      throw new ValidationError("El nombre es requerido", { field: "name" });
    }

    if (name.length < 3) {
      throw new ValidationError("El nombre debe tener al menos 3 caracteres", {
        field: "name",
        minLength: 3,
      });
    }

    if (!email || !email.includes("@")) {
      throw new ValidationError("El email debe ser válido", { field: "email" });
    }
  }

  createUser(name: string, email: string): any {
    this.validateUserData(name, email);
    const user = { name, email };

    try {
      this.userRepository.save(user);
    } catch (error) {
      if (error instanceof ConflictError) {
        // Regla de negocio: email único
        throw new ValidationError("El email ya está registrado", {
          field: "email",
          value: email,
        });
      }
      if (error instanceof AppError) throw error;
      throw new DatabaseError("Error al crear el usuario", { operation: "save" });
    }

    try {
      this.emailService.sendWelcomeEmail(email);
    } catch (error) {
      if (error instanceof NetworkError) {
        // Decisión: propagar para informar al usuario que el email no pudo enviarse
        throw new NetworkError("Servicio de email temporalmente no disponible: " + error.message, {
          operation: "welcome",
          email,
        });
      }
      if (error instanceof AppError) throw error;
      throw new AppError("Error inesperado al enviar email", {
        errorCode: "UNEXPECTED_EMAIL_ERROR",
        statusCode: 500,
        executionContext: { operation: "welcome", email },
      });
    }

    return user;
  }

  getUserById(id: number): any {
    try {
      return this.userRepository.findById(id);
    } catch (error) {
      if (error instanceof NotFoundError) {
        throw new NotFoundError("El usuario no existe", { entity: "User", id });
      }
      if (error instanceof AppError) throw error;
      throw new AppError("Error al obtener usuario", {
        errorCode: "GET_USER_ERROR",
        statusCode: 500,
        executionContext: { id },
      });
    }
  }

  updateUser(id: number, name: string, email: string): any {
    this.validateUserData(name, email);

    try {
      this.userRepository.findById(id);
    } catch (error) {
      if (error instanceof NotFoundError) {
        throw new NotFoundError("No se puede actualizar: usuario no existe", {
          entity: "User",
          id,
        });
      }
      if (error instanceof AppError) throw error;
      throw new AppError("Error al verificar existencia de usuario", {
        errorCode: "VERIFY_USER_ERROR",
        statusCode: 500,
        executionContext: { id },
      });
    }

    try {
      this.userRepository.update(id, { name, email });
    } catch (error) {
      if (error instanceof DatabaseError) {
        throw new DatabaseError("No se pudo actualizar el usuario, intenta más tarde", {
          entity: "User",
          id,
          operation: "update",
        });
      }
      if (error instanceof AppError) throw error;
      throw new AppError("Error inesperado al actualizar usuario", {
        errorCode: "UPDATE_USER_ERROR",
        statusCode: 500,
        executionContext: { id },
      });
    }

    return { id, name, email };
  }

  resetPassword(userId: number): void {
    let user;
    try {
      user = this.userRepository.findById(userId);
    } catch (error) {
      if (error instanceof NotFoundError) {
        throw new NotFoundError("No se puede restablecer contraseña: usuario no existe", {
          entity: "User",
          id: userId,
        });
      }
      if (error instanceof AppError) throw error;
      throw new AppError("Error al buscar usuario para restablecer contraseña", {
        errorCode: "RESET_LOOKUP_ERROR",
        statusCode: 500,
        executionContext: { userId },
      });
    }

    try {
      this.emailService.sendPasswordResetEmail(user.email);
    } catch (error) {
      if (error instanceof AuthError) {
        // No exponemos detalles técnicos; transformamos a error de servicio
        throw new NetworkError("Servicio de email no disponible", {
          operation: "password-reset",
          email: user.email,
        });
      }
      if (error instanceof AppError) throw error;
      throw new AppError("Error inesperado al enviar email de restablecimiento", {
        errorCode: "UNEXPECTED_RESET_EMAIL_ERROR",
        statusCode: 500,
        executionContext: { userId, email: user.email },
      });
    }
  }

  initialize(): void {
    try {
      this.userRepository.connect();
    } catch (error) {
      if (error instanceof DatabaseError) {
        throw new DatabaseError("El sistema no pudo inicializarse (BD)", {
          service: "database",
          operation: "connect",
        });
      }
      if (error instanceof AppError) throw error;
      throw new AppError("Error inesperado al inicializar el sistema", {
        errorCode: "INIT_ERROR",
        statusCode: 500,
      });
    }
  }
}
