/**
 * Tests para el Single Responsibility Principle (SRP)
 * Valida tanto las implementaciones malas como las buenas
 */

import { UserManager as UserManagerBad } from "../srp-bad";
import { User, UserRepository, EmailService, UserValidator } from "../srp-good";

describe("SRP - Bad Implementation", () => {
  let manager: UserManagerBad;

  beforeEach(() => {
    manager = new UserManagerBad();
  });

  test("should create valid user", () => {
    const result = manager.createUser("john@example.com", "John Doe");
    expect(result).toBe(true);
  });

  test("should reject invalid email", () => {
    const result = manager.createUser("invalid-email", "John Doe");
    expect(result).toBe(false);
  });

  test("should reject empty name", () => {
    const result = manager.createUser("john@example.com", "");
    expect(result).toBe(false);
  });
});

describe("SRP - Good Implementation", () => {
  let repository: UserRepository;
  let emailService: EmailService;
  let validator: UserValidator;

  beforeEach(() => {
    repository = new UserRepository();
    emailService = new EmailService();
    validator = new UserValidator();
  });

  test("should validate correct email", () => {
    expect(validator.isValidEmail("john@example.com")).toBe(true);
  });

  test("should reject invalid email", () => {
    expect(validator.isValidEmail("invalid-email")).toBe(false);
  });

  test("should validate non-empty name", () => {
    expect(validator.isValidName("John Doe")).toBe(true);
  });

  test("should reject empty name", () => {
    expect(validator.isValidName("")).toBe(false);
  });

  test("should save user to repository", () => {
    const user: User = { email: "john@example.com", name: "John Doe" };
    repository.save(user);
    expect(repository.findByEmail("john@example.com")).toEqual(user);
  });

  test("should send welcome email", () => {
    const result = emailService.sendWelcomeEmail("john@example.com");
    expect(result).toBe(true);
  });
});
