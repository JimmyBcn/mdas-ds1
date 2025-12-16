// Violación del ISP: Interfaz ancha fuerza a las clases a implementar métodos que no usan
// ❌ Problema: Todos los dispositivos deben implementar todos los métodos, incluso si no los necesitan

interface Device {
  print(document: string): string;
  scan(): string;
}

// ❌ Impresora simple debe implementar scan() aunque no lo necesite
class Printer implements Device {
  public print(document: string): string {
    return `Imprimiendo documento: ${document}`;
  }

  // ❌ Forzada a implementar scan() lanzando error
  public scan(): string {
    throw new Error("¡Esta impresora no puede escanear!");
  }
}

// ❌ Escáner simple debe implementar print() aunque no lo necesite
class Scanner implements Device {
  public scan(): string {
    return "Escaneando documento...";
  }

  // ❌ Forzada a implementar print() lanzando error
  public print(document: string): string {
    throw new Error("¡Este escáner no puede imprimir!");
  }
}

// Uso mostrando el problema
const printer = new Printer();
const scanner = new Scanner();

console.log(printer.print("documento.pdf")); // ✅ Funciona
// console.log(printer.scan());                // ❌ ¡Lanza error!

console.log(scanner.scan()); // ✅ Funciona
// console.log(scanner.print("documento.pdf")); // ❌ ¡Lanza error!

// ❌ Problemas:
// 1. Implementaciones forzadas que lanzan errores
// 2. Clases con métodos que nunca deberían existir
// 3. Interfaz demasiado ancha (no segregada)
// 4. Violación de ISP

export { Device, Printer, Scanner };
