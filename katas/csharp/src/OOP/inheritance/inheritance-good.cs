using System;
using System.Collections.Generic;

// Cumplimiento de Herencia: Reutilización mediante clase base
// ✅ Solución: Código común en clase padre, específico en hijos

// ✅ Clase base con comportamiento común
public class Animal
{
  // ✅ Propiedades comunes protegidas (accesibles en hijos)
  protected string name;
  protected int age;
  protected double weight;

  public Animal(string name, int age, double weight)
  {
    this.name = name;
    this.age = age;
    this.weight = weight;
  }

  // ✅ Métodos comunes definidos una sola vez
  public void Eat()
  {
    Console.WriteLine($"{name} está comiendo");
    weight += 0.5;
  }

  public void Sleep()
  {
    Console.WriteLine($"{name} está durmiendo");
  }

  public string GetInfo()
  {
    return $"Nombre: {name}, Edad: {age} años, Peso: {weight}kg";
  }

  // ✅ Método para que cada hijo implemente su sonido
  public virtual void MakeSound()
  {
    Console.WriteLine($"{name} hace un sonido");
  }
}

// ✅ Dog hereda de Animal - sin duplicación
public class Dog : Animal
{
  public Dog(string name, int age, double weight) : base(name, age, weight)
  {
  }

  // ✅ Solo comportamiento específico de perros
  public override void MakeSound()
  {
    Console.WriteLine($"{name} dice: ¡Guau guau!");
  }

  public void Fetch()
  {
    Console.WriteLine($"{name} está trayendo la pelota");
  }
}

// ✅ Cat hereda de Animal - sin duplicación
public class Cat : Animal
{
  public Cat(string name, int age, double weight) : base(name, age, weight)
  {
  }

  // ✅ Solo comportamiento específico de gatos
  public override void MakeSound()
  {
    Console.WriteLine($"{name} dice: ¡Miau miau!");
  }

  public void Purr()
  {
    Console.WriteLine($"{name} está ronroneando");
  }
}

// ✅ Bird hereda de Animal - sin duplicación
public class Bird : Animal
{
  public Bird(string name, int age, double weight) : base(name, age, weight)
  {
  }

  // ✅ Solo comportamiento específico de pájaros
  public override void MakeSound()
  {
    Console.WriteLine($"{name} dice: ¡Pío pío!");
  }

  public void Fly()
  {
    Console.WriteLine($"{name} está volando");
  }
}

// ✅ Código reutilizado y fácil de mantener
Console.WriteLine("=== Cumplimiento de Herencia ===");

var dog = new Dog("Rex", 5, 25);
var cat = new Cat("Luna", 3, 4);
var bird = new Bird("Piolín", 1, 0.5);

// ✅ Métodos heredados funcionan igual
Console.WriteLine(dog.GetInfo());
dog.Eat();
dog.MakeSound();
dog.Fetch();

Console.WriteLine(cat.GetInfo());
cat.Eat();
cat.MakeSound();
cat.Purr();

Console.WriteLine(bird.GetInfo());
bird.Eat();
bird.MakeSound();
bird.Fly();

// ✅ Si necesito cambiar Eat() o Sleep(), cambio una sola vez en Animal
// ✅ Nuevos animales heredan automáticamente el comportamiento común
// ✅ Consistencia garantizada

// ✅ Bonus: Puedo trabajar con tipo Animal
var animals = new List<Animal> { dog, cat, bird };
Console.WriteLine("\n=== Todos los animales ===");
foreach (var animal in animals)
{
  animal.Eat(); // ✅ Funciona para todos
  animal.MakeSound(); // ✅ Cada uno con su sonido específico
}
