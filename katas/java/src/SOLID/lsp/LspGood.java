package SOLID.lsp;

// Cumplimiento del LSP: Jerarquía de herencia apropiada que no rompe expectativas
// ✅ Solución: Usar abstracciones apropiadas que coincidan con el comportamiento del mundo real

public class LspGood {
    public static void main(String[] args) {
        System.out.println("=== Pruebas de Animales con LSP ===");

        Eagle eagle = new Eagle();
        Penguin penguin = new Penguin();
        Duck duck = new Duck();

        // Todos los animales pueden ser tratados de la misma manera ✅
        System.out.println("Alimentando: " + feedAnimal(eagle));
        System.out.println("Alimentando: " + feedAnimal(penguin));
        System.out.println("Alimentando: " + feedAnimal(duck));

        // Solo a las criaturas voladoras se les pide volar ✅
        System.out.println("Volando: " + makeFlyableCreatureFly(eagle));
        System.out.println("Volando: " + makeFlyableCreatureFly(duck));
        // ¡penguin no se le pide volar - seguro en tiempo de compilación!

        // Solo a las criaturas nadadoras se les pide nadar ✅
        System.out.println("Nadando: " + makeSwimmableCreatureSwim(penguin));
        System.out.println("Nadando: " + makeSwimmableCreatureSwim(duck));
        // ¡eagle no se le pide nadar - seguro en tiempo de compilación!
    }

    // Funciones que funcionan con contratos apropiados ✅
    public static String feedAnimal(Animal animal) {
        return animal.eat(); // ✅ TODOS los animales pueden comer
    }

    public static String makeFlyableCreatureFly(Flyable creature) {
        return creature.fly(); // ✅ Solo cosas que SÍ pueden volar
    }

    public static String makeSwimmableCreatureSwim(Swimmable creature) {
        return creature.swim(); // ✅ Solo cosas que SÍ pueden nadar
    }
}

// Clase base para comportamiento común ✅
abstract class Animal {
    public abstract String eat();
    public abstract String makeSound();
}

// Interfaces separadas para diferentes capacidades ✅
interface Flyable {
    String fly();
}

interface Swimmable {
    String swim();
}

// Aves que SÍ pueden volar ✅
class Eagle extends Animal implements Flyable {
    public String eat() {
        return "Águila comiendo pescado";
    }

    public String makeSound() {
        return "Águila: ¡Graznido!";
    }

    public String fly() {
        return "¡Águila volando alto!";
    }
}

// Aves que NO pueden volar pero pueden nadar ✅
class Penguin extends Animal implements Swimmable {
    public String eat() {
        return "Pingüino comiendo pescado";
    }

    public String makeSound() {
        return "Pingüino: ¡Graznido!";
    }

    public String swim() {
        return "Pingüino nadando con gracia";
    }
}

// Aves que pueden hacer ambas cosas ✅
class Duck extends Animal implements Flyable, Swimmable {
    public String eat() {
        return "Pato comiendo semillas";
    }

    public String makeSound() {
        return "Pato: ¡Cuac!";
    }

    public String fly() {
        return "Pato volando al estanque";
    }

    public String swim() {
        return "Pato chapoteando en el agua";
    }
}
