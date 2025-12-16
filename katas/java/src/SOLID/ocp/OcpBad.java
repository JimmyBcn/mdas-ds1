package SOLID.ocp;

// Violación del OCP: Debemos modificar el código existente para agregar nuevos animales
// ❌ Problema: Para agregar un nuevo animal, debemos modificar la clase Communication

public class OcpBad {
    public static void main(String[] args) {
        Communication communication = new Communication();
        Dog dog = new Dog();
        Cat cat = new Cat();
        Fox fox = new Fox();

        System.out.println(communication.communicate(dog)); // "woof woof"
        System.out.println(communication.communicate(cat)); // "meow meow"
        System.out.println(communication.communicate(fox)); // "ring-ding-ding-ding-dingeringeding"

        // ❌ Problema: Para agregar Cow, debemos:
        // 1. Crear la clase Cow
        // 2. Modificar el método communicate() ❌
        // 3. Agregar una nueva rama if/else ❌
    }
}

class Dog {
    public String makeSound() {
        return "woof woof";
    }
}

class Cat {
    public String makeSound() {
        return "meow meow";
    }
}

class Fox {
    public String makeSound() {
        return "ring-ding-ding-ding-dingeringeding";
    }
}

// ❌ Esta clase debe modificarse cada vez que agregamos un nuevo animal
class Communication {
    public String communicate(Object animal) {
        // ❌ Cadena de if/else que debe modificarse para cada nuevo animal
        if (animal instanceof Dog) {
            return ((Dog) animal).makeSound();
        } else if (animal instanceof Cat) {
            return ((Cat) animal).makeSound();
        } else if (animal instanceof Fox) {
            return ((Fox) animal).makeSound();
        } else {
            throw new IllegalArgumentException("Animal desconocido");
        }
    }
}
