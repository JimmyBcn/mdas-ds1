import { UserService } from "./BusinessLayer";

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  handleCreateUser(name: string, email: string): { success: boolean; data?: any; error?: string } {
    try {
      const user = this.userService.createUser(name, email);
      return {
        success: true,
        data: user,
      };
    } catch (error: Error) {
      return {
        success: false,
        errorCode: error.code
        errorMessage: error.message,
        context: {
          name,
          email
        }
      };
    }
  }
  }

  handleGetUser(id: number): { success: boolean; data?: any; error?: string } {
    const user = this.userService.getUserById(id);
    return {
      success: true,
      data: user,
    };
  }

  handleUpdateUser(id: number, name: string, email: string): { success: boolean; data?: any; error?: string } {
    const user = this.userService.updateUser(id, name, email);
    return {
      success: true,
      data: user,
    };
  }

  handleResetPassword(userId: number): { success: boolean; message?: string; error?: string } {
    this.userService.resetPassword(userId);
    return {
      success: true,
      message: "Email de restablecimiento enviado",
    };
  }

  initialize(): { success: boolean; message?: string; error?: string } {
    this.userService.initialize();
    return {
      success: true,
      message: "Sistema inicializado correctamente",
    };
  }
}

export function runApplication() {
  console.log("=== APLICACIÓN SIN GESTIÓN DE ERRORES ===\n");

  const controller = new UserController();

  console.log("1. Intentando crear usuario con datos inválidos...");
  const result1 = controller.handleCreateUser("", "invalid-email");
  console.log("Resultado:", result1);

  console.log("\n2. Intentando obtener usuario inexistente...");
  const result2 = controller.handleGetUser(999);
  console.log("Resultado:", result2);
}
