// Cumplimiento del LSP: Las subclases pueden sustituir a la clase base sin problemas
// ✅ Solución: Separar jerarquías según capacidades reales

// ✅ Clase base con comportamiento común a TODAS las aves
abstract class Animal {
  constructor(public name: string) {}

  // ✅ Comportamiento que TODAS las aves comparten
  public eat(): string {
    return `${this.name} está comiendo`;
  }

  public sleep(): string {
    return `${this.name} está durmiendo`;
  }
}

// ✅ Clase para aves que SÍ pueden volar
abstract class FlyingBird extends Animal {
  // ✅ Ahora fly() solo está en aves que pueden volar
  public fly(): string {
    return `${this.name} está volando`;
  }
}

// ✅ Clase para aves que NO pueden volar
abstract class FlightlessBird extends Animal {
  // ✅ Comportamiento específico de aves que no vuelan
  public walk(): string {
    return `${this.name} está caminando`;
  }
}

// ✅ Eagle es un ave voladora
class Eagle extends FlyingBird {
  public fly(): string {
    return `${this.name} vuela alto en el cielo`;
  }
}

// ✅ Duck es un ave voladora
class Duck extends FlyingBird {
  public fly(): string {
    return `${this.name} vuela sobre el lago`;
  }

  public swim(): string {
    return `${this.name} está nadando`;
  }
}

// ✅ Penguin es un ave que no vuela - hereda de FlightlessBird
class Penguin extends FlightlessBird {
  public swim(): string {
    return `${this.name} está nadando`;
  }

  public walk(): string {
    return `${this.name} está caminando sobre el hielo`;
  }
}

// ✅ Funciones que trabajan con las jerarquías correctas
function makeFlyingBirdFly(bird: FlyingBird): string {
  return bird.fly(); // ✅ Siempre funciona - todas pueden volar
}

function feedAnimal(animal: Animal): string {
  return animal.eat(); // ✅ Funciona con TODAS las aves
}

// Uso que demuestra el cumplimiento
console.log("=== Cumplimiento del LSP ===");

const eagle = new Eagle("Águila Real");
const duck = new Duck("Pato Silvestre");
const penguin = new Penguin("Pingüino Emperador");

// ✅ Funciones tipadas correctamente
console.log(makeFlyingBirdFly(eagle)); // ✅ Funciona
console.log(makeFlyingBirdFly(duck)); // ✅ Funciona
// makeFlyingBirdFly(penguin); // ✅ Error de compilación - ¡no compila!

// ✅ Todas las aves pueden comer
const allAnimals: Animal[] = [eagle, duck, penguin];
allAnimals.forEach((animal) => {
  console.log(feedAnimal(animal)); // ✅ Funciona para todas
});

// ✅ Aves voladoras pueden volar
const flyingBirds: FlyingBird[] = [eagle, duck];
flyingBirds.forEach((bird) => {
  console.log(bird.fly()); // ✅ Seguro - todas vuelan
});

// ✅ Penguin tiene sus propios métodos
console.log(penguin.swim());
console.log(penguin.walk());

// ✅ Beneficios:
// 1. Cada subclase puede sustituir a su clase base correctamente
// 2. No hay excepciones ni comportamientos inesperados
// 3. El sistema de tipos ayuda a prevenir errores
// 4. Cumple perfectamente el Liskov Substitution Principle

export { Animal, FlyingBird, FlightlessBird, Eagle, Duck, Penguin, makeFlyingBirdFly, feedAnimal };
