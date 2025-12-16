package Patterns.builder;

import java.util.ArrayList;
import java.util.List;

// Implementación del Patrón Builder: Construcción paso a paso con interfaz fluida
// ✅ Solución: Builder permite creación de objetos legible y flexible

public class BuilderGood {
    public static void main(String[] args) {
        System.out.println("=== Solución con Patrón Builder ===");

        // Código legible y auto-documentado ✅
        Pizza margherita = new PizzaBuilder()
            .setSize("grande") // ✅ Claro qué es cada parámetro
            .setCrust("delgada")
            .setSauce("tomate")
            .setCheese("mozzarella")
            .addTopping("albahaca") // ✅ Fácil agregar ingredientes uno por uno
            .addTopping("tomates")
            .build();

        // Fácil crear variaciones complejas ✅
        Pizza carnivora = new PizzaBuilder()
            .setSize("extra grande")
            .setCrust("gruesa")
            .setSauce("BBQ")
            .addTopping("pepperoni")
            .addTopping("salchicha")
            .addTopping("tocino")
            .addTopping("jamón")
            .withExtraCheese() // ✅ Características opcionales cuando se necesitan
            .setSpicyLevel(3)
            .build();

        // Configuración mínima con valores por defecto ✅
        Pizza pizzaSimple = new PizzaBuilder()
            .setSize("pequeña")
            .addTopping("champiñones")
            .build(); // ✅ Usa masa, salsa y queso por defecto

        System.out.println("Margherita: " + margherita.getDescription());
        System.out.println("Carnívora: " + carnivora.getDescription());
        System.out.println("Pizza Simple: " + pizzaSimple.getDescription());
    }
}

// Clase Pizza con muchas propiedades opcionales
class Pizza {
    public String size;
    public String crust;
    public String sauce;
    public String cheese;
    public List<String> toppings;
    public boolean extraCheese;
    public int spicyLevel;

    public Pizza(String size, String crust, String sauce, String cheese, List<String> toppings, boolean extraCheese, int spicyLevel) {
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

// ✅ Builder con interfaz fluida
class PizzaBuilder {
    private String size = "mediana";
    private String crust = "regular";
    private String sauce = "tomate";
    private String cheese = "mozzarella";
    private List<String> toppings = new ArrayList<>();
    private boolean extraCheese = false;
    private int spicyLevel = 0;

    public PizzaBuilder setSize(String size) {
        this.size = size;
        return this; // ✅ Retorna 'this' para encadenamiento de métodos
    }

    public PizzaBuilder setCrust(String crust) {
        this.crust = crust;
        return this;
    }

    public PizzaBuilder setSauce(String sauce) {
        this.sauce = sauce;
        return this;
    }

    public PizzaBuilder setCheese(String cheese) {
        this.cheese = cheese;
        return this;
    }

    public PizzaBuilder addTopping(String topping) {
        this.toppings.add(topping);
        return this;
    }

    public PizzaBuilder withExtraCheese() {
        this.extraCheese = true;
        return this;
    }

    public PizzaBuilder setSpicyLevel(int level) {
        this.spicyLevel = level;
        return this;
    }

    public Pizza build() {
        return new Pizza(
            this.size,
            this.crust,
            this.sauce,
            this.cheese,
            new ArrayList<>(this.toppings), // Copia la lista
            this.extraCheese,
            this.spicyLevel
        );
    }

    public PizzaBuilder reset() {
        this.size = "mediana";
        this.crust = "regular";
        this.sauce = "tomate";
        this.cheese = "mozzarella";
        this.toppings = new ArrayList<>();
        this.extraCheese = false;
        this.spicyLevel = 0;
        return this;
    }
}
