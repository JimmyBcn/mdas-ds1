package Patterns.builder;

// Violación del Patrón Builder: Demasiados parámetros en el constructor
// ❌ Problema: Objetos complejos con muchos parámetros opcionales

public class BuilderBad {
    public static void main(String[] args) {
        System.out.println("=== Violación del Patrón Builder ===");

        // Difícil recordar el orden de los parámetros ❌
        Pizza margherita = new Pizza(
            "grande",
            "delgada",
            "tomate",
            "mozzarella",
            new String[]{"albahaca", "tomates"}, // ❌ Debe crear array manualmente
            false, // ❌ ¿Qué significa este booleano?
            0      // ❌ ¿Y este número?
        );

        // Orden de parámetros confuso ❌
        Pizza carnivora = new Pizza(
            "extra grande",
            "gruesa",
            "BBQ",
            "mozzarella",
            new String[]{"pepperoni", "salchicha", "tocino", "jamón"},
            true,
            3
        );

        System.out.println("Margherita: " + margherita.getDescription());
        System.out.println("Carnívora: " + carnivora.getDescription());
    }
}

class Pizza {
    public String size;
    public String crust;
    public String sauce;
    public String cheese;
    public String[] toppings;
    public boolean extraCheese;
    public int spicyLevel;

    // ❌ ¡Constructor telescópico - demasiados parámetros!
    public Pizza(String size, String crust, String sauce, String cheese, String[] toppings, boolean extraCheese, int spicyLevel) {
        this.size = size;
        this.crust = crust;
        this.sauce = sauce;
        this.cheese = cheese;
        this.toppings = toppings;
        this.extraCheese = extraCheese;
        this.spicyLevel = spicyLevel;
    }

    public String getDescription() {
        String toppingsStr = String.join(", ", toppings);
        return "Pizza " + size + " con masa " + crust + ", salsa " + sauce + ", queso " + cheese + 
               ", ingredientes: " + toppingsStr + (extraCheese ? ", queso extra" : "") + 
               ", nivel picante: " + spicyLevel + "/5";
    }
}
