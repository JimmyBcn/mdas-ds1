<?php
// Cumplimiento de Polimorfismo: Comportamiento específico sin condicionales
// ✅ Solución: Cada clase implementa su propio comportamiento

// ✅ Clase base define la interfaz común
abstract class Animal {
    protected string $name;

    public function __construct(string $name) {
        $this->name = $name;
    }

    // ✅ Métodos abstractos - cada hijo DEBE implementarlos
    abstract public function makeSound(): void;
    abstract public function feed(): void;
    abstract public function move(): void;

    // ✅ Método común para todos
    public function introduce(): void {
        echo PHP_EOL . "Soy {$this->name}:" . PHP_EOL;
    }
}

// ✅ Cada clase implementa su comportamiento específico
class Dog extends Animal {
    public function makeSound(): void {
        echo "{$this->name} dice: ¡Guau guau!" . PHP_EOL;
    }

    public function feed(): void {
        echo "{$this->name} está comiendo croquetas" . PHP_EOL;
    }

    public function move(): void {
        echo "{$this->name} está corriendo" . PHP_EOL;
    }
}

class Cat extends Animal {
    public function makeSound(): void {
        echo "{$this->name} dice: ¡Miau miau!" . PHP_EOL;
    }

    public function feed(): void {
        echo "{$this->name} está comiendo pescado" . PHP_EOL;
    }

    public function move(): void {
        echo "{$this->name} está saltando" . PHP_EOL;
    }
}

class Bird extends Animal {
    public function makeSound(): void {
        echo "{$this->name} dice: ¡Pío pío!" . PHP_EOL;
    }

    public function feed(): void {
        echo "{$this->name} está comiendo semillas" . PHP_EOL;
    }

    public function move(): void {
        echo "{$this->name} está volando" . PHP_EOL;
    }
}

// ✅ Procesador sin condicionales - usa polimorfismo
class AnimalProcessor {
    // ✅ Método genérico - funciona con cualquier Animal
    public function processAnimals(array $animals): void {
        foreach ($animals as $animal) {
            $animal->introduce();
            $animal->makeSound(); // ✅ Llama al método correcto automáticamente
            $animal->feed(); // ✅ Sin if/else
            $animal->move(); // ✅ Sin switch
        }
    }
}

// ✅ Uso limpio sin condicionales
echo "=== Cumplimiento de Polimorfismo ===" . PHP_EOL;

$dog = new Dog("Rex");
$cat = new Cat("Luna");
$bird = new Bird("Piolín");

// ✅ Array de tipo Animal - polimorfismo en acción
$animals = [$dog, $cat, $bird];

$processor = new AnimalProcessor();

// ✅ Un solo método procesa todos los tipos sin verificar
$processor->processAnimals($animals);

// ✅ Agregar nuevo animal es fácil - solo crear la clase
class Fish extends Animal {
    public function makeSound(): void {
        echo "{$this->name} hace burbujas: glu glu" . PHP_EOL;
    }

    public function feed(): void {
        echo "{$this->name} está comiendo algas" . PHP_EOL;
    }

    public function move(): void {
        echo "{$this->name} está nadando" . PHP_EOL;
    }
}

$fish = new Fish("Nemo");
echo PHP_EOL . "=== Nuevo animal agregado sin modificar código existente ===" . PHP_EOL;

// ✅ Funciona inmediatamente sin cambiar AnimalProcessor
$processor->processAnimals([$fish]);

// ✅ Beneficios:
// - Sin if/else ni switch
// - Agregar nuevos animales no modifica código existente
// - Cada clase tiene su lógica encapsulada
// - Respeta Open/Closed Principle
// - Fácil de mantener y escalar
