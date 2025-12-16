package OOP.polymorphism;

import java.util.*;

// Cumplimiento de Polimorfismo: Comportamiento específico sin condicionales
// ✅ Solución: Cada clase implementa su propio comportamiento

public class PolymorphismGood {
    public static void main(String[] args) {
        System.out.println("=== Cumplimiento de Polimorfismo ===");
        
        Animal dog = new Dog("Rex");
        Animal cat = new Cat("Luna");
        Animal bird = new Bird("Piolín");
        
        // ✅ Array de tipo Animal - polimorfismo en acción
        List<Animal> animals = new ArrayList<>();
        animals.add(dog);
        animals.add(cat);
        animals.add(bird);
        
        AnimalProcessor processor = new AnimalProcessor();
        
        // ✅ Un solo método procesa todos los tipos sin verificar
        processor.processAnimals(animals);
        
        // ✅ Agregar nuevo animal es fácil - solo crear la clase
        Animal fish = new Fish("Nemo");
        System.out.println("\n=== Nuevo animal agregado sin modificar código existente ===");
        
        // ✅ Funciona inmediatamente sin cambiar AnimalProcessor
        processor.processAnimals(Arrays.asList(fish));
    }
}

// ✅ Clase base define la interfaz común
abstract class Animal {
    protected String name;
    
    public Animal(String name) {
        this.name = name;
    }
    
    // ✅ Métodos abstractos - cada hijo DEBE implementarlos
    public abstract void makeSound();
    public abstract void feed();
    public abstract void move();
    
    // ✅ Método común para todos
    public void introduce() {
        System.out.println("\nSoy " + name + ":");
    }
}

// ✅ Cada clase implementa su comportamiento específico
class Dog extends Animal {
    public Dog(String name) {
        super(name);
    }
    
    public void makeSound() {
        System.out.println(name + " dice: ¡Guau guau!");
    }
    
    public void feed() {
        System.out.println(name + " está comiendo croquetas");
    }
    
    public void move() {
        System.out.println(name + " está corriendo");
    }
}

class Cat extends Animal {
    public Cat(String name) {
        super(name);
    }
    
    public void makeSound() {
        System.out.println(name + " dice: ¡Miau miau!");
    }
    
    public void feed() {
        System.out.println(name + " está comiendo pescado");
    }
    
    public void move() {
        System.out.println(name + " está saltando");
    }
}

class Bird extends Animal {
    public Bird(String name) {
        super(name);
    }
    
    public void makeSound() {
        System.out.println(name + " dice: ¡Pío pío!");
    }
    
    public void feed() {
        System.out.println(name + " está comiendo semillas");
    }
    
    public void move() {
        System.out.println(name + " está volando");
    }
}

class Fish extends Animal {
    public Fish(String name) {
        super(name);
    }
    
    public void makeSound() {
        System.out.println(name + " hace burbujas: glu glu");
    }
    
    public void feed() {
        System.out.println(name + " está comiendo algas");
    }
    
    public void move() {
        System.out.println(name + " está nadando");
    }
}

// ✅ Procesador sin condicionales - usa polimorfismo
class AnimalProcessor {
    // ✅ Método genérico - funciona con cualquier Animal
    public void processAnimals(List<Animal> animals) {
        for (Animal animal : animals) {
            animal.introduce();
            animal.makeSound(); // ✅ Llama al método correcto automáticamente
            animal.feed(); // ✅ Sin if/else
            animal.move(); // ✅ Sin switch
        }
    }
}
