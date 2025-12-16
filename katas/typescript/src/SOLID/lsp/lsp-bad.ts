// Violación del LSP: La subclase no puede sustituir a la clase base sin romper el comportamiento
// ❌ Problema: Penguin hereda de Bird pero no puede volar, rompiendo las expectativas

// ❌ Clase base que asume que todas las aves vuelan
class Bird {
  constructor(public name: string) {}

  // ❌ Método que asume que todas las aves pueden volar
  public fly(): string {
    return `${this.name} está volando`;
  }

  public eat(): string {
    return `${this.name} está comiendo`;
  }
}

// ✅ Eagle puede volar - funciona bien
class Eagle extends Bird {
  public fly(): string {
    return `${this.name} vuela alto en el cielo`;
  }
}

// ❌ Penguin NO puede volar - ¡viola LSP!
class Penguin extends Bird {
  public fly(): string {
    // ❌ Debe lanzar error o comportarse diferente a la clase base
    throw new Error(`${this.name} no puede volar - ¡es un pingüino!`);
  }

  public swim(): string {
    return `${this.name} está nadando`;
  }
}

// ❌ Función que espera que TODAS las aves puedan volar
function makeBirdFly(bird: Bird): string {
  return bird.fly(); // ❌ ¡Falla con Penguin!
}

// Uso que demuestra la violación
console.log("=== Violación del LSP ===");

const eagle = new Eagle("Águila Real");
const penguin = new Penguin("Pingüino Emperador");

console.log(makeBirdFly(eagle)); // ✅ Funciona
// console.log(makeBirdFly(penguin)); // ❌ ¡Lanza error! Viola LSP

// ❌ El código debe verificar el tipo antes de usar
const birds: Bird[] = [eagle, penguin];
birds.forEach((bird) => {
  console.log(bird.eat()); // ✅ Funciona para ambos
  // bird.fly(); // ❌ Fallaría con penguin

  // ❌ Solución temporal incorrecta: verificar tipo
  if (bird instanceof Penguin) {
    console.log(bird.swim());
  } else {
    console.log(bird.fly());
  }
});

// ❌ Problemas:
// 1. Penguin no puede sustituir a Bird sin romper el código
// 2. Necesitamos verificaciones de tipo (instanceof)
// 3. El polimorfismo no funciona correctamente
// 4. Violación clara del Liskov Substitution Principle

export { Bird, Eagle, Penguin, makeBirdFly };
