package SOLID.isp;

// Violación del ISP: Interfaz ancha fuerza a las clases a implementar métodos que no usan
// ❌ Problema: Todos los dispositivos deben implementar todos los métodos, incluso si no los necesitan

public class IspBad {
    public static void main(String[] args) {
        SimplePrinter simplePrinter = new SimplePrinter();
        SimpleScanner simpleScanner = new SimpleScanner();

        System.out.println(simplePrinter.print("documento.pdf")); // ✅ Funciona
        // System.out.println(simplePrinter.scan()); // ❌ ¡Lanza error!

        // System.out.println(simpleScanner.print("documento.pdf")); // ❌ ¡Lanza error!
        System.out.println(simpleScanner.scan()); // ✅ Funciona
    }
}

// ❌ Interfaz ancha que fuerza a todos los dispositivos a implementar todo
interface Device {
    String print(String document);
    String scan();
}

// ❌ Impresora simple forzada a implementar scan()
class SimplePrinter implements Device {
    public String print(String document) {
        return "Imprimiendo documento: " + document;
    }

    // ❌ Forzada a implementar scan() aunque no puede escanear
    public String scan() {
        throw new UnsupportedOperationException("¡Esta impresora no puede escanear!");
    }
}

// ❌ Escáner simple forzado a implementar print()
class SimpleScanner implements Device {
    // ❌ Forzado a implementar print() aunque no puede imprimir
    public String print(String document) {
        throw new UnsupportedOperationException("¡Este escáner no puede imprimir!");
    }

    public String scan() {
        return "Escaneando documento...";
    }
}
