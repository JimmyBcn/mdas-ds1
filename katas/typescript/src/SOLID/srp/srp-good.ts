// Cumplimiento del SRP: Cada clase tiene una única responsabilidad
// ✅ Solución: Separar responsabilidades en clases especializadas

interface User {
  email: string;
  name: string;
}

// ✅ Clase 1: Solo responsable de validación
class UserValidator {
  public isValidEmail(email: string): boolean {
    return email.includes("@");
  }

  public isValidName(name: string): boolean {
    return name.trim().length > 0;
  }
}

// ✅ Clase 2: Solo responsable de almacenamiento
class UserRepository {
  private users: User[] = [];

  public save(user: User): void {
    this.users.push(user);
  }

  public findByEmail(email: string): User | undefined {
    return this.users.find((u) => u.email === email);
  }
}

// ✅ Clase 3: Solo responsable de envío de emails
class EmailService {
  public sendWelcomeEmail(email: string): boolean {
    console.log(`Enviando email de bienvenida a ${email}`);
    return true;
  }

  public sendPasswordResetEmail(email: string): string {
    return `Enviando email de restablecimiento de contraseña a ${email}`;
  }
}

// Uso - cada servicio maneja su responsabilidad
const validator = new UserValidator();
const repository = new UserRepository();
const emailService = new EmailService();

const email = "john@example.com";
const name = "John Doe";

if (validator.isValidEmail(email) && validator.isValidName(name)) {
  const user: User = { email, name };
  repository.save(user);
  emailService.sendWelcomeEmail(email);
  console.log("✅ Usuario creado exitosamente");
}

// ✅ Beneficios:
// 1. Cada clase tiene solo una razón para cambiar
// 2. Fácil de probar cada responsabilidad por separado
// 3. Se pueden reutilizar servicios independientemente
// 4. Código más organizado y mantenible
// 5. Cumple el SRP: una sola responsabilidad por clase

export { User, UserValidator, UserRepository, EmailService };
