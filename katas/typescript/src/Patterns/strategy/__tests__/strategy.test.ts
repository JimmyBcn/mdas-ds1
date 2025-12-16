/**
 * Tests para el patrón Strategy
 * Valida tanto las implementaciones malas como las buenas
 */

import { ShippingCalculator as ShippingCalculatorBad } from "../strategy-bad";
import { ShippingCalculator as ShippingCalculatorGood, StandardShipping, ExpressShipping, OvernightShipping } from "../strategy-good";

describe("Strategy Pattern - Bad Implementation", () => {
  let calculator: ShippingCalculatorBad;

  beforeEach(() => {
    calculator = new ShippingCalculatorBad();
  });

  test("should calculate standard shipping cost", () => {
    const cost = calculator.calculateShipping("standard", 100);
    expect(cost).toBe(105); // 100 + 5
  });

  test("should calculate express shipping cost", () => {
    const cost = calculator.calculateShipping("express", 100);
    expect(cost).toBe(110); // 100 * 1.10
  });

  test("should calculate overnight shipping cost", () => {
    const cost = calculator.calculateShipping("overnight", 100);
    expect(cost).toBe(120); // 100 * 1.20
  });

  test("should return original weight for unknown type", () => {
    const cost = calculator.calculateShipping("unknown", 100);
    expect(cost).toBe(100);
  });
});

describe("Strategy Pattern - Good Implementation", () => {
  test("should calculate standard shipping cost", () => {
    const strategy = new StandardShipping();
    const calculator = new ShippingCalculatorGood(strategy);

    const cost = calculator.calculateShipping(100);
    expect(cost).toBe(105); // 100 + 5
  });

  test("should calculate express shipping cost", () => {
    const strategy = new ExpressShipping();
    const calculator = new ShippingCalculatorGood(strategy);

    const cost = calculator.calculateShipping(100);
    expect(cost).toBe(110); // 100 * 1.10
  });

  test("should calculate overnight shipping cost", () => {
    const strategy = new OvernightShipping();
    const calculator = new ShippingCalculatorGood(strategy);

    const cost = calculator.calculateShipping(100);
    expect(cost).toBe(120); // 100 * 1.20
  });

  test("should allow switching strategies at runtime", () => {
    const calculator = new ShippingCalculatorGood(new StandardShipping());
    expect(calculator.calculateShipping(100)).toBe(105);

    calculator.setStrategy(new ExpressShipping());
    expect(calculator.calculateShipping(100)).toBe(110);

    calculator.setStrategy(new OvernightShipping());
    expect(calculator.calculateShipping(100)).toBe(120);
  });

  test("demonstrates strategy pattern benefits", () => {
    // Easy to add new shipping strategies without modifying existing code
    class SameDayShipping {
      calculate(weight: number): number {
        return weight * 1.3; // 30% adicional
      }
    }

    const strategy = new SameDayShipping();
    const calculator = new ShippingCalculatorGood(strategy);
    expect(calculator.calculateShipping(100)).toBe(130);
  });
});
