<?php

use PHPUnit\Framework\TestCase;

require_once 'strategy-good.php';

/**
 * Tests para el patrón Strategy
 * Valida que el patrón Strategy permita cambiar algoritmos en tiempo de ejecución
 */
class StrategyTests extends TestCase
{
    public function testPaymentProcessor_WithCreditCardStrategy()
    {
        // Arrange
        $creditCard = new CreditCardPayment("1234-5678-9012-3456", "John Doe");
        $processor = new PaymentProcessor($creditCard);
        
        // Act
        $result = $processor->processPayment(100.0);
        
        // Assert
        $this->assertNotNull($result, 'Debe procesar el pago con tarjeta de crédito');
        $this->assertTrue(
            str_contains($result, 'Credit Card') || str_contains($result, 'tarjeta'),
            'El resultado debe mencionar tarjeta de crédito'
        );
        $this->assertStringContainsString("100", $result, 'Debe incluir el monto');
    }
    
    public function testPaymentProcessor_WithPayPalStrategy()
    {
        // Arrange
        $paypal = new PayPalPayment("user@email.com");
        $processor = new PaymentProcessor($paypal);
        
        // Act
        $result = $processor->processPayment(250.0);
        
        // Assert
        $this->assertNotNull($result, 'Debe procesar el pago con PayPal');
        $this->assertStringContainsString("PayPal", $result, 'El resultado debe mencionar PayPal');
        $this->assertStringContainsString("250", $result, 'Debe incluir el monto');
    }
    
    public function testPaymentProcessor_WithBitcoinStrategy()
    {
        // Arrange
        $bitcoin = new BitcoinPayment("1A2B3C4D5E6F7G8H9I0J");
        $processor = new PaymentProcessor($bitcoin);
        
        // Act
        $result = $processor->processPayment(500.0);
        
        // Assert
        $this->assertNotNull($result, 'Debe procesar el pago con Bitcoin');
        $this->assertStringContainsString("Bitcoin", $result, 'El resultado debe mencionar Bitcoin');
        $this->assertStringContainsString("500", $result, 'Debe incluir el monto');
    }
    
    public function testPaymentProcessor_CanChangeStrategy()
    {
        // Arrange
        $processor = new PaymentProcessor(new CreditCardPayment("1234", "John"));
        
        // Act - Cambiar de estrategia en tiempo de ejecución
        $result1 = $processor->processPayment(100.0);
        $processor->setPaymentStrategy(new PayPalPayment("user@email.com"));
        $result2 = $processor->processPayment(200.0);
        
        // Assert
        $this->assertTrue(
            str_contains($result1, 'Credit Card') || str_contains($result1, 'tarjeta'),
            'Primera transacción debe usar tarjeta de crédito'
        );
        $this->assertStringContainsString("PayPal", $result2, 'Segunda transacción debe usar PayPal');
    }
    
    public function testCreditCardPayment_ContainsCardInfo()
    {
        // Arrange
        $payment = new CreditCardPayment("1234-5678-9012-3456", "Jane Doe");
        
        // Act
        $result = $payment->pay(150.0);
        
        // Assert
        $this->assertTrue(
            str_contains($result, '1234') || str_contains($result, '****'),
            'Debe incluir información de la tarjeta (enmascarada o visible)'
        );
        $this->assertTrue(
            str_contains($result, 'Jane Doe') || str_contains($result, 'Jane'),
            'Debe incluir el nombre del titular'
        );
    }
    
    public function testPayPalPayment_ContainsEmail()
    {
        // Arrange
        $payment = new PayPalPayment("test@example.com");
        
        // Act
        $result = $payment->pay(75.0);
        
        // Assert
        $this->assertStringContainsString("test@example.com", $result, 'Debe incluir el email de PayPal');
    }
    
    public function testBitcoinPayment_ContainsWalletAddress()
    {
        // Arrange
        $payment = new BitcoinPayment("1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2");
        
        // Act
        $result = $payment->pay(1000.0);
        
        // Assert
        $this->assertTrue(
            str_contains($result, '1BvBM') || str_contains($result, 'wallet'),
            'Debe incluir información de la dirección de wallet'
        );
    }
}
