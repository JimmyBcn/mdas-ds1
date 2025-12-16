package SOLID.lsp;

// Violación del LSP: Las clases derivadas rompen las expectativas de la clase padre
// ❌ Problema: Bird asume que TODOS los pájaros pueden volar

public class LspBad {
    public static void main(String[] args) {
        System.out.println("=== Demostración de Violación LSP ===");

        Eagle eagle = new Eagle();
        Penguin penguin = new Penguin();

        System.out.println("Águila: " + makeBirdFly(eagle)); // ✅ Funciona bien

        try {
            System.out.println("Pingüino: " + makeBirdFly(penguin)); // ❌ ¡SE ROMPE!
        } catch (Exception error) {
            System.out.println("ERROR: " + error.getMessage());
        }
    }

    // Esta función espera que TODOS los pájaros vuelen ❌
    public static String makeBirdFly(Bird bird) {
        return bird.fly(); // ¡Esto lanzará un error para Penguin!
    }
}

class Bird {
    public String fly() {
        return "¡Volando alto en el cielo!";
    }

    public String eat() {
        return "Comiendo deliciosa comida";
    }
}

// ❌ Problema: Penguin ES-UN Bird, ¡pero no puede volar!
class Penguin extends Bird {
    @Override
    public String fly() {
        // ❌ Esto viola LSP - rompe la expectativa del padre
        throw new UnsupportedOperationException("¡Los pingüinos no pueden volar!"); // ¡Comportamiento roto!
    }

    public String swim() {
        return "Nadando con gracia";
    }
}

class Eagle extends Bird {
    @Override
    public String fly() {
        return "¡Volando como un águila!";
    }
}
