// Cumplimiento del DIP: Módulos de alto y bajo nivel dependen de la abstracción
// ✅ Solución: Introducir interfaz de la que ambos módulos dependan

interface User {
  email: string;
  name: string;
}

// ✅ Abstracción de la que ambos módulos dependen
interface Database {
  save(data: string): void;
}

// ✅ Módulos de bajo nivel implementan la abstracción
class MySQLDatabase implements Database {
  public save(data: string): void {
    console.log(`Guardando en MySQL: ${data}`);
  }
}

class MongoDatabase implements Database {
  public save(data: string): void {
    console.log(`Guardando en MongoDB: ${data}`);
  }
}

class PostgreSQLDatabase implements Database {
  public save(data: string): void {
    console.log(`Guardando en PostgreSQL: ${data}`);
  }
}

// ✅ Módulo de alto nivel depende de la abstracción, no de la implementación concreta
class UserService {
  private database: Database; // ✅ ¡Depende de la interfaz!
  private users: User[] = [];

  constructor(database: Database) {
    this.database = database;
  }

  public saveUser(email: string, name: string): string {
    const user = { email, name };
    this.users.push(user);

    // ✅ Determinar tipo de base de datos para el mensaje
    const dbType = this.database instanceof MySQLDatabase ? "MySQL" : this.database instanceof MongoDatabase ? "MongoDB" : "PostgreSQL";

    const result = `Guardado en ${dbType}: ${email}`;
    // ✅ ¡Puede trabajar con CUALQUIER implementación de base de datos!
    this.database.save(result);
    return result;
  }

  public getUser(email: string): User | undefined {
    return this.users.find((u) => u.email === email);
  }
}

// Uso - ¡El mismo UserService funciona con diferentes bases de datos!
const mysqlDb = new MySQLDatabase();
const mongoDb = new MongoDatabase();
const postgresDb = new PostgreSQLDatabase();

const mysqlService = new UserService(mysqlDb);
const mongoService = new UserService(mongoDb);
const postgresService = new UserService(postgresDb);

console.log(mysqlService.saveUser("john@example.com", "John Doe"));
console.log(mongoService.saveUser("jane@example.com", "Jane Smith"));
console.log(postgresService.saveUser("bob@example.com", "Bob Johnson"));

// ✅ Beneficios:
// 1. Fácil de intercambiar bases de datos sin cambiar UserService
// 2. Fácil de probar con mocks de Database
// 3. UserService no conoce detalles de implementación
// 4. Cumple DIP: depende de abstracción, no de implementación concreta

// Re-export MongoDatabase as MongoDBDatabase for backwards compatibility
const MongoDBDatabase = MongoDatabase;

export { Database, MySQLDatabase, MongoDatabase, MongoDBDatabase, PostgreSQLDatabase, UserService };
