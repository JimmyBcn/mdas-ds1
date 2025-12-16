using System;

// Violación del ISP: Interfaz ancha fuerza a las clases a implementar métodos que no usan
// ❌ Problema: Todos los dispositivos deben implementar todos los métodos, incluso si no los necesitan

// ❌ Interfaz ancha que fuerza a todos los dispositivos a implementar todo
public interface IDevice
{
  string Print(string document);
  string Scan();
}

// ❌ Impresora simple forzada a implementar Scan()
public class SimplePrinter : IDevice
{
  public string Print(string document)
  {
    return $"Imprimiendo documento: {document}";
  }

  // ❌ Forzada a implementar Scan() aunque no puede escanear
  public string Scan()
  {
    throw new Exception("¡Esta impresora no puede escanear!");
  }
}

// ❌ Escáner simple forzado a implementar Print()
public class SimpleScanner : IDevice
{
  // ❌ Forzado a implementar Print() aunque no puede imprimir
  public string Print(string document)
  {
    throw new Exception("¡Este escáner no puede imprimir!");
  }

  public string Scan()
  {
    return "Escaneando documento...";
  }
}

// Uso mostrando el problema
var simplePrinter = new SimplePrinter();
var simpleScanner = new SimpleScanner();

Console.WriteLine(simplePrinter.Print("documento.pdf")); // ✅ Funciona
                                                         // Console.WriteLine(simplePrinter.Scan()); // ❌ ¡Lanza error!

// Console.WriteLine(simpleScanner.Print("documento.pdf")); // ❌ ¡Lanza error!
Console.WriteLine(simpleScanner.Scan()); // ✅ Funciona
