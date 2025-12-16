<?php
// Violación del LSP: Las clases derivadas rompen las expectativas de la clase padre
// ❌ Problema: Bird asume que TODOS los pájaros pueden volar

class Bird {
    public function fly(): string {
        return "¡Volando alto en el cielo!";
    }

    public function eat(): string {
        return "Comiendo deliciosa comida";
    }
}

// ❌ Problema: Penguin ES-UN Bird, ¡pero no puede volar!
class Penguin extends Bird {
    public function fly(): string {
        // ❌ Esto viola LSP - rompe la expectativa del padre
        throw new Exception("¡Los pingüinos no pueden volar!"); // ¡Comportamiento roto!
    }

    public function swim(): string {
        return "Nadando con gracia";
    }
}

class Eagle extends Bird {
    public function fly(): string {
        return "¡Volando como un águila!";
    }
}

// Esta función espera que TODOS los pájaros vuelen ❌
function makeBirdFly(Bird $bird): string {
    return $bird->fly(); // ¡Esto lanzará un error para Penguin!
}

// Probando la violación
echo "=== Demostración de Violación LSP ===" . PHP_EOL;

$eagle = new Eagle();
$penguin = new Penguin();

echo "Águila: " . makeBirdFly($eagle) . PHP_EOL; // ✅ Funciona bien

try {
    echo "Pingüino: " . makeBirdFly($penguin) . PHP_EOL; // ❌ ¡SE ROMPE!
} catch (Exception $error) {
    echo "ERROR: " . $error->getMessage() . PHP_EOL;
}
