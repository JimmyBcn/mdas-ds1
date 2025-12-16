<?php
// Violación del ISP: Interfaz ancha fuerza a las clases a implementar métodos que no usan
// ❌ Problema: Todos los dispositivos deben implementar todos los métodos, incluso si no los necesitan

// ❌ Interfaz ancha que fuerza a todos los dispositivos a implementar todo
interface Device {
    public function print(string $document): string;
    public function scan(): string;
}

// ❌ Impresora simple forzada a implementar scan()
class SimplePrinter implements Device {
    public function print(string $document): string {
        return "Imprimiendo documento: $document";
    }

    // ❌ Forzada a implementar scan() aunque no puede escanear
    public function scan(): string {
        throw new Exception("¡Esta impresora no puede escanear!");
    }
}

// ❌ Escáner simple forzado a implementar print()
class SimpleScanner implements Device {
    // ❌ Forzado a implementar print() aunque no puede imprimir
    public function print(string $document): string {
        throw new Exception("¡Este escáner no puede imprimir!");
    }

    public function scan(): string {
        return "Escaneando documento...";
    }
}

// Uso mostrando el problema
$simplePrinter = new SimplePrinter();
$simpleScanner = new SimpleScanner();

echo $simplePrinter->print("documento.pdf") . PHP_EOL; // ✅ Funciona
// echo $simplePrinter->scan() . PHP_EOL; // ❌ ¡Lanza error!

// echo $simpleScanner->print("documento.pdf") . PHP_EOL; // ❌ ¡Lanza error!
echo $simpleScanner->scan() . PHP_EOL; // ✅ Funciona
