package OOP.inheritance;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

/**
 * Tests para el concepto de Herencia en OOP
 * Valida que las clases hijas hereden comportamiento de las clases padre
 */
public class InheritanceTests {
    
    @Test
    public void testDog_InheritsFromAnimal() {
        // Arrange & Act
        Dog dog = new Dog("Buddy", 3);
        
        // Assert
        assertNotNull(dog, "El perro debe poder ser instanciado");
        assertTrue(dog instanceof Animal, "Dog debe heredar de Animal");
    }
    
    @Test
    public void testDog_MakesCorrectSound() {
        // Arrange
        Dog dog = new Dog("Buddy", 3);
        
        // Act
        String sound = dog.makeSound();
        
        // Assert
        assertEquals("Woof! Woof!", sound, "El perro debe ladrar");
    }
    
    @Test
    public void testCat_InheritsFromAnimal() {
        // Arrange & Act
        Cat cat = new Cat("Whiskers", 2);
        
        // Assert
        assertNotNull(cat, "El gato debe poder ser instanciado");
        assertTrue(cat instanceof Animal, "Cat debe heredar de Animal");
    }
    
    @Test
    public void testCat_MakesCorrectSound() {
        // Arrange
        Cat cat = new Cat("Whiskers", 2);
        
        // Act
        String sound = cat.makeSound();
        
        // Assert
        assertEquals("Meow! Meow!", sound, "El gato debe maullar");
    }
    
    @Test
    public void testAnimal_HasNameAndAge() {
        // Arrange
        Dog dog = new Dog("Max", 5);
        
        // Act
        String name = dog.getName();
        int age = dog.getAge();
        
        // Assert
        assertEquals("Max", name, "El nombre debe ser heredado y accesible");
        assertEquals(5, age, "La edad debe ser heredada y accesible");
    }
    
    @Test
    public void testAnimal_CanEat() {
        // Arrange
        Cat cat = new Cat("Luna", 1);
        
        // Act
        String eatMessage = cat.eat();
        
        // Assert
        assertTrue(eatMessage.contains("Luna"), "El mensaje de comer debe incluir el nombre");
        assertTrue(eatMessage.contains("eating"), "El mensaje debe indicar que está comiendo");
    }
}
