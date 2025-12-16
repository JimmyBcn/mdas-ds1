using System;

// Violación del LSP: Las clases derivadas rompen las expectativas de la clase padre
// ❌ Problema: FlyingBird asume que TODOS los pájaros pueden volar

public class Bird
{
  public virtual string Fly()
  {
    return "¡Volando alto en el cielo!";
  }

  public string Eat()
  {
    return "Comiendo deliciosa comida";
  }
}

// ❌ Problema: Penguin ES-UN Bird, ¡pero no puede volar!
public class Penguin : Bird
{
  public override string Fly()
  {
    // ❌ Esto viola LSP - rompe la expectativa del padre
    throw new Exception("¡Los pingüinos no pueden volar!"); // ¡Comportamiento roto!
  }

  public string Swim()
  {
    return "Nadando con gracia";
  }
}

public class Eagle : Bird
{
  public override string Fly()
  {
    return "¡Volando como un águila!";
  }
}

// Esta función espera que TODOS los pájaros vuelen ❌
public class BirdOperations
{
  public static string MakeBirdFly(Bird bird)
  {
    return bird.Fly(); // ¡Esto lanzará un error para Penguin!
  }
}

// Probando la violación
Console.WriteLine("=== Demostración de Violación LSP ===");

var eagle = new Eagle();
var penguin = new Penguin();

Console.WriteLine("Águila: " + BirdOperations.MakeBirdFly(eagle)); // ✅ Funciona bien

try
{
  Console.WriteLine("Pingüino: " + BirdOperations.MakeBirdFly(penguin)); // ❌ ¡SE ROMPE!
}
catch (Exception error)
{
  Console.WriteLine("ERROR: " + error.Message);
}
