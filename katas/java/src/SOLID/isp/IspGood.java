package SOLID.isp;

// Cumplimiento del ISP: Dividir interfaz ancha en interfaces más pequeñas y enfocadas
// ✅ Solución: Crear interfaces separadas para diferentes capacidades

public class IspGood {
    public static void main(String[] args) {
        SimplePrinter simplePrinter = new SimplePrinter();
        SimpleScanner simpleScanner = new SimpleScanner();
        AdvancedPrinter advancedPrinter = new AdvancedPrinter();

        System.out.println(simplePrinter.print("documento.pdf")); // ✅ Funciona
        // simplePrinter.scan() - El método no existe (¡seguro en tiempo de compilación!)

        System.out.println(simpleScanner.scan()); // ✅ Funciona
        // simpleScanner.print() - El método no existe (¡seguro en tiempo de compilación!)

        System.out.println(advancedPrinter.print("documento.pdf")); // ✅ Funciona
        System.out.println(advancedPrinter.scan()); // ✅ Funciona
    }
}

// ✅ Interfaces segregadas (separadas) para cada capacidad
interface Printable {
    String print(String document);
}

interface Scannable {
    String scan();
}

// ✅ Impresora simple solo implementa lo que necesita
class SimplePrinter implements Printable {
    public String print(String document) {
        return "Imprimiendo documento: " + document;
    }
    // ✅ No necesita implementar scan()
}

// ✅ Escáner simple solo implementa lo que necesita
class SimpleScanner implements Scannable {
    public String scan() {
        return "Escaneando documento...";
    }
    // ✅ No necesita implementar print()
}

// ✅ Dispositivo multifunción implementa ambas interfaces
class AdvancedPrinter implements Printable, Scannable {
    public String print(String document) {
        return "Imprimiendo documento: " + document;
    }

    public String scan() {
        return "Escaneando documento...";
    }
}

// ✅ Beneficios:
// 1. Interfaces pequeñas y enfocadas
// 2. Clases solo implementan lo que necesitan
// 3. Sin métodos que lancen errores
// 4. Cumple ISP: interfaces segregadas
