<?php

use PHPUnit\Framework\TestCase;

require_once 'inheritance-good.php';

/**
 * Tests para el concepto de Herencia en OOP
 * Valida que las clases hijas hereden comportamiento de las clases padre
 */
class InheritanceTests extends TestCase
{
    public function testDog_InheritsFromAnimal()
    {
        // Arrange & Act
        $dog = new Dog("Buddy", 3);
        
        // Assert
        $this->assertNotNull($dog, 'El perro debe poder ser instanciado');
        $this->assertInstanceOf(Animal::class, $dog, 'Dog debe heredar de Animal');
    }
    
    public function testDog_MakesCorrectSound()
    {
        // Arrange
        $dog = new Dog("Buddy", 3);
        
        // Act
        $sound = $dog->makeSound();
        
        // Assert
        $this->assertEquals("Woof! Woof!", $sound, 'El perro debe ladrar');
    }
    
    public function testCat_InheritsFromAnimal()
    {
        // Arrange & Act
        $cat = new Cat("Whiskers", 2);
        
        // Assert
        $this->assertNotNull($cat, 'El gato debe poder ser instanciado');
        $this->assertInstanceOf(Animal::class, $cat, 'Cat debe heredar de Animal');
    }
    
    public function testCat_MakesCorrectSound()
    {
        // Arrange
        $cat = new Cat("Whiskers", 2);
        
        // Act
        $sound = $cat->makeSound();
        
        // Assert
        $this->assertEquals("Meow! Meow!", $sound, 'El gato debe maullar');
    }
    
    public function testAnimal_HasNameAndAge()
    {
        // Arrange
        $dog = new Dog("Max", 5);
        
        // Act
        $name = $dog->getName();
        $age = $dog->getAge();
        
        // Assert
        $this->assertEquals("Max", $name, 'El nombre debe ser heredado y accesible');
        $this->assertEquals(5, $age, 'La edad debe ser heredada y accesible');
    }
    
    public function testAnimal_CanEat()
    {
        // Arrange
        $cat = new Cat("Luna", 1);
        
        // Act
        $eatMessage = $cat->eat();
        
        // Assert
        $this->assertStringContainsString("Luna", $eatMessage, 'El mensaje de comer debe incluir el nombre');
        $this->assertStringContainsString("eating", $eatMessage, 'El mensaje debe indicar que está comiendo');
    }
}
