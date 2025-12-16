/**
 * Tests para el concepto de Naming en Clean Code
 * Valida tanto las implementaciones malas como las buenas
 */

import { UserService as UserServiceBad, User } from "../naming-bad";
import { UserService as UserServiceGood } from "../naming-good";

describe("Naming - Bad Implementation", () => {
  let service: UserServiceBad;

  beforeEach(() => {
    service = new UserServiceBad();
  });

  test("should reject user under age", () => {
    const user: User = { age: 17, status: "ACT", points: 1200 };
    expect(service.validateUser(user)).toBe(false);
  });

  test("should accept user with active status", () => {
    const user: User = { age: 20, status: "ACT", points: 500 };
    expect(service.validateUser(user)).toBe(true);
  });

  test("should accept user with premium points", () => {
    const user: User = { age: 20, status: "INA", points: 1200 };
    expect(service.validateUser(user)).toBe(true);
  });

  test("should calculate VIP discount correctly", () => {
    const discount = service.calculateDiscount(100, "VIP");
    expect(discount).toBe(20.0); // 20% de descuento
  });

  test("should calculate regular discount correctly", () => {
    const discount = service.calculateDiscount(100, "REG");
    expect(discount).toBe(5.0); // 5% de descuento
  });

  test("should return zero discount for unknown customer type", () => {
    const discount = service.calculateDiscount(100, "UNKNOWN");
    expect(discount).toBe(0.0);
  });
});

describe("Naming - Good Implementation", () => {
  let service: UserServiceGood;

  beforeEach(() => {
    service = new UserServiceGood();
  });

  test("should reject user under minimum age", () => {
    const user: User = { age: 17, status: "ACT", points: 1200 };
    expect(service.validateUser(user)).toBe(false);
  });

  test("should accept user with active status", () => {
    const user: User = { age: 20, status: "ACT", points: 500 };
    expect(service.validateUser(user)).toBe(true);
  });

  test("should accept user with premium points above threshold", () => {
    const user: User = { age: 20, status: "INA", points: 1200 };
    expect(service.validateUser(user)).toBe(true);
  });

  test("should calculate VIP customer discount correctly", () => {
    const discount = service.calculateDiscount(100, "VIP");
    expect(discount).toBe(20.0); // Tasa de descuento VIP: 20%
  });

  test("should calculate regular customer discount correctly", () => {
    const discount = service.calculateDiscount(100, "REG");
    expect(discount).toBe(5.0); // Tasa de descuento regular: 5%
  });

  test("should return zero discount for unknown customer type", () => {
    const discount = service.calculateDiscount(100, "UNKNOWN");
    expect(discount).toBe(0.0);
  });
});
