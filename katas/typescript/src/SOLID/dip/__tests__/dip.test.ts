/**
 * Tests para el Dependency Inversion Principle (DIP)
 * Valida tanto las implementaciones malas como las buenas
 */

import { UserService as UserServiceBad } from "../dip-bad";
import { UserService as UserServiceGood, MySQLDatabase, MongoDBDatabase } from "../dip-good";

describe("DIP - Bad Implementation", () => {
  let service: UserServiceBad;

  beforeEach(() => {
    service = new UserServiceBad();
  });

  test("should save user", () => {
    const result = service.saveUser("john@example.com", "John Doe");
    expect(result).toContain("Guardado en MySQL");
    expect(result).toContain("john@example.com");
  });

  test("should retrieve user", () => {
    service.saveUser("john@example.com", "John Doe");
    const user = service.getUser("john@example.com");
    expect(user).toBeTruthy();
    expect(user?.email).toBe("john@example.com");
    expect(user?.name).toBe("John Doe");
  });
});

describe("DIP - Good Implementation", () => {
  test("should save user with MySQL database", () => {
    const database = new MySQLDatabase();
    const service = new UserServiceGood(database);

    const result = service.saveUser("john@example.com", "John Doe");
    expect(result).toContain("Guardado en MySQL");
    expect(result).toContain("john@example.com");
  });

  test("should save user with MongoDB database", () => {
    const database = new MongoDBDatabase();
    const service = new UserServiceGood(database);

    const result = service.saveUser("john@example.com", "John Doe");
    expect(result).toContain("Guardado en MongoDB");
    expect(result).toContain("john@example.com");
  });

  test("should retrieve user with MySQL database", () => {
    const database = new MySQLDatabase();
    const service = new UserServiceGood(database);

    service.saveUser("john@example.com", "John Doe");
    const user = service.getUser("john@example.com");
    expect(user).toBeTruthy();
    expect(user?.email).toBe("john@example.com");
  });

  test("should retrieve user with MongoDB database", () => {
    const database = new MongoDBDatabase();
    const service = new UserServiceGood(database);

    service.saveUser("john@example.com", "John Doe");
    const user = service.getUser("john@example.com");
    expect(user).toBeTruthy();
    expect(user?.email).toBe("john@example.com");
  });

  test("demonstrates DIP compliance - depend on abstraction", () => {
    // Can switch database implementation without changing UserService
    const mysqlDb = new MySQLDatabase();
    const mongoDb = new MongoDBDatabase();

    const mysqlService = new UserServiceGood(mysqlDb);
    const mongoService = new UserServiceGood(mongoDb);

    expect(mysqlService.saveUser("test@example.com", "Test")).toBeTruthy();
    expect(mongoService.saveUser("test@example.com", "Test")).toBeTruthy();
  });
});
