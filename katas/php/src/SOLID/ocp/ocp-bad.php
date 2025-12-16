<?php
// Violación del OCP: Debemos modificar el código existente para agregar nuevos animales
// ❌ Problema: Para agregar un nuevo animal, debemos modificar la clase Communication

class Dog {
    public function makeSound(): string {
        return "woof woof";
    }
}

class Cat {
    public function makeSound(): string {
        return "meow meow";
    }
}

class Fox {
    public function makeSound(): string {
        return "ring-ding-ding-ding-dingeringeding";
    }
}

// ❌ Esta clase debe modificarse cada vez que agregamos un nuevo animal
class Communication {
    public function communicate(Dog|Cat|Fox $animal): string {
        // ❌ Cadena de if/else que debe modificarse para cada nuevo animal
        if ($animal instanceof Dog) {
            return $animal->makeSound();
        } elseif ($animal instanceof Cat) {
            return $animal->makeSound();
        } elseif ($animal instanceof Fox) {
            return $animal->makeSound();
        } else {
            throw new Exception("Animal desconocido");
        }
    }
}

// Uso
$communication = new Communication();
$dog = new Dog();
$cat = new Cat();
$fox = new Fox();

echo $communication->communicate($dog) . PHP_EOL; // "woof woof"
echo $communication->communicate($cat) . PHP_EOL; // "meow meow"
echo $communication->communicate($fox) . PHP_EOL; // "ring-ding-ding-ding-dingeringeding"

// ❌ Problema: Para agregar Cow, debemos:
// 1. Crear la clase Cow
// 2. Modificar el tipo de parámetro en communicate() ❌
// 3. Agregar una nueva rama if/else ❌
