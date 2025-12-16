package SOLID.lsp;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

/**
 * Tests para el principio de Sustitución de Liskov (LSP)
 * Valida que las subclases puedan sustituir a sus clases base sin romper el comportamiento
 */
public class LspTests {
    
    @Test
    public void testRectangle_CalculatesAreaCorrectly() {
        // Arrange
        Rectangle rectangle = new Rectangle(4, 5);
        
        // Act
        int area = rectangle.getArea();
        
        // Assert
        assertEquals(20, area, "El área del rectángulo debe ser ancho * alto (4 * 5 = 20)");
    }
    
    @Test
    public void testRectangle_SetWidth_OnlyChangesWidth() {
        // Arrange
        Rectangle rectangle = new Rectangle(4, 5);
        
        // Act
        rectangle.setWidth(6);
        
        // Assert
        assertEquals(6, rectangle.getWidth(), "El ancho debe cambiar a 6");
        assertEquals(5, rectangle.getHeight(), "El alto debe permanecer en 5");
        assertEquals(30, rectangle.getArea(), "El área debe ser 6 * 5 = 30");
    }
    
    @Test
    public void testSquare_CalculatesAreaCorrectly() {
        // Arrange
        Square square = new Square(5);
        
        // Act
        int area = square.getArea();
        
        // Assert
        assertEquals(25, area, "El área del cuadrado debe ser lado * lado (5 * 5 = 25)");
    }
    
    @Test
    public void testSquare_SetSide_UpdatesBothDimensions() {
        // Arrange
        Square square = new Square(5);
        
        // Act
        square.setSide(7);
        
        // Assert
        assertEquals(7, square.getSide(), "El lado debe cambiar a 7");
        assertEquals(49, square.getArea(), "El área debe ser 7 * 7 = 49");
    }
    
    @Test
    public void testLSP_ShapesCanBeUsedPolymorphically() {
        // Arrange
        Shape rectangle = new Rectangle(4, 5);
        Shape square = new Square(5);
        
        // Act
        int rectArea = rectangle.getArea();
        int squareArea = square.getArea();
        
        // Assert
        assertEquals(20, rectArea, "El rectángulo debe calcular su área correctamente");
        assertEquals(25, squareArea, "El cuadrado debe calcular su área correctamente");
    }
    
    @Test
    public void testLSP_SquareDoesNotViolateRectangleContract() {
        // Arrange
        Square square = new Square(5);
        
        // Act & Assert - El cuadrado mantiene sus invariantes
        assertEquals(5, square.getSide(), "El cuadrado debe mantener su lado");
        assertEquals(25, square.getArea(), "El área debe ser consistente");
        
        // El cuadrado no hereda de Rectangle, evitando violación de LSP
        assertFalse(square instanceof Rectangle, 
                   "Square no debe heredar de Rectangle para evitar violación de LSP");
    }
}
