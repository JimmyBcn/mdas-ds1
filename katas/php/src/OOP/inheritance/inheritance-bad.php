<?php
// Violación de Herencia: Código duplicado sin reutilización
// ❌ Problema: Lógica repetida en cada clase

class Dog {
    // ❌ Código duplicado en todas las clases de animales
    private string $name;
    private int $age;
    private float $weight;

    public function __construct(string $name, int $age, float $weight) {
        $this->name = $name;
        $this->age = $age;
        $this->weight = $weight;
    }

    // ❌ Métodos comunes duplicados
    public function eat(): void {
        echo "{$this->name} está comiendo" . PHP_EOL;
        $this->weight += 0.5;
    }

    public function sleep(): void {
        echo "{$this->name} está durmiendo" . PHP_EOL;
    }

    public function getInfo(): string {
        return "Nombre: {$this->name}, Edad: {$this->age} años, Peso: {$this->weight}kg";
    }

    // Método específico
    public function bark(): void {
        echo "{$this->name} dice: ¡Guau guau!" . PHP_EOL;
    }
}

class Cat {
    // ❌ Mismo código duplicado otra vez
    private string $name;
    private int $age;
    private float $weight;

    public function __construct(string $name, int $age, float $weight) {
        $this->name = $name;
        $this->age = $age;
        $this->weight = $weight;
    }

    // ❌ Métodos comunes duplicados exactamente igual
    public function eat(): void {
        echo "{$this->name} está comiendo" . PHP_EOL;
        $this->weight += 0.5;
    }

    public function sleep(): void {
        echo "{$this->name} está durmiendo" . PHP_EOL;
    }

    public function getInfo(): string {
        return "Nombre: {$this->name}, Edad: {$this->age} años, Peso: {$this->weight}kg";
    }

    // Método específico
    public function meow(): void {
        echo "{$this->name} dice: ¡Miau miau!" . PHP_EOL;
    }
}

class Bird {
    // ❌ Y otra vez el mismo código duplicado
    private string $name;
    private int $age;
    private float $weight;

    public function __construct(string $name, int $age, float $weight) {
        $this->name = $name;
        $this->age = $age;
        $this->weight = $weight;
    }

    // ❌ Métodos comunes duplicados una tercera vez
    public function eat(): void {
        echo "{$this->name} está comiendo" . PHP_EOL;
        $this->weight += 0.5;
    }

    public function sleep(): void {
        echo "{$this->name} está durmiendo" . PHP_EOL;
    }

    public function getInfo(): string {
        return "Nombre: {$this->name}, Edad: {$this->age} años, Peso: {$this->weight}kg";
    }

    // Método específico
    public function chirp(): void {
        echo "{$this->name} dice: ¡Pío pío!" . PHP_EOL;
    }
}

// ❌ Mucho código duplicado y difícil de mantener
echo "=== Violación de Herencia ===" . PHP_EOL;

$dog = new Dog("Rex", 5, 25);
$cat = new Cat("Luna", 3, 4);
$bird = new Bird("Piolín", 1, 0.5);

echo $dog->getInfo() . PHP_EOL;
$dog->eat();
$dog->bark();

echo $cat->getInfo() . PHP_EOL;
$cat->eat();
$cat->meow();

echo $bird->getInfo() . PHP_EOL;
$bird->eat();
$bird->chirp();

// ❌ Si necesito cambiar eat() o sleep(), debo modificar 3 clases
// ❌ Si agrego más animales, más duplicación
// ❌ Propenso a inconsistencias
