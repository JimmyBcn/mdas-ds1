// Violación del SRP: La clase UserManager tiene demasiadas responsabilidades
// ❌ Problema: Esta clase maneja validación, almacenamiento Y envío de emails

interface User {
  email: string;
  name: string;
}

class UserManager {
  private users: User[] = [];

  // ❌ Responsabilidad 1: Validación de usuarios
  public createUser(email: string, name: string): boolean {
    // Validación de email
    if (!this.isValidEmail(email)) {
      console.log("❌ Email inválido");
      return false;
    }

    // Validación de nombre
    if (!this.isValidName(name)) {
      console.log("❌ Nombre inválido");
      return false;
    }

    // ❌ Responsabilidad 2: Almacenamiento de usuarios
    const user: User = { email, name };
    this.users.push(user);

    // ❌ Responsabilidad 3: Envío de emails
    this.sendWelcomeEmail(email);

    console.log(`✅ Usuario ${name} creado exitosamente`);
    return true;
  }

  // ❌ Responsabilidad 4: Búsqueda de usuarios
  public findUserByEmail(email: string): User | undefined {
    return this.users.find((u) => u.email === email);
  }

  // ❌ Lógica de validación mezclada con lógica de negocio
  private isValidEmail(email: string): boolean {
    return email.includes("@");
  }

  private isValidName(name: string): boolean {
    return name.trim().length > 0;
  }

  // ❌ Lógica de envío de emails mezclada con gestión de usuarios
  private sendWelcomeEmail(email: string): void {
    console.log(`📧 Enviando email de bienvenida a ${email}`);
  }

  public sendPasswordResetEmail(email: string): void {
    const user = this.findUserByEmail(email);
    if (user) {
      console.log(`📧 Enviando email de restablecimiento de contraseña a ${email}`);
    }
  }
}

// Uso
const manager = new UserManager();
manager.createUser("john@example.com", "John Doe");
manager.createUser("invalid-email", "Jane Doe");
manager.createUser("jane@example.com", "");
manager.sendPasswordResetEmail("john@example.com");

// ❌ Problemas con este enfoque:
// 1. Si la validación de email cambia, modificamos UserManager
// 2. Si el almacenamiento cambia (BD), modificamos UserManager
// 3. Si el servicio de email cambia, modificamos UserManager
// 4. UserManager tiene MÚLTIPLES razones para cambiar
// 5. Difícil de probar cada responsabilidad por separado
// 6. Violación del SRP: más de una responsabilidad

export { User, UserManager };
