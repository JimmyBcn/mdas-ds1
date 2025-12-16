import { DatabaseError, NotFoundError, ConflictError, NetworkError, AuthError } from "../errors";

export class UserRepository {
  connect(): void {
    throw new DatabaseError("No se pudo establecer conexión con la base de datos", {
      service: "database",
      operation: "connect",
    });
  }

  findById(id: number): any {
    throw new NotFoundError(`Usuario con ID ${id} no encontrado`, {
      entity: "User",
      id,
    });
  }

  save(user: any): void {
    throw new ConflictError("Violación de restricción UNIQUE en campo email", {
      entity: "User",
      field: "email",
      value: user?.email,
    });
  }

  update(id: number, data: any): void {
    throw new DatabaseError("Deadlock detectado durante la actualización", {
      entity: "User",
      id,
      operation: "update",
    });
  }
}

export class EmailService {
  sendWelcomeEmail(email: string): void {
    throw new NetworkError("Timeout al conectar con el servidor de email", {
      provider: "email",
      operation: "welcome",
      email,
    });
  }

  sendPasswordResetEmail(email: string): void {
    throw new AuthError("Credenciales inválidas para el servicio de email", {
      provider: "email",
      operation: "password-reset",
      email,
    });
  }
}
