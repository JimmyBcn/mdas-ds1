package OOP.inheritance;

// Violación de Herencia: Código duplicado sin reutilización
// ❌ Problema: Lógica repetida en cada clase

public class InheritanceBad {
    public static void main(String[] args) {
        System.out.println("=== Violación de Herencia ===");
        
        Dog dog = new Dog("Rex", 5, 25);
        Cat cat = new Cat("Luna", 3, 4);
        Bird bird = new Bird("Piolín", 1, 0.5);
        
        System.out.println(dog.getInfo());
        dog.eat();
        dog.bark();
        
        System.out.println(cat.getInfo());
        cat.eat();
        cat.meow();
        
        System.out.println(bird.getInfo());
        bird.eat();
        bird.chirp();
    }
}

// ❌ Código duplicado en todas las clases de animales
class Dog {
    private String name;
    private int age;
    private double weight;
    
    public Dog(String name, int age, double weight) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
    
    // ❌ Métodos comunes duplicados
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
    
    // Método específico
    public void bark() {
        System.out.println(name + " dice: ¡Guau guau!");
    }
}

class Cat {
    // ❌ Mismo código duplicado otra vez
    private String name;
    private int age;
    private double weight;
    
    public Cat(String name, int age, double weight) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
    
    // ❌ Métodos comunes duplicados exactamente igual
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
    
    // Método específico
    public void meow() {
        System.out.println(name + " dice: ¡Miau miau!");
    }
}

class Bird {
    // ❌ Y otra vez el mismo código duplicado
    private String name;
    private int age;
    private double weight;
    
    public Bird(String name, int age, double weight) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
    
    // ❌ Métodos comunes duplicados una tercera vez
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
    
    // Método específico
    public void chirp() {
        System.out.println(name + " dice: ¡Pío pío!");
    }
}
