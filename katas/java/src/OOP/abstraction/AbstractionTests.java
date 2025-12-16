package OOP.abstraction;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

/**
 * Tests para el concepto de Abstracción en OOP
 * Valida que la abstracción oculte detalles de implementación
 */
public class AbstractionTests {
    
    @Test
    public void testEmailSender_CanBeInstantiated() {
        // Arrange & Act
        EmailSender sender = new EmailSender("usuario@gmail.com", "password123");
        
        // Assert
        assertNotNull(sender, "El EmailSender debe poder ser instanciado");
    }
    
    @Test
    public void testEmailSender_SendsEmailSuccessfully() {
        // Arrange
        EmailSender sender = new EmailSender("usuario@gmail.com", "password123");
        
        // Act
        boolean result = sender.sendEmail("destinatario@gmail.com", "Hola", "Mensaje de prueba");
        
        // Assert
        assertTrue(result, "El email debe enviarse exitosamente");
    }
    
    @Test
    public void testEmailSender_FailsWithEmptyCredentials() {
        // Arrange
        EmailSender sender = new EmailSender("", "");
        
        // Act
        boolean result = sender.sendEmail("destinatario@gmail.com", "Hola", "Mensaje");
        
        // Assert
        assertFalse(result, "Debe fallar al enviar email con credenciales vacías");
    }
    
    @Test
    public void testEmailSender_AbstractsComplexity() {
        // Arrange
        EmailSender sender = new EmailSender("usuario@gmail.com", "password123");
        
        // Act - Un solo método simple abstrae toda la complejidad
        boolean result = sender.sendEmail("test@test.com", "Test", "Test body");
        
        // Assert
        assertTrue(result, "La abstracción debe simplificar el proceso de envío de email");
    }
}
