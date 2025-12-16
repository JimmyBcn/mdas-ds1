// 🔧 EJERCICIO: OOP - Polymorphism (Polimorfismo)
//
// Instrucciones:
// 1. Analiza el archivo polymorphism-bad.ts e identifica los if/else repetitivos
// 2. Crea una clase abstracta y elimina los condicionales usando polimorfismo
// 3. Implementa tu solución aquí antes de ver polymorphism-good.ts
//
// Pistas:
// - ¿Qué métodos del AnimalProcessor tienen if/else verificando tipos?
// - ¿Cómo podrías usar una clase abstracta Animal?
// - ¿Qué métodos abstractos necesitarías (makeSound, feed, move)?
// - Cada clase hija debe implementar su propia versión de los métodos
// - AnimalProcessor debe funcionar con Animal[], sin verificar tipos
//
// Objetivo: Eliminar todos los if/else. Cada animal sabe su comportamiento.
// AnimalProcessor debe llamar a métodos sin conocer el tipo específico.
//
// Cuando termines, compara tu solución con polymorphism-good.ts

// Escribe tu solución aquí:

interface Animal {
  makeSound(): void;
  feed(): void;
  move(): void;
}

class Dog implements Animal {
  makeSound(): void {
    console.log("The dog barks.");
  }
  feed(): void {
    console.log("The dog is eating dog food.");
  }
  move(): void {
    console.log("The dog runs on all fours.");
  }
}

class Cat implements Animal {
  makeSound(): void {
    console.log("The cat meows.");
  }
  feed(): void {
    console.log("The cat is eating fish.");
  }
  move(): void {
    console.log("The cat moves gracefully.");
  }
}

class Bird implements Animal {
  makeSound(): void {
    console.log("The bird chirps.");
  }
  feed(): void {
    console.log("The bird is eating seeds.");
  }
  move(): void {
    console.log("The bird flies.");
  }
}

class AnimalProcessor {
  processAnimals(animals: Animal[]): void {
    animals.forEach((animal) => {
      animal.makeSound();
      animal.feed();
      animal.move();
    });
  }
}

// Ejemplo de uso
console.log("=== Uso Correcto de Polimorfismo ===");

const dog = new Dog();
const cat = new Cat();
const bird = new Bird();

const animalProcessor = new AnimalProcessor();

animalProcessor.processAnimals([dog, cat, bird]);

export { Animal, Dog, Cat, Bird, AnimalProcessor };
