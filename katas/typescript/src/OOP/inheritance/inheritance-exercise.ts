// 🔧 EJERCICIO: OOP - Inheritance (Herencia)
//
// Instrucciones:
// 1. Analiza el archivo inheritance-bad.ts e identifica código duplicado
// 2. Crea una clase base Animal y haz que los hijos hereden de ella
// 3. Implementa tu solución aquí antes de ver inheritance-good.ts
//
// Pistas:
// - ¿Qué métodos se repiten en Dog, Cat y Bird?
// - ¿Qué propiedades son comunes (name, age, weight)?
// - ¿Cómo podrías usar `extends` para heredar comportamiento?
// - Usa `protected` para propiedades accesibles en hijos
// - Deja comportamiento específico (bark, meow, chirp) en cada hijo
//
// Objetivo: Eliminar duplicación moviendo código común a clase Animal
// Cada hijo debe heredar eat(), sleep(), getInfo() y tener su propio sonido
//
// Cuando termines, compara tu solución con inheritance-good.ts

// Escribe tu solución aquí:

class Animal {
  protected name: string;
  protected age: number;
  protected weight: number;

  constructor(name: string, age: number, weight: number) {
    this.name = name;
    this.age = age;
    this.weight = weight;
  }

  public eat(): void {
    console.log(`${this.name} está comiendo.`);
  }

  public sleep(): void {
    console.log(`${this.name} está durmiendo.`);
  }

  public getInfo(): string {
    return `Nombre: ${this.name}, Edad: ${this.age}, Peso: ${this.weight}`;
  }
}

class Dog extends Animal {
  public bark(): void {
    console.log(`${this.name} dice: ¡Guau guau!`);
  }
}

class Cat extends Animal {
  public meow(): void {
    console.log(`${this.name} dice: ¡Miau miau!`);
  }
}

class Bird extends Animal {
  public chirp(): void {
    console.log(`${this.name} dice: ¡Pío pío!`);
  }
}

// Ejemplo de uso
console.log("=== Uso Correcto de Herencia ===");

const dog = new Dog("Rex", 5, 25);
const cat = new Cat("Luna", 3, 4);
const bird = new Bird("Piolín", 1, 0.5);

console.log(dog.getInfo());
dog.eat();
dog.bark();

console.log(cat.getInfo());
cat.eat();
cat.meow();

console.log(bird.getInfo());
bird.eat();
bird.chirp();

export { Animal, Dog, Cat, Bird };
