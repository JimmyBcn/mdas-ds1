/**
 * Tests para el patrón Adapter
 * Valida tanto las implementaciones malas como las buenas
 */

import { PaymentProcessor as PaymentProcessorBad } from "../adapter-bad";
import { PaymentProcessor as PaymentProcessorGood, StripeAdapter, PayPalAdapter } from "../adapter-good";

describe("Adapter Pattern - Bad Implementation", () => {
  let processor: PaymentProcessorBad;

  beforeEach(() => {
    processor = new PaymentProcessorBad();
  });

  test("should process Stripe payment", () => {
    const result = processor.processPayment("stripe", 100);
    expect(result).toContain("Stripe");
    expect(result).toContain("100");
  });

  test("should process PayPal payment", () => {
    const result = processor.processPayment("paypal", 200);
    expect(result).toContain("PayPal");
    expect(result).toContain("200");
  });

  test("should throw error for unknown payment type", () => {
    expect(() => processor.processPayment("unknown", 100)).toThrow();
  });
});

describe("Adapter Pattern - Good Implementation", () => {
  test("should process Stripe payment through adapter", () => {
    const adapter = new StripeAdapter();
    const processor = new PaymentProcessorGood(adapter);

    const result = processor.processPayment(100);
    expect(result).toContain("Stripe");
    expect(result).toContain("100");
  });

  test("should process PayPal payment through adapter", () => {
    const adapter = new PayPalAdapter();
    const processor = new PaymentProcessorGood(adapter);

    const result = processor.processPayment(200);
    expect(result).toContain("PayPal");
    expect(result).toContain("200");
  });

  test("should allow switching payment adapters", () => {
    const stripeAdapter = new StripeAdapter();
    const paypalAdapter = new PayPalAdapter();

    const processor1 = new PaymentProcessorGood(stripeAdapter);
    const processor2 = new PaymentProcessorGood(paypalAdapter);

    expect(processor1.processPayment(100)).toContain("Stripe");
    expect(processor2.processPayment(100)).toContain("PayPal");
  });

  test("demonstrates adapter pattern benefits", () => {
    // Can easily add new payment providers by creating new adapters
    const adapter = new StripeAdapter();
    expect(adapter.pay(100)).toContain("Procesando");
  });
});
