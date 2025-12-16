using System;

// Violación del OCP: Debemos modificar el código existente para agregar nuevos animales
// ❌ Problema: Para agregar un nuevo animal, debemos modificar la clase Communication

public class Dog
{
  public string MakeSound()
  {
    return "woof woof";
  }
}

public class Cat
{
  public string MakeSound()
  {
    return "meow meow";
  }
}

public class Fox
{
  public string MakeSound()
  {
    return "ring-ding-ding-ding-dingeringeding";
  }
}

// ❌ Esta clase debe modificarse cada vez que agregamos un nuevo animal
public class Communication
{
  public string Communicate(object animal)
  {
    // ❌ Cadena de if/else que debe modificarse para cada nuevo animal
    if (animal is Dog dog)
    {
      return dog.MakeSound();
    }
    else if (animal is Cat cat)
    {
      return cat.MakeSound();
    }
    else if (animal is Fox fox)
    {
      return fox.MakeSound();
    }
    else
    {
      throw new Exception("Animal desconocido");
    }
  }
}

// Uso
var communication = new Communication();
var dog = new Dog();
var cat = new Cat();
var fox = new Fox();

Console.WriteLine(communication.Communicate(dog)); // "woof woof"
Console.WriteLine(communication.Communicate(cat)); // "meow meow"
Console.WriteLine(communication.Communicate(fox)); // "ring-ding-ding-ding-dingeringeding"

// ❌ Problema: Para agregar Cow, debemos:
// 1. Crear la clase Cow
// 2. Modificar el tipo de parámetro en Communicate() ❌
// 3. Agregar una nueva rama if/else ❌
