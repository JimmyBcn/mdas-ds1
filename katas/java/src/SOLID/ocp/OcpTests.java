package SOLID.ocp;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import java.util.*;

/**
 * Tests para el principio Open/Closed (OCP)
 * Valida que el código esté abierto para extensión pero cerrado para modificación
 */
public class OcpTests {
    
    @Test
    public void testCommunication_Dog_ReturnsBark() {
        // Arrange
        Communication communication = new Communication();
        Dog dog = new Dog();
        
        // Act
        String sound = communication.communicate(dog);
        
        // Assert
        assertEquals("woof woof", sound, "El perro debe ladrar 'woof woof'");
    }
    
    @Test
    public void testCommunication_Cat_ReturnsMeow() {
        // Arrange
        Communication communication = new Communication();
        Cat cat = new Cat();
        
        // Act
        String sound = communication.communicate(cat);
        
        // Assert
        assertEquals("meow meow", sound, "El gato debe maullar 'meow meow'");
    }
    
    @Test
    public void testCommunication_Fox_ReturnsSound() {
        // Arrange
        Communication communication = new Communication();
        Fox fox = new Fox();
        
        // Act
        String sound = communication.communicate(fox);
        
        // Assert
        assertEquals("ring-ding-ding-ding-dingeringeding", sound, "El zorro debe hacer su sonido característico");
    }
    
    @Test
    public void testCommunication_Cow_ReturnsMoo() {
        // Arrange
        Communication communication = new Communication();
        Cow cow = new Cow();
        
        // Act
        String sound = communication.communicate(cow);
        
        // Assert
        assertEquals("moo moo", sound, "La vaca debe mugir 'moo moo'");
    }
    
    @Test
    public void testCommunication_Duck_ReturnsQuack() {
        // Arrange
        Communication communication = new Communication();
        Duck duck = new Duck();
        
        // Act
        String sound = communication.communicate(duck);
        
        // Assert
        assertEquals("quack quack", sound, "El pato debe hacer 'quack quack'");
    }
    
    @Test
    public void testCommunication_MultipleAnimals_ReturnsAllSounds() {
        // Arrange
        Communication communication = new Communication();
        List<Communicable> animals = Arrays.asList(
            new Dog(),
            new Cat(),
            new Fox(),
            new Cow(),
            new Duck()
        );
        
        // Act
        List<String> sounds = communication.communicateMultiple(animals);
        
        // Assert
        assertEquals(5, sounds.size(), "Debe retornar sonidos de los 5 animales");
        assertEquals("woof woof", sounds.get(0), "Primer sonido debe ser del perro");
        assertEquals("meow meow", sounds.get(1), "Segundo sonido debe ser del gato");
    }
    
    @Test
    public void testOCP_NewAnimalCanBeAdded_WithoutModifyingCommunication() {
        // Arrange - Este test demuestra que se pueden agregar nuevos animales sin modificar Communication
        Communication communication = new Communication();
        
        // Act - Agregar nuevo animal (Fox, Cow, Duck) sin modificar la clase Communication
        Communicable newAnimal = new Fox();
        String sound = communication.communicate(newAnimal);
        
        // Assert
        assertNotNull(sound, "Los nuevos animales deben funcionar sin modificar Communication");
        assertEquals("ring-ding-ding-ding-dingeringeding", sound, "El nuevo animal debe tener su propio sonido");
    }
}
