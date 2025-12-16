using System;
using System.Collections.Generic;

// Cumplimiento del OCP: Abierto para extensión, cerrado para modificación
// ✅ Solución: Usar interfaces para que se puedan agregar nuevos animales sin cambiar el código existente

public interface ICommunicable
{
  string Communicate();
}

public class Dog : ICommunicable
{
  public string Communicate()
  {
    return "woof woof";
  }
}

public class Cat : ICommunicable
{
  public string Communicate()
  {
    return "meow meow";
  }
}

// ✅ Esta clase nunca necesita ser modificada al agregar nuevos animales
public class Communication
{
  public string Communicate(ICommunicable animal)
  {
    return animal.Communicate();
  }

  public List<string> CommunicateMultiple(List<ICommunicable> animals)
  {
    var results = new List<string>();
    foreach (var animal in animals)
    {
      results.Add(animal.Communicate());
    }
    return results;
  }
}

// ✅ Agregar nuevos animales sin modificar el código existente
public class Fox : ICommunicable
{
  public string Communicate()
  {
    return "ring-ding-ding-ding-dingeringeding";
  }
}

public class Cow : ICommunicable
{
  public string Communicate()
  {
    return "moo moo";
  }
}

public class Duck : ICommunicable
{
  public string Communicate()
  {
    return "quack quack";
  }
}

// Uso - ¡agregar Fox, Cow, Duck NO requirió cambios en las clases existentes!
var communication = new Communication();
var dog = new Dog();
var cat = new Cat();
var fox = new Fox();
var cow = new Cow();
var duck = new Duck();

Console.WriteLine(communication.Communicate(dog)); // "woof woof"
Console.WriteLine(communication.Communicate(cat)); // "meow meow"
Console.WriteLine(communication.Communicate(fox)); // "ring-ding-ding-ding-dingeringeding"
Console.WriteLine(communication.Communicate(cow)); // "moo moo"
Console.WriteLine(communication.Communicate(duck)); // "quack quack"

var allAnimals = new List<ICommunicable> { dog, cat, fox, cow, duck };
var results = communication.CommunicateMultiple(allAnimals);
Console.WriteLine(string.Join(", ", results));
