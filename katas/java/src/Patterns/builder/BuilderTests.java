package Patterns.builder;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

/**
 * Tests para el patrón Builder
 * Valida que el patrón Builder permita construcción paso a paso de objetos complejos
 */
public class BuilderTests {
    
    @Test
    public void testPizzaBuilder_BuildsSimplePizza() {
        // Arrange & Act
        Pizza pizza = new PizzaBuilder()
            .setSize("mediana")
            .addTopping("champiñones")
            .build();
        
        // Assert
        assertNotNull(pizza, "La pizza debe ser construida");
        assertEquals("mediana", pizza.size, "El tamaño debe ser correcto");
        assertTrue(pizza.toppings.contains("champiñones"), "Debe contener el topping especificado");
    }
    
    @Test
    public void testPizzaBuilder_BuildsMargherita() {
        // Arrange & Act
        Pizza pizza = new PizzaBuilder()
            .setSize("grande")
            .setCrust("delgada")
            .setSauce("tomate")
            .setCheese("mozzarella")
            .addTopping("albahaca")
            .addTopping("tomates")
            .build();
        
        // Assert
        assertEquals("grande", pizza.size, "El tamaño debe ser grande");
        assertEquals("delgada", pizza.crust, "La masa debe ser delgada");
        assertEquals("tomate", pizza.sauce, "La salsa debe ser tomate");
        assertEquals("mozzarella", pizza.cheese, "El queso debe ser mozzarella");
        assertEquals(2, pizza.toppings.size(), "Debe tener 2 toppings");
    }
    
    @Test
    public void testPizzaBuilder_BuildsComplexPizza() {
        // Arrange & Act
        Pizza pizza = new PizzaBuilder()
            .setSize("extra grande")
            .setCrust("gruesa")
            .setSauce("BBQ")
            .addTopping("pepperoni")
            .addTopping("salchicha")
            .addTopping("tocino")
            .addTopping("jamón")
            .withExtraCheese()
            .setSpicyLevel(3)
            .build();
        
        // Assert
        assertEquals("extra grande", pizza.size, "El tamaño debe ser extra grande");
        assertEquals("BBQ", pizza.sauce, "La salsa debe ser BBQ");
        assertTrue(pizza.extraCheese, "Debe tener queso extra");
        assertEquals(3, pizza.spicyLevel, "El nivel picante debe ser 3");
        assertEquals(4, pizza.toppings.size(), "Debe tener 4 toppings");
    }
    
    @Test
    public void testPizzaBuilder_UsesDefaultValues() {
        // Arrange & Act
        Pizza pizza = new PizzaBuilder()
            .setSize("pequeña")
            .build();
        
        // Assert
        assertEquals("pequeña", pizza.size, "El tamaño debe ser el especificado");
        assertEquals("regular", pizza.crust, "Debe usar masa por defecto");
        assertEquals("tomate", pizza.sauce, "Debe usar salsa por defecto");
        assertEquals("mozzarella", pizza.cheese, "Debe usar queso por defecto");
        assertFalse(pizza.extraCheese, "No debe tener queso extra por defecto");
        assertEquals(0, pizza.spicyLevel, "El nivel picante por defecto debe ser 0");
    }
    
    @Test
    public void testPizzaBuilder_FluentInterface() {
        // Arrange & Act - El builder debe permitir encadenamiento de métodos
        Pizza pizza = new PizzaBuilder()
            .setSize("grande")
            .addTopping("pepperoni")
            .addTopping("champiñones")
            .withExtraCheese()
            .build();
        
        // Assert
        assertNotNull(pizza, "El builder con interfaz fluida debe crear la pizza correctamente");
        assertEquals(2, pizza.toppings.size(), "Debe poder encadenar múltiples addTopping");
        assertTrue(pizza.extraCheese, "Debe poder encadenar withExtraCheese");
    }
    
    @Test
    public void testPizza_GetDescription_ReturnsCompleteInfo() {
        // Arrange
        Pizza pizza = new PizzaBuilder()
            .setSize("grande")
            .setCrust("delgada")
            .addTopping("pepperoni")
            .build();
        
        // Act
        String description = pizza.getDescription();
        
        // Assert
        assertNotNull(description, "La descripción no debe ser nula");
        assertTrue(description.contains("grande"), "Debe incluir el tamaño");
        assertTrue(description.contains("delgada"), "Debe incluir el tipo de masa");
        assertTrue(description.contains("pepperoni"), "Debe incluir los toppings");
    }
}
