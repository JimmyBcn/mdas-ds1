<?php
// Cumplimiento de Herencia: Reutilización mediante clase base
// ✅ Solución: Código común en clase padre, específico en hijos

// ✅ Clase base con comportamiento común
class Animal {
    // ✅ Propiedades comunes protegidas (accesibles en hijos)
    protected string $name;
    protected int $age;
    protected float $weight;

    public function __construct(string $name, int $age, float $weight) {
        $this->name = $name;
        $this->age = $age;
        $this->weight = $weight;
    }

    // ✅ Métodos comunes definidos una sola vez
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

    // ✅ Método para que cada hijo implemente su sonido
    public function makeSound(): void {
        echo "{$this->name} hace un sonido" . PHP_EOL;
    }
}

// ✅ Dog hereda de Animal - sin duplicación
class Dog extends Animal {
    // ✅ Solo comportamiento específico de perros
    public function makeSound(): void {
        echo "{$this->name} dice: ¡Guau guau!" . PHP_EOL;
    }

    public function fetch(): void {
        echo "{$this->name} está trayendo la pelota" . PHP_EOL;
    }
}

// ✅ Cat hereda de Animal - sin duplicación
class Cat extends Animal {
    // ✅ Solo comportamiento específico de gatos
    public function makeSound(): void {
        echo "{$this->name} dice: ¡Miau miau!" . PHP_EOL;
    }

    public function purr(): void {
        echo "{$this->name} está ronroneando" . PHP_EOL;
    }
}

// ✅ Bird hereda de Animal - sin duplicación
class Bird extends Animal {
    // ✅ Solo comportamiento específico de pájaros
    public function makeSound(): void {
        echo "{$this->name} dice: ¡Pío pío!" . PHP_EOL;
    }

    public function fly(): void {
        echo "{$this->name} está volando" . PHP_EOL;
    }
}

// ✅ Código reutilizado y fácil de mantener
echo "=== Cumplimiento de Herencia ===" . PHP_EOL;

$dog = new Dog("Rex", 5, 25);
$cat = new Cat("Luna", 3, 4);
$bird = new Bird("Piolín", 1, 0.5);

// ✅ Métodos heredados funcionan igual
echo $dog->getInfo() . PHP_EOL;
$dog->eat();
$dog->makeSound();
$dog->fetch();

echo $cat->getInfo() . PHP_EOL;
$cat->eat();
$cat->makeSound();
$cat->purr();

echo $bird->getInfo() . PHP_EOL;
$bird->eat();
$bird->makeSound();
$bird->fly();

// ✅ Si necesito cambiar eat() o sleep(), cambio una sola vez en Animal
// ✅ Nuevos animales heredan automáticamente el comportamiento común
// ✅ Consistencia garantizada

// ✅ Bonus: Puedo trabajar con tipo Animal
$animals = [$dog, $cat, $bird];
echo PHP_EOL . "=== Todos los animales ===" . PHP_EOL;
foreach ($animals as $animal) {
    $animal->eat(); // ✅ Funciona para todos
    $animal->makeSound(); // ✅ Cada uno con su sonido específico
}
