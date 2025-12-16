import { UserService } from "./BusinessLayer";
import { AppError } from "../errors";

type ApiResponse<T = any> = {
  success: boolean;
  data?: T;
  message?: string;
  errorCode?: string;
  statusCode?: number;
};

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  private formatError(error: unknown, context?: Record<string, unknown>): ApiResponse {
    if (error instanceof AppError) {
      // Logging interno para debugging
      console.error("[ERROR]", {
        name: error.name,
        errorCode: error.errorCode,
        statusCode: error.statusCode,
        message: error.message,
        context: { ...error.executionContext, ...context },
      });
      // Respuesta segura para el usuario
      return {
        success: false,
        message: this.safeMessage(error),
        errorCode: error.errorCode,
        statusCode: error.statusCode,
      };
    }

    console.error("[ERROR_UNEXPECTED]", { error });
    return {
      success: false,
      message: "Ha ocurrido un error inesperado",
      errorCode: "UNEXPECTED_ERROR",
      statusCode: 500,
    };
  }

  private safeMessage(error: AppError): string {
    switch (error.errorCode) {
      case "VALIDATION_ERROR":
        return error.message;
      case "NOT_FOUND":
        return error.message;
      case "CONFLICT":
        return error.message;
      case "NETWORK_ERROR":
        return "Servicio temporalmente no disponible. Intenta más tarde.";
      case "DATABASE_ERROR":
        return "No se pudo completar la operación. Intenta más tarde.";
      default:
        return "Ha ocurrido un error";
    }
  }

  handleCreateUser(name: string, email: string): ApiResponse {
    try {
      const user = this.userService.createUser(name, email);
      return { success: true, data: user };
    } catch (error) {
      return this.formatError(error, { name, email });
    }
  }

  handleGetUser(id: number): ApiResponse {
    try {
      const user = this.userService.getUserById(id);
      return { success: true, data: user };
    } catch (error) {
      return this.formatError(error, { id });
    }
  }

  handleUpdateUser(id: number, name: string, email: string): ApiResponse {
    try {
      const user = this.userService.updateUser(id, name, email);
      return { success: true, data: user };
    } catch (error) {
      return this.formatError(error, { id, name, email });
    }
  }

  handleResetPassword(userId: number): ApiResponse {
    try {
      this.userService.resetPassword(userId);
      return { success: true, message: "Email de restablecimiento enviado" };
    } catch (error) {
      return this.formatError(error, { userId });
    }
  }

  initialize(): ApiResponse {
    try {
      this.userService.initialize();
      return { success: true, message: "Sistema inicializado correctamente" };
    } catch (error) {
      return this.formatError(error);
    }
  }
}

export function runApplication() {
  console.log("=== APLICACIÓN CON GESTIÓN DE ERRORES ===\n");

  const controller = new UserController();

  console.log("1. Intentando crear usuario con datos inválidos...");
  const result1 = controller.handleCreateUser("", "invalid-email");
  console.log("Resultado:", result1);

  console.log("\n2. Intentando obtener usuario inexistente...");
  const result2 = controller.handleGetUser(999);
  console.log("Resultado:", result2);
}

runApplication();
