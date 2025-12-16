<?php

use PHPUnit\Framework\TestCase;

require_once 'builder-good.php';

/**
 * Tests para el patrón Builder
 * Valida que el patrón Builder permita construcción paso a paso de objetos complejos
 */
class BuilderTests extends TestCase
{
    public function testPizzaBuilder_BuildsSimplePizza()
    {
        // Arrange & Act
        $pizza = (new PizzaBuilder())
            ->setSize("mediana")
            ->addTopping("champiñones")
            ->build();
        
        // Assert
        $this->assertNotNull($pizza, 'La pizza debe ser construida');
        $this->assertEquals("mediana", $pizza->size, 'El tamaño debe ser correcto');
        $this->assertContains("champiñones", $pizza->toppings, 'Debe contener el topping especificado');
    }
    
    public function testPizzaBuilder_BuildsMargherita()
    {
        // Arrange & Act
        $pizza = (new PizzaBuilder())
            ->setSize("grande")
            ->setCrust("delgada")
            ->setSauce("tomate")
            ->setCheese("mozzarella")
            ->addTopping("albahaca")
            ->addTopping("tomates")
            ->build();
        
        // Assert
        $this->assertEquals("grande", $pizza->size, 'El tamaño debe ser grande');
        $this->assertEquals("delgada", $pizza->crust, 'La masa debe ser delgada');
        $this->assertEquals("tomate", $pizza->sauce, 'La salsa debe ser tomate');
        $this->assertEquals("mozzarella", $pizza->cheese, 'El queso debe ser mozzarella');
        $this->assertCount(2, $pizza->toppings, 'Debe tener 2 toppings');
    }
    
    public function testPizzaBuilder_BuildsComplexPizza()
    {
        // Arrange & Act
        $pizza = (new PizzaBuilder())
            ->setSize("extra grande")
            ->setCrust("gruesa")
            ->setSauce("BBQ")
            ->addTopping("pepperoni")
            ->addTopping("salchicha")
            ->addTopping("tocino")
            ->addTopping("jamón")
            ->withExtraCheese()
            ->setSpicyLevel(3)
            ->build();
        
        // Assert
        $this->assertEquals("extra grande", $pizza->size, 'El tamaño debe ser extra grande');
        $this->assertEquals("BBQ", $pizza->sauce, 'La salsa debe ser BBQ');
        $this->assertTrue($pizza->extraCheese, 'Debe tener queso extra');
        $this->assertEquals(3, $pizza->spicyLevel, 'El nivel picante debe ser 3');
        $this->assertCount(4, $pizza->toppings, 'Debe tener 4 toppings');
    }
    
    public function testPizzaBuilder_UsesDefaultValues()
    {
        // Arrange & Act
        $pizza = (new PizzaBuilder())
            ->setSize("pequeña")
            ->build();
        
        // Assert
        $this->assertEquals("pequeña", $pizza->size, 'El tamaño debe ser el especificado');
        $this->assertEquals("regular", $pizza->crust, 'Debe usar masa por defecto');
        $this->assertEquals("tomate", $pizza->sauce, 'Debe usar salsa por defecto');
        $this->assertEquals("mozzarella", $pizza->cheese, 'Debe usar queso por defecto');
        $this->assertFalse($pizza->extraCheese, 'No debe tener queso extra por defecto');
        $this->assertEquals(0, $pizza->spicyLevel, 'El nivel picante por defecto debe ser 0');
    }
    
    public function testPizzaBuilder_FluentInterface()
    {
        // Arrange & Act - El builder debe permitir encadenamiento de métodos
        $pizza = (new PizzaBuilder())
            ->setSize("grande")
            ->addTopping("pepperoni")
            ->addTopping("champiñones")
            ->withExtraCheese()
            ->build();
        
        // Assert
        $this->assertNotNull($pizza, 'El builder con interfaz fluida debe crear la pizza correctamente');
        $this->assertCount(2, $pizza->toppings, 'Debe poder encadenar múltiples addTopping');
        $this->assertTrue($pizza->extraCheese, 'Debe poder encadenar withExtraCheese');
    }
    
    public function testPizza_GetDescription_ReturnsCompleteInfo()
    {
        // Arrange
        $pizza = (new PizzaBuilder())
            ->setSize("grande")
            ->setCrust("delgada")
            ->addTopping("pepperoni")
            ->build();
        
        // Act
        $description = $pizza->getDescription();
        
        // Assert
        $this->assertNotNull($description, 'La descripción no debe ser nula');
        $this->assertStringContainsString("grande", $description, 'Debe incluir el tamaño');
        $this->assertStringContainsString("delgada", $description, 'Debe incluir el tipo de masa');
        $this->assertStringContainsString("pepperoni", $description, 'Debe incluir los toppings');
    }
}
