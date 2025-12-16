<?php

use PHPUnit\Framework\TestCase;

require_once 'ocp-good.php';

/**
 * Tests para el principio Open/Closed (OCP)
 * Valida que el código esté abierto para extensión pero cerrado para modificación
 */
class OcpTests extends TestCase
{
    public function testCommunication_Dog_ReturnsBark()
    {
        // Arrange
        $communication = new Communication();
        $dog = new Dog();
        
        // Act
        $sound = $communication->communicate($dog);
        
        // Assert
        $this->assertEquals("woof woof", $sound, 'El perro debe ladrar "woof woof"');
    }
    
    public function testCommunication_Cat_ReturnsMeow()
    {
        // Arrange
        $communication = new Communication();
        $cat = new Cat();
        
        // Act
        $sound = $communication->communicate($cat);
        
        // Assert
        $this->assertEquals("meow meow", $sound, 'El gato debe maullar "meow meow"');
    }
    
    public function testCommunication_Fox_ReturnsSound()
    {
        // Arrange
        $communication = new Communication();
        $fox = new Fox();
        
        // Act
        $sound = $communication->communicate($fox);
        
        // Assert
        $this->assertEquals("ring-ding-ding-ding-dingeringeding", $sound, 'El zorro debe hacer su sonido característico');
    }
    
    public function testCommunication_Cow_ReturnsMoo()
    {
        // Arrange
        $communication = new Communication();
        $cow = new Cow();
        
        // Act
        $sound = $communication->communicate($cow);
        
        // Assert
        $this->assertEquals("moo moo", $sound, 'La vaca debe mugir "moo moo"');
    }
    
    public function testCommunication_Duck_ReturnsQuack()
    {
        // Arrange
        $communication = new Communication();
        $duck = new Duck();
        
        // Act
        $sound = $communication->communicate($duck);
        
        // Assert
        $this->assertEquals("quack quack", $sound, 'El pato debe hacer "quack quack"');
    }
    
    public function testCommunication_MultipleAnimals_ReturnsAllSounds()
    {
        // Arrange
        $communication = new Communication();
        $animals = [
            new Dog(),
            new Cat(),
            new Fox(),
            new Cow(),
            new Duck()
        ];
        
        // Act
        $sounds = $communication->communicateMultiple($animals);
        
        // Assert
        $this->assertCount(5, $sounds, 'Debe retornar sonidos de los 5 animales');
        $this->assertEquals("woof woof", $sounds[0], 'Primer sonido debe ser del perro');
        $this->assertEquals("meow meow", $sounds[1], 'Segundo sonido debe ser del gato');
    }
    
    public function testOCP_NewAnimalCanBeAdded_WithoutModifyingCommunication()
    {
        // Arrange - Este test demuestra que se pueden agregar nuevos animales sin modificar Communication
        $communication = new Communication();
        
        // Act - Agregar nuevo animal (Fox, Cow, Duck) sin modificar la clase Communication
        $newAnimal = new Fox();
        $sound = $communication->communicate($newAnimal);
        
        // Assert
        $this->assertNotNull($sound, 'Los nuevos animales deben funcionar sin modificar Communication');
        $this->assertEquals("ring-ding-ding-ding-dingeringeding", $sound, 'El nuevo animal debe tener su propio sonido');
    }
}
