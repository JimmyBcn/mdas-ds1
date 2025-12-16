<?php

use PHPUnit\Framework\TestCase;

require_once 'polymorphism-good.php';

/**
 * Tests para el concepto de Polimorfismo en OOP
 * Valida que diferentes objetos puedan ser tratados de manera uniforme
 */
class PolymorphismTests extends TestCase
{
    public function testShape_Circle_CalculatesAreaCorrectly()
    {
        // Arrange
        $circle = new Circle(5.0);
        
        // Act
        $area = $circle->calculateArea();
        
        // Assert
        $this->assertEquals(78.54, $area, 'El área del círculo debe ser π*r² (π*5² ≈ 78.54)', 0.01);
    }
    
    public function testShape_Rectangle_CalculatesAreaCorrectly()
    {
        // Arrange
        $rectangle = new Rectangle(4.0, 6.0);
        
        // Act
        $area = $rectangle->calculateArea();
        
        // Assert
        $this->assertEquals(24.0, $area, 'El área del rectángulo debe ser base*altura (4*6 = 24)', 0.01);
    }
    
    public function testShape_Triangle_CalculatesAreaCorrectly()
    {
        // Arrange
        $triangle = new Triangle(5.0, 8.0);
        
        // Act
        $area = $triangle->calculateArea();
        
        // Assert
        $this->assertEquals(20.0, $area, 'El área del triángulo debe ser (base*altura)/2 (5*8/2 = 20)', 0.01);
    }
    
    public function testPolymorphism_DifferentShapesInArray()
    {
        // Arrange
        $shapes = [
            new Circle(3.0),
            new Rectangle(4.0, 5.0),
            new Triangle(6.0, 4.0)
        ];
        
        // Act & Assert
        $this->assertNotNull($shapes, 'El array de formas debe poder contener diferentes tipos');
        $this->assertCount(3, $shapes, 'Debe haber 3 formas diferentes');
    }
    
    public function testPolymorphism_CalculateTotalArea()
    {
        // Arrange
        $shapes = [
            new Circle(2.0),         // π*4 ≈ 12.57
            new Rectangle(3.0, 4.0), // 12
            new Triangle(5.0, 6.0)   // 15
        ];
        
        // Act
        $totalArea = 0;
        foreach ($shapes as $shape) {
            $totalArea += $shape->calculateArea();
        }
        
        // Assert
        $this->assertEquals(39.57, $totalArea, 'El área total debe ser la suma de todas las áreas', 0.01);
    }
    
    public function testPolymorphism_DrawMethodExists()
    {
        // Arrange
        $circle = new Circle(5.0);
        
        // Act
        $drawResult = $circle->draw();
        
        // Assert
        $this->assertNotNull($drawResult, 'El método draw debe existir y retornar algo');
        $this->assertTrue(
            str_contains($drawResult, 'Circle') || str_contains($drawResult, 'círculo'),
            'El resultado debe identificar el tipo de forma'
        );
    }
}
