using System;
using System.Collections.Generic;

// Cumplimiento de Polimorfismo: Comportamiento específico sin condicionales
// ✅ Solución: Cada clase implementa su propio comportamiento

// ✅ Clase base define la interfaz común
public abstract class Animal
{
  protected string name;

  public Animal(string name)
  {
    this.name = name;
  }

  // ✅ Métodos abstractos - cada hijo DEBE implementarlos
  public abstract void MakeSound();
  public abstract void Feed();
  public abstract void Move();

  // ✅ Método común para todos
  public void Introduce()
  {
    Console.WriteLine($"\nSoy {name}:");
  }
}

// ✅ Cada clase implementa su comportamiento específico
public class Dog : Animal
{
  public Dog(string name) : base(name)
  {
  }

  public override void MakeSound()
  {
    Console.WriteLine($"{name} dice: ¡Guau guau!");
  }

  public override void Feed()
  {
    Console.WriteLine($"{name} está comiendo croquetas");
  }

  public override void Move()
  {
    Console.WriteLine($"{name} está corriendo");
  }
}

public class Cat : Animal
{
  public Cat(string name) : base(name)
  {
  }

  public override void MakeSound()
  {
    Console.WriteLine($"{name} dice: ¡Miau miau!");
  }

  public override void Feed()
  {
    Console.WriteLine($"{name} está comiendo pescado");
  }

  public override void Move()
  {
    Console.WriteLine($"{name} está saltando");
  }
}

public class Bird : Animal
{
  public Bird(string name) : base(name)
  {
  }

  public override void MakeSound()
  {
    Console.WriteLine($"{name} dice: ¡Pío pío!");
  }

  public override void Feed()
  {
    Console.WriteLine($"{name} está comiendo semillas");
  }

  public override void Move()
  {
    Console.WriteLine($"{name} está volando");
  }
}

// ✅ Procesador sin condicionales - usa polimorfismo
public class AnimalProcessor
{
  // ✅ Método genérico - funciona con cualquier Animal
  public void ProcessAnimals(List<Animal> animals)
  {
    foreach (var animal in animals)
    {
      animal.Introduce();
      animal.MakeSound(); // ✅ Llama al método correcto automáticamente
      animal.Feed(); // ✅ Sin if/else
      animal.Move(); // ✅ Sin switch
    }
  }
}

// ✅ Uso limpio sin condicionales
Console.WriteLine("=== Cumplimiento de Polimorfismo ===");

var dog = new Dog("Rex");
var cat = new Cat("Luna");
var bird = new Bird("Piolín");

// ✅ Array de tipo Animal - polimorfismo en acción
var animals = new List<Animal> { dog, cat, bird };

var processor = new AnimalProcessor();

// ✅ Un solo método procesa todos los tipos sin verificar
processor.ProcessAnimals(animals);

// ✅ Agregar nuevo animal es fácil - solo crear la clase
var fish = new Fish("Nemo");
Console.WriteLine("\n=== Nuevo animal agregado sin modificar código existente ===");

// ✅ Funciona inmediatamente sin cambiar AnimalProcessor
processor.ProcessAnimals(new List<Animal> { fish });

// ✅ Beneficios:
// - Sin if/else ni switch
// - Agregar nuevos animales no modifica código existente
// - Cada clase tiene su lógica encapsulada
// - Respeta Open/Closed Principle
// - Fácil de mantener y escalar

public class Fish : Animal
{
  public Fish(string name) : base(name)
  {
  }

  public override void MakeSound()
  {
    Console.WriteLine($"{name} hace burbujas: glu glu");
  }

  public override void Feed()
  {
    Console.WriteLine($"{name} está comiendo algas");
  }

  public override void Move()
  {
    Console.WriteLine($"{name} está nadando");
  }
}
