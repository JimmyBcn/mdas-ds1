using System;

// Violación de Herencia: Código duplicado sin reutilización
// ❌ Problema: Lógica repetida en cada clase

public class Dog
{
  // ❌ Código duplicado en todas las clases de animales
  private string name;
  private int age;
  private double weight;

  public Dog(string name, int age, double weight)
  {
    this.name = name;
    this.age = age;
    this.weight = weight;
  }

  // ❌ Métodos comunes duplicados
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

  // Método específico
  public void Bark()
  {
    Console.WriteLine($"{name} dice: ¡Guau guau!");
  }
}

public class Cat
{
  // ❌ Mismo código duplicado otra vez
  private string name;
  private int age;
  private double weight;

  public Cat(string name, int age, double weight)
  {
    this.name = name;
    this.age = age;
    this.weight = weight;
  }

  // ❌ Métodos comunes duplicados exactamente igual
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

  // Método específico
  public void Meow()
  {
    Console.WriteLine($"{name} dice: ¡Miau miau!");
  }
}

public class Bird
{
  // ❌ Y otra vez el mismo código duplicado
  private string name;
  private int age;
  private double weight;

  public Bird(string name, int age, double weight)
  {
    this.name = name;
    this.age = age;
    this.weight = weight;
  }

  // ❌ Métodos comunes duplicados una tercera vez
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

  // Método específico
  public void Chirp()
  {
    Console.WriteLine($"{name} dice: ¡Pío pío!");
  }
}

// ❌ Mucho código duplicado y difícil de mantener
Console.WriteLine("=== Violación de Herencia ===");

var dog = new Dog("Rex", 5, 25);
var cat = new Cat("Luna", 3, 4);
var bird = new Bird("Piolín", 1, 0.5);

Console.WriteLine(dog.GetInfo());
dog.Eat();
dog.Bark();

Console.WriteLine(cat.GetInfo());
cat.Eat();
cat.Meow();

Console.WriteLine(bird.GetInfo());
bird.Eat();
bird.Chirp();

// ❌ Si necesito cambiar Eat() o Sleep(), debo modificar 3 clases
// ❌ Si agrego más animales, más duplicación
// ❌ Propenso a inconsistencias
