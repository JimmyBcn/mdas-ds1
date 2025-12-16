/**
 * Tests para el patrón Builder
 * Valida tanto las implementaciones malas como las buenas
 */

import { Pizza as PizzaBad } from "../builder-bad";
import { Pizza as PizzaGood, PizzaBuilder } from "../builder-good";

describe("Builder Pattern - Bad Implementation", () => {
  test("should create pizza with all parameters", () => {
    const pizza = new PizzaBad("grande", true, true, false, true);
    const description = pizza.describe();

    expect(description).toContain("grande");
    expect(description).toContain("queso");
    expect(description).toContain("pepperoni");
    expect(description).toContain("champiñones");
  });

  test("should create pizza with some parameters", () => {
    const pizza = new PizzaBad("mediana", true, false, false, false);
    const description = pizza.describe();

    expect(description).toContain("mediana");
    expect(description).toContain("queso");
    expect(description).not.toContain("pepperoni");
  });
});

describe("Builder Pattern - Good Implementation", () => {
  test("should create simple pizza", () => {
    const pizza = new PizzaBuilder().setSize("pequeña").addCheese().build();

    const description = pizza.describe();
    expect(description).toContain("pequeña");
    expect(description).toContain("queso");
  });

  test("should create complex pizza", () => {
    const pizza = new PizzaBuilder().setSize("grande").addCheese().addPepperoni().addMushrooms().build();

    const description = pizza.describe();
    expect(description).toContain("grande");
    expect(description).toContain("queso");
    expect(description).toContain("pepperoni");
    expect(description).toContain("champiñones");
  });

  test("should create pizza with selective toppings", () => {
    const pizza = new PizzaBuilder().setSize("mediana").addCheese().addOlives().build();

    const description = pizza.describe();
    expect(description).toContain("mediana");
    expect(description).toContain("queso");
    expect(description).toContain("aceitunas");
    expect(description).not.toContain("pepperoni");
  });

  test("should allow method chaining", () => {
    const pizza = new PizzaBuilder().setSize("grande").addCheese().addPepperoni().addMushrooms().addOlives().build();

    expect(pizza).toBeInstanceOf(PizzaGood);
    expect(pizza.describe()).toBeTruthy();
  });
});
