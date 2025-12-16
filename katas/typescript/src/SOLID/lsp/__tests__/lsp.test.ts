/**
 * Tests para el Liskov Substitution Principle (LSP)
 * Valida tanto las implementaciones malas como las buenas
 */

import { Bird, Eagle, Penguin, makeBirdFly } from "../lsp-bad";
import { Animal, FlyingBird, FlightlessBird, Eagle as EagleGood, Duck, Penguin as PenguinGood, makeFlyingBirdFly, feedAnimal } from "../lsp-good";

describe("LSP - Bad Implementation", () => {
  test("should allow Eagle to fly", () => {
    const eagle = new Eagle("Águila");
    expect(eagle.fly()).toContain("vuela alto");
  });

  test("should allow all birds to eat", () => {
    const eagle = new Eagle("Águila");
    const penguin = new Penguin("Pingüino");

    expect(eagle.eat()).toContain("comiendo");
    expect(penguin.eat()).toContain("comiendo");
  });

  test("demonstrates LSP violation - Penguin cannot fly", () => {
    const penguin = new Penguin("Pingüino");

    // Penguin hereda de Bird pero no puede volar - viola LSP
    expect(() => penguin.fly()).toThrow("no puede volar");
  });

  test("demonstrates LSP violation - makeBirdFly fails with Penguin", () => {
    const eagle = new Eagle("Águila");
    const penguin = new Penguin("Pingüino");

    // Eagle funciona bien
    expect(makeBirdFly(eagle)).toContain("vuela");

    // Penguin rompe la función - no puede sustituir a Bird
    expect(() => makeBirdFly(penguin)).toThrow();
  });

  test("Penguin can swim", () => {
    const penguin = new Penguin("Pingüino");
    expect(penguin.swim()).toContain("nadando");
  });
});

describe("LSP - Good Implementation", () => {
  test("should allow all animals to eat", () => {
    const eagle = new EagleGood("Águila");
    const duck = new Duck("Pato");
    const penguin = new PenguinGood("Pingüino");

    expect(feedAnimal(eagle)).toContain("comiendo");
    expect(feedAnimal(duck)).toContain("comiendo");
    expect(feedAnimal(penguin)).toContain("comiendo");
  });

  test("should allow flying birds to fly", () => {
    const eagle = new EagleGood("Águila");
    const duck = new Duck("Pato");

    expect(makeFlyingBirdFly(eagle)).toContain("vuela");
    expect(makeFlyingBirdFly(duck)).toContain("vuela");
  });

  test("should allow penguin to swim and walk", () => {
    const penguin = new PenguinGood("Pingüino");

    expect(penguin.swim()).toContain("nadando");
    expect(penguin.walk()).toContain("caminando");
  });

  test("demonstrates LSP compliance - proper type hierarchy", () => {
    const eagle = new EagleGood("Águila");
    const duck = new Duck("Pato");
    const penguin = new PenguinGood("Pingüino");

    // Todas las aves pueden comer (heredan de Animal)
    const allAnimals: Animal[] = [eagle, duck, penguin];
    allAnimals.forEach((animal) => {
      expect(animal.eat()).toContain("comiendo");
    });

    // Solo las aves voladoras pueden volar
    const flyingBirds: FlyingBird[] = [eagle, duck];
    flyingBirds.forEach((bird) => {
      expect(bird.fly()).toContain("vuela");
    });

    // Penguin no está en flyingBirds - el compilador previene el error
    // No hay forma de pasar penguin a makeFlyingBirdFly sin error de compilación
  });

  test("Duck can both fly and swim", () => {
    const duck = new Duck("Pato");

    expect(duck.fly()).toContain("vuela");
    expect(duck.swim()).toContain("nadando");
  });

  test("demonstrates proper substitution", () => {
    // Las subclases pueden sustituir correctamente a sus clases base
    const flyingBird: FlyingBird = new EagleGood("Águila");
    const flightlessBird: FlightlessBird = new PenguinGood("Pingüino");

    // FlyingBird siempre puede volar
    expect(flyingBird.fly()).toBeTruthy();

    // FlightlessBird siempre puede caminar
    expect(flightlessBird.walk()).toBeTruthy();
  });
});
