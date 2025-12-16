<?php
// Cumplimiento del ISP: Dividir interfaz ancha en interfaces más pequeñas y enfocadas
// ✅ Solución: Crear interfaces separadas para diferentes capacidades

// ✅ Interfaces segregadas (separadas) para cada capacidad
interface Printable {
    public function print(string $document): string;
}

interface Scannable {
    public function scan(): string;
}

// ✅ Impresora simple solo implementa lo que necesita
class SimplePrinter implements Printable {
    public function print(string $document): string {
        return "Imprimiendo documento: $document";
    }
    // ✅ No necesita implementar scan()
}

// ✅ Escáner simple solo implementa lo que necesita
class SimpleScanner implements Scannable {
    public function scan(): string {
        return "Escaneando documento...";
    }
    // ✅ No necesita implementar print()
}

// ✅ Dispositivo multifunción implementa ambas interfaces
class AdvancedPrinter implements Printable, Scannable {
    public function print(string $document): string {
        return "Imprimiendo documento: $document";
    }

    public function scan(): string {
        return "Escaneando documento...";
    }
}

// Uso - ¡sin más implementaciones forzadas!
$simplePrinter = new SimplePrinter();
$simpleScanner = new SimpleScanner();
$advancedPrinter = new AdvancedPrinter();

echo $simplePrinter->print("documento.pdf") . PHP_EOL; // ✅ Funciona
// $simplePrinter->scan() - El método no existe (¡seguro en tiempo de compilación!)

echo $simpleScanner->scan() . PHP_EOL; // ✅ Funciona
// $simpleScanner->print() - El método no existe (¡seguro en tiempo de compilación!)

echo $advancedPrinter->print("documento.pdf") . PHP_EOL; // ✅ Funciona
echo $advancedPrinter->scan() . PHP_EOL; // ✅ Funciona

// ✅ Beneficios:
// 1. Interfaces pequeñas y enfocadas
// 2. Clases solo implementan lo que necesitan
// 3. Sin métodos que lancen errores
// 4. Cumple ISP: interfaces segregadas
