/**
 * Tests para el concepto de Encapsulation en OOP
 * Valida tanto las implementaciones malas como las buenas
 */

import { BankAccount as BankAccountBad } from "../encapsulation-bad";
import { BankAccount as BankAccountGood } from "../encapsulation-good";

describe("Encapsulation - Bad Implementation", () => {
  test("should deposit money correctly", () => {
    const account = new BankAccountBad("12345", 1000);
    account.deposit(500);
    expect(account.getBalance()).toBe(1500);
  });

  test("should withdraw money correctly", () => {
    const account = new BankAccountBad("12345", 1000);
    const result = account.withdraw(500);
    expect(result).toBe(true);
    expect(account.getBalance()).toBe(500);
  });

  test("should reject withdrawal exceeding balance", () => {
    const account = new BankAccountBad("12345", 1000);
    const result = account.withdraw(1500);
    expect(result).toBe(false);
    expect(account.getBalance()).toBe(1000);
  });
});

describe("Encapsulation - Good Implementation", () => {
  test("should deposit money correctly", () => {
    const account = new BankAccountGood("12345", 1000);
    account.deposit(500);
    expect(account.getBalance()).toBe(1500);
  });

  test("should withdraw money correctly", () => {
    const account = new BankAccountGood("12345", 1000);
    const result = account.withdraw(500);
    expect(result).toBe(true);
    expect(account.getBalance()).toBe(500);
  });

  test("should reject withdrawal exceeding balance", () => {
    const account = new BankAccountGood("12345", 1000);
    const result = account.withdraw(1500);
    expect(result).toBe(false);
    expect(account.getBalance()).toBe(1000);
  });

  test("should reject negative deposit", () => {
    const account = new BankAccountGood("12345", 1000);
    expect(() => account.deposit(-100)).toThrow();
  });

  test("should reject negative withdrawal", () => {
    const account = new BankAccountGood("12345", 1000);
    expect(account.withdraw(-100)).toBe(false);
  });
});
