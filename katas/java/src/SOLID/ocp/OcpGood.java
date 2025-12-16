package SOLID.ocp;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

// Cumplimiento del OCP: Abierto para extensión, cerrado para modificación
// ✅ Solución: Usar interfaces para que se puedan agregar nuevos animales sin cambiar el código existente

public class OcpGood {
    public static void main(String[] args) {
        // ✅ Agregar nuevos animales sin modificar el código existente
        Communication communication = new Communication();
        Dog dog = new Dog();
        Cat cat = new Cat();
        Fox fox = new Fox();
        Cow cow = new Cow();
        Duck duck = new Duck();

        System.out.println(communication.communicate(dog)); // "woof woof"
        System.out.println(communication.communicate(cat)); // "meow meow"
        System.out.println(communication.communicate(fox)); // "ring-ding-ding-ding-dingeringeding"
        System.out.println(communication.communicate(cow)); // "moo moo"
        System.out.println(communication.communicate(duck)); // "quack quack"

        List<Communicable> allAnimals = Arrays.asList(dog, cat, fox, cow, duck);
        System.out.println(communication.communicateMultiple(allAnimals));
    }
}

interface Communicable {
    String communicate();
}

class Dog implements Communicable {
    public String communicate() {
        return "woof woof";
    }
}

class Cat implements Communicable {
    public String communicate() {
        return "meow meow";
    }
}

// ✅ Esta clase nunca necesita ser modificada al agregar nuevos animales
class Communication {
    public String communicate(Communicable animal) {
        return animal.communicate();
    }

    public List<String> communicateMultiple(List<Communicable> animals) {
        return animals.stream()
                .map(animal -> animal.communicate())
                .collect(Collectors.toList());
    }
}

// ✅ Agregar nuevos animales sin modificar el código existente
class Fox implements Communicable {
    public String communicate() {
        return "ring-ding-ding-ding-dingeringeding";
    }
}

class Cow implements Communicable {
    public String communicate() {
        return "moo moo";
    }
}

class Duck implements Communicable {
    public String communicate() {
        return "quack quack";
    }
}
