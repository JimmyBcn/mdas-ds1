// Implementación del Patrón Builder: Construcción paso a paso con interfaz fluida
// ✅ Solución: Builder permite creación de objetos legible y flexible

// Clase Pizza con muchas propiedades opcionales
class Pizza {
  public size: string;
  public hasCheese: boolean;
  public hasPepperoni: boolean;
  public hasOlives: boolean;
  public hasMushrooms: boolean;

  constructor(size: string, hasCheese: boolean, hasPepperoni: boolean, hasOlives: boolean, hasMushrooms: boolean) {
    this.size = size;
    this.hasCheese = hasCheese;
    this.hasPepperoni = hasPepperoni;
    this.hasOlives = hasOlives;
    this.hasMushrooms = hasMushrooms;
  }

  public describe(): string {
    let description = `Pizza ${this.size}`;
    const toppings = [];
    if (this.hasCheese) toppings.push("queso");
    if (this.hasPepperoni) toppings.push("pepperoni");
    if (this.hasMushrooms) toppings.push("champiñones");
    if (this.hasOlives) toppings.push("aceitunas");
    if (toppings.length > 0) {
      description += ` con ${toppings.join(", ")}`;
    }
    return description;
  }
}

// ✅ Builder con interfaz fluida
class PizzaBuilder {
  private size: string = "mediana";
  private hasCheese: boolean = false;
  private hasPepperoni: boolean = false;
  private hasMushrooms: boolean = false;
  private hasOlives: boolean = false;

  public setSize(size: string): PizzaBuilder {
    this.size = size;
    return this; // ✅ Retorna 'this' para encadenamiento de métodos
  }

  public addCheese(): PizzaBuilder {
    this.hasCheese = true;
    return this;
  }

  public addPepperoni(): PizzaBuilder {
    this.hasPepperoni = true;
    return this;
  }

  public addMushrooms(): PizzaBuilder {
    this.hasMushrooms = true;
    return this;
  }

  public addOlives(): PizzaBuilder {
    this.hasOlives = true;
    return this;
  }

  public build(): Pizza {
    return new Pizza(this.size, this.hasCheese, this.hasPepperoni, this.hasOlives, this.hasMushrooms);
  }

  public reset(): PizzaBuilder {
    this.size = "mediana";
    this.hasCheese = false;
    this.hasPepperoni = false;
    this.hasMushrooms = false;
    this.hasOlives = false;
    return this;
  }
}

// ✅ Beneficios del patrón builder:
console.log("=== Solución con Patrón Builder ===");

// Código legible y auto-documentado ✅
const margherita = new PizzaBuilder()
  .setSize("grande") // ✅ Claro qué es cada parámetro
  .addCheese()
  .build();

// Fácil crear variaciones complejas ✅
const carnivora = new PizzaBuilder().setSize("extra grande").addCheese().addPepperoni().build();

// Configuración mínima con valores por defecto ✅
const pizzaSimple = new PizzaBuilder().setSize("pequeña").addMushrooms().build();

console.log("Margherita:", margherita.describe());
console.log("Carnívora:", carnivora.describe());
console.log("Pizza Simple:", pizzaSimple.describe());

export { Pizza, PizzaBuilder };
