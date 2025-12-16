using System;

// Cumplimiento del ISP: Dividir interfaz ancha en interfaces más pequeñas y enfocadas
// ✅ Solución: Crear interfaces separadas para diferentes capacidades

// ✅ Interfaces segregadas (separadas) para cada capacidad
public interface IPrintable
{
  string Print(string document);
}

public interface IScannable
{
  string Scan();
}

// ✅ Impresora simple solo implementa lo que necesita
public class SimplePrinter : IPrintable
{
  public string Print(string document)
  {
    return $"Imprimiendo documento: {document}";
  }
  // ✅ No necesita implementar Scan()
}

// ✅ Escáner simple solo implementa lo que necesita
public class SimpleScanner : IScannable
{
  public string Scan()
  {
    return "Escaneando documento...";
  }
  // ✅ No necesita implementar Print()
}

// ✅ Dispositivo multifunción implementa ambas interfaces
public class AdvancedPrinter : IPrintable, IScannable
{
  public string Print(string document)
  {
    return $"Imprimiendo documento: {document}";
  }

  public string Scan()
  {
    return "Escaneando documento...";
  }
}

// Uso - ¡sin más implementaciones forzadas!
var simplePrinter = new SimplePrinter();
var simpleScanner = new SimpleScanner();
var advancedPrinter = new AdvancedPrinter();

Console.WriteLine(simplePrinter.Print("documento.pdf")); // ✅ Funciona
                                                         // simplePrinter.Scan() - El método no existe (¡seguro en tiempo de compilación!)

Console.WriteLine(simpleScanner.Scan()); // ✅ Funciona
                                         // simpleScanner.Print() - El método no existe (¡seguro en tiempo de compilación!)

Console.WriteLine(advancedPrinter.Print("documento.pdf")); // ✅ Funciona
Console.WriteLine(advancedPrinter.Scan()); // ✅ Funciona

// ✅ Beneficios:
// 1. Interfaces pequeñas y enfocadas
// 2. Clases solo implementan lo que necesitan
// 3. Sin métodos que lancen errores
// 4. Cumple ISP: interfaces segregadas
