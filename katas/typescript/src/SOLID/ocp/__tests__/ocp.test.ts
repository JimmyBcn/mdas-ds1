/**
 * Tests para el Open/Closed Principle (OCP)
 * Valida tanto las implementaciones malas como las buenas
 */

import { DiscountCalculator as DiscountCalculatorBad } from "../ocp-bad";
import { DiscountCalculator as DiscountCalculatorGood, RegularCustomerDiscount, VIPCustomerDiscount, NewCustomerDiscount } from "../ocp-good";

describe("OCP - Bad Implementation", () => {
  let calculator: DiscountCalculatorBad;

  beforeEach(() => {
    calculator = new DiscountCalculatorBad();
  });

  test("should calculate regular customer discount", () => {
    const discount = calculator.calculateDiscount(100, "regular");
    expect(discount).toBe(5); // 5% discount
  });

  test("should calculate VIP customer discount", () => {
    const discount = calculator.calculateDiscount(100, "vip");
    expect(discount).toBe(20); // 20% discount
  });

  test("should calculate new customer discount", () => {
    const discount = calculator.calculateDiscount(100, "new");
    expect(discount).toBe(10); // 10% discount
  });

  test("should return zero for unknown customer type", () => {
    const discount = calculator.calculateDiscount(100, "unknown");
    expect(discount).toBe(0);
  });
});

describe("OCP - Good Implementation", () => {
  let calculator: DiscountCalculatorGood;

  beforeEach(() => {
    calculator = new DiscountCalculatorGood();
  });

  test("should calculate regular customer discount", () => {
    const strategy = new RegularCustomerDiscount();
    const discount = calculator.calculateDiscount(100, strategy);
    expect(discount).toBe(5); // 5% discount
  });

  test("should calculate VIP customer discount", () => {
    const strategy = new VIPCustomerDiscount();
    const discount = calculator.calculateDiscount(100, strategy);
    expect(discount).toBe(20); // 20% discount
  });

  test("should calculate new customer discount", () => {
    const strategy = new NewCustomerDiscount();
    const discount = calculator.calculateDiscount(100, strategy);
    expect(discount).toBe(10); // 10% discount
  });

  test("should support adding new discount strategies without modification", () => {
    // Custom discount strategy
    class SeasonalDiscount {
      calculate(amount: number): number {
        return amount * 0.15; // 15% discount
      }
    }

    const strategy = new SeasonalDiscount();
    const discount = calculator.calculateDiscount(100, strategy);
    expect(discount).toBe(15);
  });
});
