import { AppError } from "../errors";
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
      throw new AppError("El nombre es requerido");
    }

    if (name.length < 3) {
      throw new AppError("El nombre debe tener al menos 3 caracteres");
    }

    if (!email || !email.includes("@")) {
      throw new AppError("El email debe ser válido");
    }
  }

  createUser(name: string, email: string): any {
    this.validateUserData(name, email);
    const user = { name, email };
    this.userRepository.save(user);
    this.emailService.sendWelcomeEmail(email);
    return user;
  }

  getUserById(id: number): any {
    return this.userRepository.findById(id);
  }

  updateUser(id: number, name: string, email: string): any {
    this.validateUserData(name, email);
    this.userRepository.findById(id);
    this.userRepository.update(id, { name, email });
    return { id, name, email };
  }

  resetPassword(userId: number): void {
    const user = this.userRepository.findById(userId);
    this.emailService.sendPasswordResetEmail(user.email);
  }

  initialize(): void {
    this.userRepository.connect();
  }
}
