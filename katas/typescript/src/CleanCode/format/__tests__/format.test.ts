/**
 * Tests para el concepto de Format en Clean Code
 * Valida tanto las implementaciones malas como las buenas
 */

import { ShoppingCart as ShoppingCartBad, Product } from "../format-bad";
import { ShoppingCart as ShoppingCartGood } from "../format-good";

describe("Format - Bad Implementation", () => {
  let cart: ShoppingCartBad;

  beforeEach(() => {
    cart = new ShoppingCartBad();
  });

  test("should calculate total for products", () => {
    const products: Product[] = [
      { name: "Laptop", price: 1000, category: "Electronics" },
      { name: "Mouse", price: 50, category: "Electronics" },
    ];

    const total = cart.calculateTotal(products);
    expect(total).toBe(1050);
  });

  test("should apply discount to total", () => {
    const total = cart.applyDiscount(100, 0.1);
    expect(total).toBe(90);
  });

  test("should format receipt correctly", () => {
    const products: Product[] = [{ name: "Laptop", price: 1000, category: "Electronics" }];

    const receipt = cart.formatReceipt(products, 1000);
    expect(receipt).toContain("RECIBO");
    expect(receipt).toContain("Laptop");
    expect(receipt).toContain("Total: $1000");
  });
});

describe("Format - Good Implementation", () => {
  let cart: ShoppingCartGood;

  beforeEach(() => {
    cart = new ShoppingCartGood();
  });

  test("should calculate total for products", () => {
    const products: Product[] = [
      { name: "Laptop", price: 1000, category: "Electronics" },
      { name: "Mouse", price: 50, category: "Electronics" },
    ];

    const total = cart.calculateTotal(products);
    expect(total).toBe(1050);
  });

  test("should apply discount to total", () => {
    const total = cart.applyDiscount(100, 0.1);
    expect(total).toBe(90);
  });

  test("should format receipt correctly", () => {
    const products: Product[] = [{ name: "Laptop", price: 1000, category: "Electronics" }];

    const receipt = cart.formatReceipt(products, 1000);
    expect(receipt).toContain("RECIBO");
    expect(receipt).toContain("Laptop");
    expect(receipt).toContain("Total: $1000");
  });

  test("should handle empty cart", () => {
    const total = cart.calculateTotal([]);
    expect(total).toBe(0);
  });

  test("should apply zero discount correctly", () => {
    const total = cart.applyDiscount(100, 0);
    expect(total).toBe(100);
  });
});
