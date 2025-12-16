// Violación del Patrón Builder: Demasiados parámetros en el constructor
// ❌ Problema: Objetos complejos con muchos parámetros opcionales

class Pizza {
  public size: string;
  public hasCheese: boolean;
  public hasPepperoni: boolean;
  public hasOlives: boolean;
  public hasMushrooms: boolean;

  // ❌ ¡Constructor telescópico - demasiados parámetros!
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

// ❌ Problemas al crear pizzas:
console.log("=== Violación del Patrón Builder ===");

// Difícil recordar el orden de los parámetros ❌
const margherita = new Pizza("grande", true, false, false, false);

// Orden de parámetros confuso ❌
const carnivora = new Pizza("extra grande", true, true, false, false);

console.log("Margherita:", margherita.describe());
console.log("Carnívora:", carnivora.describe());

export { Pizza };
