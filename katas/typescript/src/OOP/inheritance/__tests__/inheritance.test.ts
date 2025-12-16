/**
 * Tests para el concepto de Inheritance en OOP
 * Valida tanto las implementaciones malas como las buenas
 */

import { Dog as DogBad, Cat as CatBad } from "../inheritance-bad";
import { Dog as DogGood, Cat as CatGood } from "../inheritance-good";

describe("Inheritance - Bad Implementation", () => {
  test("should make dog sound correctly", () => {
    const dog = new DogBad("Firulais", 5);
    expect(dog.makeSound()).toBe("Guau guau");
  });

  test("should make cat sound correctly", () => {
    const cat = new CatBad("Michi", 3);
    expect(cat.makeSound()).toBe("Miau miau");
  });

  test("should get dog info correctly", () => {
    const dog = new DogBad("Firulais", 5);
    expect(dog.getInfo()).toContain("Firulais");
    expect(dog.getInfo()).toContain("5");
  });

  test("should get cat info correctly", () => {
    const cat = new CatBad("Michi", 3);
    expect(cat.getInfo()).toContain("Michi");
    expect(cat.getInfo()).toContain("3");
  });
});

describe("Inheritance - Good Implementation", () => {
  test("should make dog sound correctly", () => {
    const dog = new DogGood("Firulais", 5);
    expect(dog.makeSound()).toBe("Guau guau");
  });

  test("should make cat sound correctly", () => {
    const cat = new CatGood("Michi", 3);
    expect(cat.makeSound()).toBe("Miau miau");
  });

  test("should get dog info correctly", () => {
    const dog = new DogGood("Firulais", 5);
    expect(dog.getInfo()).toContain("Firulais");
    expect(dog.getInfo()).toContain("5");
  });

  test("should get cat info correctly", () => {
    const cat = new CatGood("Michi", 3);
    expect(cat.getInfo()).toContain("Michi");
    expect(cat.getInfo()).toContain("3");
  });

  test("should inherit common behavior from Animal", () => {
    const dog = new DogGood("Rex", 4);
    const cat = new CatGood("Felix", 2);

    expect(dog.getInfo()).toBeTruthy();
    expect(cat.getInfo()).toBeTruthy();
  });
});
