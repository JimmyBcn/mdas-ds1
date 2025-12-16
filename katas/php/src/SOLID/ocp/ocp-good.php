<?php
// Cumplimiento del OCP: Abierto para extensión, cerrado para modificación
// ✅ Solución: Usar interfaces para que se puedan agregar nuevos animales sin cambiar el código existente

interface Communicable {
    public function communicate(): string;
}

class Dog implements Communicable {
    public function communicate(): string {
        return "woof woof";
    }
}

class Cat implements Communicable {
    public function communicate(): string {
        return "meow meow";
    }
}

// ✅ Esta clase nunca necesita ser modificada al agregar nuevos animales
class Communication {
    public function communicate(Communicable $animal): string {
        return $animal->communicate();
    }

    public function communicateMultiple(array $animals): array {
        return array_map(fn($animal) => $animal->communicate(), $animals);
    }
}

// ✅ Agregar nuevos animales sin modificar el código existente
class Fox implements Communicable {
    public function communicate(): string {
        return "ring-ding-ding-ding-dingeringeding";
    }
}

class Cow implements Communicable {
    public function communicate(): string {
        return "moo moo";
    }
}

class Duck implements Communicable {
    public function communicate(): string {
        return "quack quack";
    }
}

// Uso - ¡agregar Fox, Cow, Duck NO requirió cambios en las clases existentes!
$communication = new Communication();
$dog = new Dog();
$cat = new Cat();
$fox = new Fox();
$cow = new Cow();
$duck = new Duck();

echo $communication->communicate($dog) . PHP_EOL; // "woof woof"
echo $communication->communicate($cat) . PHP_EOL; // "meow meow"
echo $communication->communicate($fox) . PHP_EOL; // "ring-ding-ding-ding-dingeringeding"
echo $communication->communicate($cow) . PHP_EOL; // "moo moo"
echo $communication->communicate($duck) . PHP_EOL; // "quack quack"

$allAnimals = [$dog, $cat, $fox, $cow, $duck];
print_r($communication->communicateMultiple($allAnimals));
