<?php
// Violación de Polimorfismo: Lógica condicional para tipos
// ❌ Problema: Usar if/else o switch para diferentes tipos

// ❌ Sin herencia ni polimorfismo - solo arrays asociativos
class AnimalProcessor {
    // ❌ Método lleno de condicionales para cada tipo
    public function makeSound(array $animal): void {
        if ($animal['type'] === 'dog') {
            echo "{$animal['name']} dice: ¡Guau guau!" . PHP_EOL;
        } elseif ($animal['type'] === 'cat') {
            echo "{$animal['name']} dice: ¡Miau miau!" . PHP_EOL;
        } elseif ($animal['type'] === 'bird') {
            echo "{$animal['name']} dice: ¡Pío pío!" . PHP_EOL;
        }
        // ❌ Si agrego un nuevo animal, debo modificar este método
    }

    // ❌ Más condicionales para cada comportamiento
    public function feed(array $animal): void {
        if ($animal['type'] === 'dog') {
            echo "{$animal['name']} está comiendo croquetas" . PHP_EOL;
        } elseif ($animal['type'] === 'cat') {
            echo "{$animal['name']} está comiendo pescado" . PHP_EOL;
        } elseif ($animal['type'] === 'bird') {
            echo "{$animal['name']} está comiendo semillas" . PHP_EOL;
        }
    }

    // ❌ Y más condicionales para movimiento
    public function move(array $animal): void {
        if ($animal['type'] === 'dog') {
            echo "{$animal['name']} está corriendo" . PHP_EOL;
        } elseif ($animal['type'] === 'cat') {
            echo "{$animal['name']} está saltando" . PHP_EOL;
        } elseif ($animal['type'] === 'bird') {
            echo "{$animal['name']} está volando" . PHP_EOL;
        }
    }
}

// ❌ Uso con condicionales por todos lados
echo "=== Violación de Polimorfismo ===" . PHP_EOL;

$processor = new AnimalProcessor();

$dog = ['type' => 'dog', 'name' => 'Rex'];
$cat = ['type' => 'cat', 'name' => 'Luna'];
$bird = ['type' => 'bird', 'name' => 'Piolín'];

$animals = [$dog, $cat, $bird];

// ❌ El procesador debe verificar el tipo constantemente
foreach ($animals as $animal) {
    $processor->makeSound($animal);
    $processor->feed($animal);
    $processor->move($animal);
}

// ❌ Problemas:
// - Muchos if/else y switch repetidos
// - Agregar nuevo animal requiere modificar MUCHOS métodos
// - Propenso a errores (olvidar un caso)
// - Viola Open/Closed Principle
// - Difícil de mantener y escalar
