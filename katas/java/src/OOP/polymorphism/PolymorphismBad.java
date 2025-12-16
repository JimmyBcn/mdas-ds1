package OOP.polymorphism;

// Violación de Polimorfismo: Lógica condicional para tipos
// ❌ Problema: Usar if/else para diferentes tipos

public class PolymorphismBad {
    public static void main(String[] args) {
        System.out.println("=== Violación de Polimorfismo ===");
        
        AnimalProcessor processor = new AnimalProcessor();
        
        AnimalData dog = new DogData("Rex");
        AnimalData cat = new CatData("Luna");
        AnimalData bird = new BirdData("Piolín");
        
        AnimalData[] animals = {dog, cat, bird};
        
        // ❌ El procesador debe verificar el tipo constantemente
        for (AnimalData animal : animals) {
            processor.makeSound(animal);
            processor.feed(animal);
            processor.move(animal);
        }
    }
}

// ❌ Sin herencia ni polimorfismo - necesita verificar tipos
interface AnimalData {
    String getType();
    String getName();
}

class DogData implements AnimalData {
    private String name;
    
    public DogData(String name) {
        this.name = name;
    }
    
    public String getType() { return "dog"; }
    public String getName() { return name; }
}

class CatData implements AnimalData {
    private String name;
    
    public CatData(String name) {
        this.name = name;
    }
    
    public String getType() { return "cat"; }
    public String getName() { return name; }
}

class BirdData implements AnimalData {
    private String name;
    
    public BirdData(String name) {
        this.name = name;
    }
    
    public String getType() { return "bird"; }
    public String getName() { return name; }
}

// ❌ Clase que necesita conocer todos los tipos específicos
class AnimalProcessor {
    // ❌ Método lleno de condicionales para cada tipo
    public void makeSound(AnimalData animal) {
        if ("dog".equals(animal.getType())) {
            System.out.println(animal.getName() + " dice: ¡Guau guau!");
        } else if ("cat".equals(animal.getType())) {
            System.out.println(animal.getName() + " dice: ¡Miau miau!");
        } else if ("bird".equals(animal.getType())) {
            System.out.println(animal.getName() + " dice: ¡Pío pío!");
        }
    }
    
    // ❌ Más condicionales para cada comportamiento
    public void feed(AnimalData animal) {
        if ("dog".equals(animal.getType())) {
            System.out.println(animal.getName() + " está comiendo croquetas");
        } else if ("cat".equals(animal.getType())) {
            System.out.println(animal.getName() + " está comiendo pescado");
        } else if ("bird".equals(animal.getType())) {
            System.out.println(animal.getName() + " está comiendo semillas");
        }
    }
    
    // ❌ Y más condicionales para movimiento
    public void move(AnimalData animal) {
        if ("dog".equals(animal.getType())) {
            System.out.println(animal.getName() + " está corriendo");
        } else if ("cat".equals(animal.getType())) {
            System.out.println(animal.getName() + " está saltando");
        } else if ("bird".equals(animal.getType())) {
            System.out.println(animal.getName() + " está volando");
        }
    }
}
