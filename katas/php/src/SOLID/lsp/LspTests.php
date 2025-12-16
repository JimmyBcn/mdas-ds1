<?php

use PHPUnit\Framework\TestCase;

require_once 'lsp-good.php';

/**
 * Tests para el principio de Sustitución de Liskov (LSP)
 * Valida que las subclases puedan sustituir a sus clases base sin romper el comportamiento
 */
class LspTests extends TestCase
{
    public function testRectangle_CalculatesAreaCorrectly()
    {
        // Arrange
        $rectangle = new Rectangle(4, 5);
        
        // Act
        $area = $rectangle->getArea();
        
        // Assert
        $this->assertEquals(20, $area, 'El área del rectángulo debe ser ancho * alto (4 * 5 = 20)');
    }
    
    public function testRectangle_SetWidth_OnlyChangesWidth()
    {
        // Arrange
        $rectangle = new Rectangle(4, 5);
        
        // Act
        $rectangle->setWidth(6);
        
        // Assert
        $this->assertEquals(6, $rectangle->getWidth(), 'El ancho debe cambiar a 6');
        $this->assertEquals(5, $rectangle->getHeight(), 'El alto debe permanecer en 5');
        $this->assertEquals(30, $rectangle->getArea(), 'El área debe ser 6 * 5 = 30');
    }
    
    public function testSquare_CalculatesAreaCorrectly()
    {
        // Arrange
        $square = new Square(5);
        
        // Act
        $area = $square->getArea();
        
        // Assert
        $this->assertEquals(25, $area, 'El área del cuadrado debe ser lado * lado (5 * 5 = 25)');
    }
    
    public function testSquare_SetSide_UpdatesBothDimensions()
    {
        // Arrange
        $square = new Square(5);
        
        // Act
        $square->setSide(7);
        
        // Assert
        $this->assertEquals(7, $square->getSide(), 'El lado debe cambiar a 7');
        $this->assertEquals(49, $square->getArea(), 'El área debe ser 7 * 7 = 49');
    }
    
    public function testLSP_ShapesCanBeUsedPolymorphically()
    {
        // Arrange
        $rectangle = new Rectangle(4, 5);
        $square = new Square(5);
        
        // Act
        $rectArea = $rectangle->getArea();
        $squareArea = $square->getArea();
        
        // Assert
        $this->assertEquals(20, $rectArea, 'El rectángulo debe calcular su área correctamente');
        $this->assertEquals(25, $squareArea, 'El cuadrado debe calcular su área correctamente');
    }
    
    public function testLSP_SquareDoesNotViolateRectangleContract()
    {
        // Arrange
        $square = new Square(5);
        
        // Act & Assert - El cuadrado mantiene sus invariantes
        $this->assertEquals(5, $square->getSide(), 'El cuadrado debe mantener su lado');
        $this->assertEquals(25, $square->getArea(), 'El área debe ser consistente');
        
        // El cuadrado no hereda de Rectangle, evitando violación de LSP
        $this->assertNotInstanceOf(Rectangle::class, $square, 
            'Square no debe heredar de Rectangle para evitar violación de LSP');
    }
}
