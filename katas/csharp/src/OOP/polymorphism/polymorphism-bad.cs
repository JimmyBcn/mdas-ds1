using System;

// Violación de Polimorfismo: Lógica condicional para tipos
// ❌ Problema: Usar if/else o switch para diferentes tipos

public class DogData
{
  public string Type = "dog";
  public string Name;
}

public class CatData
{
  public string Type = "cat";
  public string Name;
}

public class BirdData
{
  public string Type = "bird";
  public string Name;
}

// ❌ Clase que necesita conocer todos los tipos específicos
public class AnimalProcessor
{
  // ❌ Método lleno de condicionales para cada tipo
  public void MakeSound(object animal)
  {
    if (animal is DogData dog)
    {
      Console.WriteLine($"{dog.Name} dice: ¡Guau guau!");
    }
    else if (animal is CatData cat)
    {
      Console.WriteLine($"{cat.Name} dice: ¡Miau miau!");
    }
    else if (animal is BirdData bird)
    {
      Console.WriteLine($"{bird.Name} dice: ¡Pío pío!");
    }
    // ❌ Si agrego un nuevo animal, debo modificar este método
  }

  // ❌ Más condicionales para cada comportamiento
  public void Feed(object animal)
  {
    if (animal is DogData dog)
    {
      Console.WriteLine($"{dog.Name} está comiendo croquetas");
    }
    else if (animal is CatData cat)
    {
      Console.WriteLine($"{cat.Name} está comiendo pescado");
    }
    else if (animal is BirdData bird)
    {
      Console.WriteLine($"{bird.Name} está comiendo semillas");
    }
  }

  // ❌ Y más condicionales para movimiento
  public void Move(object animal)
  {
    if (animal is DogData dog)
    {
      Console.WriteLine($"{dog.Name} está corriendo");
    }
    else if (animal is CatData cat)
    {
      Console.WriteLine($"{cat.Name} está saltando");
    }
    else if (animal is BirdData bird)
    {
      Console.WriteLine($"{bird.Name} está volando");
    }
  }
}

// ❌ Uso con condicionales por todos lados
Console.WriteLine("=== Violación de Polimorfismo ===");

var processor = new AnimalProcessor();

var dog = new DogData { Name = "Rex" };
var cat = new CatData { Name = "Luna" };
var bird = new BirdData { Name = "Piolín" };

var animals = new object[] { dog, cat, bird };

// ❌ El procesador debe verificar el tipo constantemente
foreach (var animal in animals)
{
  processor.MakeSound(animal);
  processor.Feed(animal);
  processor.Move(animal);
}

// ❌ Problemas:
// - Muchos if/else repetidos
// - Agregar nuevo animal requiere modificar MUCHOS métodos
// - Propenso a errores (olvidar un caso)
// - Viola Open/Closed Principle
// - Difícil de mantener y escalar
