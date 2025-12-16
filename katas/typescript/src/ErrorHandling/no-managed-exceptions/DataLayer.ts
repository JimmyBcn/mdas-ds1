import { AppError } from "../errors";

export class UserRepository {
  connect(): void {
    throw new AppError("No se pudo establecer conexión con la base de datos");
  }

  findById(id: number): any {
    throw new AppError(`Usuario con ID ${id} no encontrado`);
  }

  save(user: any): void {
    throw new AppError("Violación de restricción UNIQUE en campo email");
  }

  update(id: number, data: any): void {
    throw new AppError("Deadlock detectado durante la actualización");
  }
}

export class EmailService {
  sendWelcomeEmail(email: string): void {
    throw new AppError("Timeout al conectar con el servidor de email");
  }

  sendPasswordResetEmail(email: string): void {
    throw new AppError("Credenciales inválidas para el servicio de email");
  }
}
