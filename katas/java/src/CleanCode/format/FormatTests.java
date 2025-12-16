package CleanCode.format;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import java.util.*;

/**
 * Tests para el concepto de Format en Clean Code
 * Valida que el código tenga buen formato horizontal y vertical
 */
public class FormatTests {
    
    @Test
    public void testProductService_FindsProductById() {
        // Arrange
        ProductService service = new ProductService();
        
        // Act
        Product product = service.findProductByIdAndUpdateStockAndCalculateDiscountAndSendNotification(1, 5, 0.8);
        
        // Assert
        assertNotNull(product, "El producto debe ser encontrado");
        assertEquals("Laptop", product.name, "El nombre del producto debe ser correcto");
    }
    
    @Test
    public void testProductService_UpdatesStockCorrectly() {
        // Arrange
        ProductService service = new ProductService();
        
        // Act
        Product product = service.findProductByIdAndUpdateStockAndCalculateDiscountAndSendNotification(1, 5, 0.8);
        
        // Assert
        assertEquals(45, product.stock, "El stock debe reducirse correctamente (50 - 5 = 45)");
    }
    
    @Test
    public void testProductService_CalculatesDiscountCorrectly() {
        // Arrange
        ProductService service = new ProductService();
        
        // Act
        Product product = service.findProductByIdAndUpdateStockAndCalculateDiscountAndSendNotification(1, 5, 0.8);
        
        // Assert
        assertEquals(960.0, product.discountedPrice, 0.01, "El precio con descuento debe ser correcto (1200 * 0.8 = 960)");
    }
    
    @Test
    public void testOrderProcessor_ProcessesValidOrder() {
        // Arrange
        OrderProcessor processor = new OrderProcessor();
        List<OrderItem> items = new ArrayList<>();
        items.add(new OrderItem(100, 2));
        
        // Act
        boolean result = processor.processOrder(1, items, "credit_card");
        
        // Assert
        assertTrue(result, "La orden válida debe ser procesada exitosamente");
    }
    
    @Test
    public void testOrderProcessor_CalculatesTotalCorrectly() {
        // Arrange
        OrderProcessor processor = new OrderProcessor();
        List<OrderItem> items = new ArrayList<>();
        items.add(new OrderItem(50, 2));
        items.add(new OrderItem(30, 1));
        
        // Act
        processor.processOrder(1, items, "credit_card");
        List<Order> orders = processor.getOrders();
        
        // Assert
        assertEquals(1, orders.size(), "Debe haber una orden procesada");
        assertEquals(130.0, orders.get(0).total, 0.01, "El total debe calcularse correctamente (50*2 + 30*1 = 130)");
    }
    
    @Test
    public void testOrderProcessor_AppliesDiscountForLargeOrders() {
        // Arrange
        OrderProcessor processor = new OrderProcessor();
        List<OrderItem> items = new ArrayList<>();
        items.add(new OrderItem(100, 2)); // Total = 200, mayor a 100
        
        // Act
        processor.processOrder(1, items, "credit_card");
        List<Order> orders = processor.getOrders();
        
        // Assert
        assertEquals(180.0, orders.get(0).total, 0.01, "Debe aplicar descuento del 10% para órdenes >100 (200 * 0.9 = 180)");
    }
    
    @Test
    public void testOrderProcessor_RejectsInvalidOrder() {
        // Arrange
        OrderProcessor processor = new OrderProcessor();
        
        // Act - CustomerId inválido (0 o negativo)
        boolean result = processor.processOrder(0, new ArrayList<>(), "credit_card");
        
        // Assert
        assertFalse(result, "La orden con customerId inválido debe ser rechazada");
    }
}
