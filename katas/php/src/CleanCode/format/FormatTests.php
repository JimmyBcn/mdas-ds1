<?php

use PHPUnit\Framework\TestCase;

require_once 'format-good.php';

/**
 * Tests para el concepto de Format en Clean Code
 * Valida que el código tenga buen formato horizontal y vertical
 */
class FormatTests extends TestCase
{
    public function testProductService_FindsProductById()
    {
        // Arrange
        $service = new ProductService();
        
        // Act
        $product = $service->findProductByIdAndUpdateStockAndCalculateDiscountAndSendNotification(1, 5, 0.8);
        
        // Assert
        $this->assertNotNull($product, 'El producto debe ser encontrado');
        $this->assertEquals('Laptop', $product['name'], 'El nombre del producto debe ser correcto');
    }
    
    public function testProductService_UpdatesStockCorrectly()
    {
        // Arrange
        $service = new ProductService();
        
        // Act
        $product = $service->findProductByIdAndUpdateStockAndCalculateDiscountAndSendNotification(1, 5, 0.8);
        
        // Assert
        $this->assertEquals(45, $product['stock'], 'El stock debe reducirse correctamente (50 - 5 = 45)');
    }
    
    public function testProductService_CalculatesDiscountCorrectly()
    {
        // Arrange
        $service = new ProductService();
        
        // Act
        $product = $service->findProductByIdAndUpdateStockAndCalculateDiscountAndSendNotification(1, 5, 0.8);
        
        // Assert
        $this->assertEquals(960.0, $product['discountedPrice'], 'El precio con descuento debe ser correcto (1200 * 0.8 = 960)');
    }
    
    public function testOrderProcessor_ProcessesValidOrder()
    {
        // Arrange
        $processor = new OrderProcessor();
        $items = [
            ['price' => 100, 'quantity' => 2]
        ];
        
        // Act
        $result = $processor->processOrder(1, $items, 'credit_card');
        
        // Assert
        $this->assertTrue($result, 'La orden válida debe ser procesada exitosamente');
    }
    
    public function testOrderProcessor_CalculatesTotalCorrectly()
    {
        // Arrange
        $processor = new OrderProcessor();
        $items = [
            ['price' => 50, 'quantity' => 2],
            ['price' => 30, 'quantity' => 1]
        ];
        
        // Act
        $processor->processOrder(1, $items, 'credit_card');
        $orders = $processor->getOrders();
        
        // Assert
        $this->assertCount(1, $orders, 'Debe haber una orden procesada');
        $this->assertEquals(130.0, $orders[0]['total'], 'El total debe calcularse correctamente (50*2 + 30*1 = 130)');
    }
    
    public function testOrderProcessor_AppliesDiscountForLargeOrders()
    {
        // Arrange
        $processor = new OrderProcessor();
        $items = [
            ['price' => 100, 'quantity' => 2] // Total = 200, mayor a 100
        ];
        
        // Act
        $processor->processOrder(1, $items, 'credit_card');
        $orders = $processor->getOrders();
        
        // Assert
        $this->assertEquals(180.0, $orders[0]['total'], 'Debe aplicar descuento del 10% para órdenes >100 (200 * 0.9 = 180)');
    }
    
    public function testOrderProcessor_RejectsInvalidOrder()
    {
        // Arrange
        $processor = new OrderProcessor();
        
        // Act - CustomerId inválido (0 o negativo)
        $result = $processor->processOrder(0, [], 'credit_card');
        
        // Assert
        $this->assertFalse($result, 'La orden con customerId inválido debe ser rechazada');
    }
}
