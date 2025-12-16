<?php
// Cumplimiento del LSP: Jerarquía de herencia apropiada que no rompe expectativas
// ✅ Solución: Usar abstracciones apropiadas que coincidan con el comportamiento del mundo real

// Clase base para comportamiento común ✅
abstract class Animal {
    abstract public function eat(): string;
    abstract public function makeSound(): string;
}

// Interfaces separadas para diferentes capacidades ✅
interface Flyable {
    public function fly(): string;
}

interface Swimmable {
    public function swim(): string;
}

// Aves que SÍ pueden volar ✅
class Eagle extends Animal implements Flyable {
    public function eat(): string {
        return "Águila comiendo pescado";
    }

    public function makeSound(): string {
        return "Águila: ¡Graznido!";
    }

    public function fly(): string {
        return "¡Águila volando alto!";
    }
}

// Aves que NO pueden volar pero pueden nadar ✅
class Penguin extends Animal implements Swimmable {
    public function eat(): string {
        return "Pingüino comiendo pescado";
    }

    public function makeSound(): string {
        return "Pingüino: ¡Graznido!";
    }

    public function swim(): string {
        return "Pingüino nadando con gracia";
    }
}

// Aves que pueden hacer ambas cosas ✅
class Duck extends Animal implements Flyable, Swimmable {
    public function eat(): string {
        return "Pato comiendo semillas";
    }

    public function makeSound(): string {
        return "Pato: ¡Cuac!";
    }

    public function fly(): string {
        return "Pato volando al estanque";
    }

    public function swim(): string {
        return "Pato chapoteando en el agua";
    }
}

// Funciones que funcionan con contratos apropiados ✅
function feedAnimal(Animal $animal): string {
    return $animal->eat(); // ✅ TODOS los animales pueden comer
}

function makeFlyableCreatureFly(Flyable $creature): string {
    return $creature->fly(); // ✅ Solo cosas que SÍ pueden volar
}

function makeSwimmableCreatureSwim(Swimmable $creature): string {
    return $creature->swim(); // ✅ Solo cosas que SÍ pueden nadar
}

// Probando - ¡sin fallos! ✅
echo "=== Pruebas de Animales con LSP ===" . PHP_EOL;

$eagle = new Eagle();
$penguin = new Penguin();
$duck = new Duck();

// Todos los animales pueden ser tratados de la misma manera ✅
echo "Alimentando: " . feedAnimal($eagle) . PHP_EOL;
echo "Alimentando: " . feedAnimal($penguin) . PHP_EOL;
echo "Alimentando: " . feedAnimal($duck) . PHP_EOL;

// Solo a las criaturas voladoras se les pide volar ✅
echo "Volando: " . makeFlyableCreatureFly($eagle) . PHP_EOL;
echo "Volando: " . makeFlyableCreatureFly($duck) . PHP_EOL;
// ¡penguin no se le pide volar - seguro en tiempo de compilación!

// Solo a las criaturas nadadoras se les pide nadar ✅
echo "Nadando: " . makeSwimmableCreatureSwim($penguin) . PHP_EOL;
echo "Nadando: " . makeSwimmableCreatureSwim($duck) . PHP_EOL;
// ¡eagle no se le pide nadar - seguro en tiempo de compilación!
