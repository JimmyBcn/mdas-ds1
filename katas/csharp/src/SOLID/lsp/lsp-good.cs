using System;
using System.Collections.Generic;

// Cumplimiento del LSP: Jerarquía de herencia apropiada que no rompe expectativas
// ✅ Solución: Usar abstracciones apropiadas que coincidan con el comportamiento del mundo real

// Clase base para comportamiento común ✅
public abstract class Animal
{
  public abstract string Eat();
  public abstract string MakeSound();
}

// Interfaces separadas para diferentes capacidades ✅
public interface IFlyable
{
  string Fly();
}

public interface ISwimmable
{
  string Swim();
}

// Aves que SÍ pueden volar ✅
public class Eagle : Animal, IFlyable
{
  public override string Eat()
  {
    return "Águila comiendo pescado";
  }

  public override string MakeSound()
  {
    return "Águila: ¡Graznido!";
  }

  public string Fly()
  {
    return "¡Águila volando alto!";
  }
}

// Aves que NO pueden volar pero pueden nadar ✅
public class Penguin : Animal, ISwimmable
{
  public override string Eat()
  {
    return "Pingüino comiendo pescado";
  }

  public override string MakeSound()
  {
    return "Pingüino: ¡Graznido!";
  }

  public string Swim()
  {
    return "Pingüino nadando con gracia";
  }
}

// Aves que pueden hacer ambas cosas ✅
public class Duck : Animal, IFlyable, ISwimmable
{
  public override string Eat()
  {
    return "Pato comiendo semillas";
  }

  public override string MakeSound()
  {
    return "Pato: ¡Cuac!";
  }

  public string Fly()
  {
    return "Pato volando al estanque";
  }

  public string Swim()
  {
    return "Pato chapoteando en el agua";
  }
}

// Funciones que funcionan con contratos apropiados ✅
public class AnimalOperations
{
  public static string FeedAnimal(Animal animal)
  {
    return animal.Eat(); // ✅ TODOS los animales pueden comer
  }

  public static string MakeFlyableCreatureFly(IFlyable creature)
  {
    return creature.Fly(); // ✅ Solo cosas que SÍ pueden volar
  }

  public static string MakeSwimmableCreatureSwim(ISwimmable creature)
  {
    return creature.Swim(); // ✅ Solo cosas que SÍ pueden nadar
  }
}

// Probando - ¡sin fallos! ✅
Console.WriteLine("=== Pruebas de Animales con LSP ===");

var eagle = new Eagle();
var penguin = new Penguin();
var duck = new Duck();

// Todos los animales pueden ser tratados de la misma manera ✅
Console.WriteLine("Alimentando: " + AnimalOperations.FeedAnimal(eagle));
Console.WriteLine("Alimentando: " + AnimalOperations.FeedAnimal(penguin));
Console.WriteLine("Alimentando: " + AnimalOperations.FeedAnimal(duck));

// Solo a las criaturas voladoras se les pide volar ✅
Console.WriteLine("Volando: " + AnimalOperations.MakeFlyableCreatureFly(eagle));
Console.WriteLine("Volando: " + AnimalOperations.MakeFlyableCreatureFly(duck));
// ¡penguin no se le pide volar - seguro en tiempo de compilación!

// Solo a las criaturas nadadoras se les pide nadar ✅
Console.WriteLine("Nadando: " + AnimalOperations.MakeSwimmableCreatureSwim(penguin));
Console.WriteLine("Nadando: " + AnimalOperations.MakeSwimmableCreatureSwim(duck));
// ¡eagle no se le pide nadar - seguro en tiempo de compilación!
