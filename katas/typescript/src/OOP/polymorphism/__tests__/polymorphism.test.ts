/**
 * Tests para el concepto de Polymorphism en OOP
 * Valida tanto las implementaciones malas como las buenas
 */

import { PaymentProcessor as PaymentProcessorBad } from "../polymorphism-bad";
import { PaymentProcessor as PaymentProcessorGood, CreditCardPayment, PayPalPayment, CryptoPayment } from "../polymorphism-good";

describe("Polymorphism - Bad Implementation", () => {
  let processor: PaymentProcessorBad;

  beforeEach(() => {
    processor = new PaymentProcessorBad();
  });

  test("should process credit card payment", () => {
    const result = processor.processPayment("credit_card", 100);
    expect(result).toContain("Tarjeta de Crédito");
    expect(result).toContain("100");
  });

  test("should process PayPal payment", () => {
    const result = processor.processPayment("paypal", 200);
    expect(result).toContain("PayPal");
    expect(result).toContain("200");
  });

  test("should process cryptocurrency payment", () => {
    const result = processor.processPayment("crypto", 300);
    expect(result).toContain("Criptomoneda");
    expect(result).toContain("300");
  });

  test("should handle unknown payment type", () => {
    const result = processor.processPayment("unknown", 100);
    expect(result).toContain("desconocido");
  });
});

describe("Polymorphism - Good Implementation", () => {
  let processor: PaymentProcessorGood;

  beforeEach(() => {
    processor = new PaymentProcessorGood();
  });

  test("should process credit card payment", () => {
    const payment = new CreditCardPayment();
    const result = processor.processPayment(payment, 100);
    expect(result).toContain("Tarjeta de Crédito");
    expect(result).toContain("100");
  });

  test("should process PayPal payment", () => {
    const payment = new PayPalPayment();
    const result = processor.processPayment(payment, 200);
    expect(result).toContain("PayPal");
    expect(result).toContain("200");
  });

  test("should process cryptocurrency payment", () => {
    const payment = new CryptoPayment();
    const result = processor.processPayment(payment, 300);
    expect(result).toContain("Criptomoneda");
    expect(result).toContain("300");
  });

  test("should handle different payment methods polymorphically", () => {
    const payments = [new CreditCardPayment(), new PayPalPayment(), new CryptoPayment()];

    payments.forEach((payment) => {
      const result = processor.processPayment(payment, 100);
      expect(result).toBeTruthy();
      expect(result.length).toBeGreaterThan(0);
    });
  });
});
