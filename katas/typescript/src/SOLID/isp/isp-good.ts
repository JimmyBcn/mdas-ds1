// Cumplimiento del ISP: Dividir interfaz ancha en interfaces más pequeñas y enfocadas
// ✅ Solución: Crear interfaces separadas para diferentes capacidades

// ✅ Interfaces segregadas (separadas) para cada capacidad
interface Printable {
  print(document: string): string;
}

interface Scannable {
  scan(): string;
}

// ✅ Impresora simple solo implementa lo que necesita
class SimplePrinter implements Printable {
  public print(document: string): string {
    return `Imprimiendo documento: ${document}`;
  }
  // ✅ No necesita implementar scan()
}

// ✅ Escáner simple solo implementa lo que necesita
class SimpleScanner implements Scannable {
  public scan(): string {
    return "Escaneando documento...";
  }
  // ✅ No necesita implementar print()
}

// ✅ Dispositivo multifunción implementa ambas interfaces
class AdvancedPrinter implements Printable, Scannable {
  public print(document: string): string {
    return `Imprimiendo documento: ${document}`;
  }

  public scan(): string {
    return "Escaneando documento...";
  }
}

// Uso - ¡sin más implementaciones forzadas!
const simplePrinter = new SimplePrinter();
const simpleScanner = new SimpleScanner();
const advancedPrinter = new AdvancedPrinter();

console.log(simplePrinter.print("documento.pdf")); // ✅ Funciona
// simplePrinter.scan() - El método no existe (¡seguro en tiempo de compilación!)

console.log(simpleScanner.scan()); // ✅ Funciona
// simpleScanner.print() - El método no existe (¡seguro en tiempo de compilación!)

console.log(advancedPrinter.print("documento.pdf")); // ✅ Funciona
console.log(advancedPrinter.scan()); // ✅ Funciona

// ✅ Beneficios:
// 1. Interfaces pequeñas y enfocadas
// 2. Clases solo implementan lo que necesitan
// 3. Sin métodos que lancen errores
// 4. Cumple ISP: interfaces segregadas

export { Printable, Scannable, SimplePrinter, SimpleScanner, AdvancedPrinter };
