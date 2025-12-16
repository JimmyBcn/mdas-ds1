package Patterns.strategy;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

/**
 * Tests para el patrón Strategy
 * Valida que el patrón Strategy permita cambiar algoritmos en tiempo de ejecución
 */
public class StrategyTests {
    
    @Test
    public void testPaymentProcessor_WithCreditCardStrategy() {
        // Arrange
        PaymentStrategy creditCard = new CreditCardPayment("1234-5678-9012-3456", "John Doe");
        PaymentProcessor processor = new PaymentProcessor(creditCard);
        
        // Act
        String result = processor.processPayment(100.0);
        
        // Assert
        assertNotNull(result, "Debe procesar el pago con tarjeta de crédito");
        assertTrue(result.contains("Credit Card") || result.contains("tarjeta"), 
                   "El resultado debe mencionar tarjeta de crédito");
        assertTrue(result.contains("100"), "Debe incluir el monto");
    }
    
    @Test
    public void testPaymentProcessor_WithPayPalStrategy() {
        // Arrange
        PaymentStrategy paypal = new PayPalPayment("user@email.com");
        PaymentProcessor processor = new PaymentProcessor(paypal);
        
        // Act
        String result = processor.processPayment(250.0);
        
        // Assert
        assertNotNull(result, "Debe procesar el pago con PayPal");
        assertTrue(result.contains("PayPal"), "El resultado debe mencionar PayPal");
        assertTrue(result.contains("250"), "Debe incluir el monto");
    }
    
    @Test
    public void testPaymentProcessor_WithBitcoinStrategy() {
        // Arrange
        PaymentStrategy bitcoin = new BitcoinPayment("1A2B3C4D5E6F7G8H9I0J");
        PaymentProcessor processor = new PaymentProcessor(bitcoin);
        
        // Act
        String result = processor.processPayment(500.0);
        
        // Assert
        assertNotNull(result, "Debe procesar el pago con Bitcoin");
        assertTrue(result.contains("Bitcoin"), "El resultado debe mencionar Bitcoin");
        assertTrue(result.contains("500"), "Debe incluir el monto");
    }
    
    @Test
    public void testPaymentProcessor_CanChangeStrategy() {
        // Arrange
        PaymentProcessor processor = new PaymentProcessor(new CreditCardPayment("1234", "John"));
        
        // Act - Cambiar de estrategia en tiempo de ejecución
        String result1 = processor.processPayment(100.0);
        processor.setPaymentStrategy(new PayPalPayment("user@email.com"));
        String result2 = processor.processPayment(200.0);
        
        // Assert
        assertTrue(result1.contains("Credit Card") || result1.contains("tarjeta"), 
                   "Primera transacción debe usar tarjeta de crédito");
        assertTrue(result2.contains("PayPal"), "Segunda transacción debe usar PayPal");
    }
    
    @Test
    public void testCreditCardPayment_ContainsCardInfo() {
        // Arrange
        CreditCardPayment payment = new CreditCardPayment("1234-5678-9012-3456", "Jane Doe");
        
        // Act
        String result = payment.pay(150.0);
        
        // Assert
        assertTrue(result.contains("1234") || result.contains("****"), 
                   "Debe incluir información de la tarjeta (enmascarada o visible)");
        assertTrue(result.contains("Jane Doe") || result.contains("Jane"), 
                   "Debe incluir el nombre del titular");
    }
    
    @Test
    public void testPayPalPayment_ContainsEmail() {
        // Arrange
        PayPalPayment payment = new PayPalPayment("test@example.com");
        
        // Act
        String result = payment.pay(75.0);
        
        // Assert
        assertTrue(result.contains("test@example.com"), "Debe incluir el email de PayPal");
    }
    
    @Test
    public void testBitcoinPayment_ContainsWalletAddress() {
        // Arrange
        BitcoinPayment payment = new BitcoinPayment("1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2");
        
        // Act
        String result = payment.pay(1000.0);
        
        // Assert
        assertTrue(result.contains("1BvBM") || result.contains("wallet"), 
                   "Debe incluir información de la dirección de wallet");
    }
}
