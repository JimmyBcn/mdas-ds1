// Violación del DIP: Clase de alto nivel depende directamente de clase de bajo nivel
// ❌ Problema: UserService está fuertemente acoplado a MySQLDatabase

interface User {
  email: string;
  name: string;
}

// Módulo de bajo nivel (implementación concreta)
class MySQLDatabase {
  public save(data: string): void {
    console.log(`Guardando en base de datos MySQL: ${data}`);
  }
}

// ❌ Módulo de alto nivel depende de módulo concreto de bajo nivel
class UserService {
  private database: MySQLDatabase; // ❌ ¡Acoplamiento fuerte!
  private users: User[] = [];

  constructor() {
    this.database = new MySQLDatabase(); // ❌ Instancia directa de clase concreta
  }

  public saveUser(email: string, name: string): string {
    const user = { email, name };
    this.users.push(user);
    const result = `Guardado en MySQL: ${email}`;
    // ❌ ¡Directamente ligado a MySQL - no se puede cambiar de base de datos!
    this.database.save(result);
    return result;
  }

  public getUser(email: string): User | undefined {
    return this.users.find((u) => u.email === email);
  }
}

// Uso
const service = new UserService();
console.log(service.saveUser("john@example.com", "John Doe"));
console.log(service.getUser("john@example.com"));

// ❌ Problemas con este enfoque:
// 1. No se puede cambiar fácilmente a PostgreSQL, MongoDB, etc.
// 2. Difícil de probar (no se puede hacer mock de la base de datos fácilmente)
// 3. UserService sabe demasiado sobre los detalles de implementación
// 4. Violación de DIP: depende de implementación concreta, no de abstracción

export { MySQLDatabase, UserService };
