package OOP.inheritance;

import java.util.*;

// Cumplimiento de Herencia: Reutilización mediante clase base
// ✅ Solución: Código común en clase padre, específico en hijos

public class InheritanceGood {
    public static void main(String[] args) {
        System.out.println("=== Cumplimiento de Herencia ===");
        
        Dog dog = new Dog("Rex", 5, 25);
        Cat cat = new Cat("Luna", 3, 4);
        Bird bird = new Bird("Piolín", 1, 0.5);
        
        // ✅ Métodos heredados funcionan igual
        System.out.println(dog.getInfo());
        dog.eat();
        dog.makeSound();
        dog.fetch();
        
        System.out.println(cat.getInfo());
        cat.eat();
        cat.makeSound();
        cat.purr();
        
        System.out.println(bird.getInfo());
        bird.eat();
        bird.makeSound();
        bird.fly();
        
        // ✅ Bonus: Puedo trabajar con tipo Animal
        List<Animal> animals = new ArrayList<>();
        animals.add(dog);
        animals.add(cat);
        animals.add(bird);
        
        System.out.println("\n=== Todos los animales ===");
        for (Animal animal : animals) {
            animal.eat(); // ✅ Funciona para todos
            animal.makeSound(); // ✅ Cada uno con su sonido específico
        }
    }
}

// ✅ Clase base con comportamiento común
class Animal {
    // ✅ Propiedades comunes protegidas (accesibles en hijos)
    protected String name;
    protected int age;
    protected double weight;
    
    public Animal(String name, int age, double weight) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
    
    // ✅ Métodos comunes definidos una sola vez
    public void eat() {
        System.out.println(name + " está comiendo");
        weight += 0.5;
    }
    
    public void sleep() {
        System.out.println(name + " está durmiendo");
    }
    
    public String getInfo() {
        return "Nombre: " + name + ", Edad: " + age + " años, Peso: " + weight + "kg";
    }
    
    // ✅ Método para que cada hijo implemente su sonido
    public void makeSound() {
        System.out.println(name + " hace un sonido");
    }
}

// ✅ Dog hereda de Animal - sin duplicación
class Dog extends Animal {
    public Dog(String name, int age, double weight) {
        super(name, age, weight);
    }
    
    // ✅ Solo comportamiento específico de perros
    @Override
    public void makeSound() {
        System.out.println(name + " dice: ¡Guau guau!");
    }
    
    public void fetch() {
        System.out.println(name + " está trayendo la pelota");
    }
}

// ✅ Cat hereda de Animal - sin duplicación
class Cat extends Animal {
    public Cat(String name, int age, double weight) {
        super(name, age, weight);
    }
    
    // ✅ Solo comportamiento específico de gatos
    @Override
    public void makeSound() {
        System.out.println(name + " dice: ¡Miau miau!");
    }
    
    public void purr() {
        System.out.println(name + " está ronroneando");
    }
}

// ✅ Bird hereda de Animal - sin duplicación
class Bird extends Animal {
    public Bird(String name, int age, double weight) {
        super(name, age, weight);
    }
    
    // ✅ Solo comportamiento específico de pájaros
    @Override
    public void makeSound() {
        System.out.println(name + " dice: ¡Pío pío!");
    }
    
    public void fly() {
        System.out.println(name + " está volando");
    }
}
