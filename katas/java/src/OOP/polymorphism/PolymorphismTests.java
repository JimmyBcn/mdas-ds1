package OOP.polymorphism;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import java.util.*;

/**
 * Tests para el concepto de Polimorfismo en OOP
 * Valida que diferentes objetos puedan ser tratados de manera uniforme
 */
public class PolymorphismTests {
    
    @Test
    public void testShape_Circle_CalculatesAreaCorrectly() {
        // Arrange
        Shape circle = new Circle(5.0);
        
        // Act
        double area = circle.calculateArea();
        
        // Assert
        assertEquals(78.54, area, 0.01, "El área del círculo debe ser π*r² (π*5² ≈ 78.54)");
    }
    
    @Test
    public void testShape_Rectangle_CalculatesAreaCorrectly() {
        // Arrange
        Shape rectangle = new Rectangle(4.0, 6.0);
        
        // Act
        double area = rectangle.calculateArea();
        
        // Assert
        assertEquals(24.0, area, 0.01, "El área del rectángulo debe ser base*altura (4*6 = 24)");
    }
    
    @Test
    public void testShape_Triangle_CalculatesAreaCorrectly() {
        // Arrange
        Shape triangle = new Triangle(5.0, 8.0);
        
        // Act
        double area = triangle.calculateArea();
        
        // Assert
        assertEquals(20.0, area, 0.01, "El área del triángulo debe ser (base*altura)/2 (5*8/2 = 20)");
    }
    
    @Test
    public void testPolymorphism_DifferentShapesInList() {
        // Arrange
        List<Shape> shapes = new ArrayList<>();
        shapes.add(new Circle(3.0));
        shapes.add(new Rectangle(4.0, 5.0));
        shapes.add(new Triangle(6.0, 4.0));
        
        // Act & Assert
        assertNotNull(shapes, "La lista de formas debe poder contener diferentes tipos");
        assertEquals(3, shapes.size(), "Debe haber 3 formas diferentes");
    }
    
    @Test
    public void testPolymorphism_CalculateTotalArea() {
        // Arrange
        List<Shape> shapes = new ArrayList<>();
        shapes.add(new Circle(2.0));      // π*4 ≈ 12.57
        shapes.add(new Rectangle(3.0, 4.0)); // 12
        shapes.add(new Triangle(5.0, 6.0));  // 15
        
        // Act
        double totalArea = 0;
        for (Shape shape : shapes) {
            totalArea += shape.calculateArea();
        }
        
        // Assert
        assertEquals(39.57, totalArea, 0.01, "El área total debe ser la suma de todas las áreas");
    }
    
    @Test
    public void testPolymorphism_DrawMethodExists() {
        // Arrange
        Shape circle = new Circle(5.0);
        
        // Act
        String drawResult = circle.draw();
        
        // Assert
        assertNotNull(drawResult, "El método draw debe existir y retornar algo");
        assertTrue(drawResult.contains("Circle") || drawResult.contains("círculo"), 
                   "El resultado debe identificar el tipo de forma");
    }
}
