package SOLID.srp;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

/**
 * Tests para el principio SRP (Single Responsibility Principle)
 */
public class Tests {
    
    @Test
    public void testUserBad_GetName_ReturnsCorrectName() {
        // Arrange
        User user = new User("Juan Pérez", "juan@ejemplo.com");
        
        // Act
        String name = user.getName();
        
        // Assert
        assertEquals("Juan Pérez", name);
    }
    
    @Test
    public void testUserBad_SendWelcomeEmail_ContainsEmail() {
        // Arrange
        User user = new User("Juan Pérez", "juan@ejemplo.com");
        
        // Act
        String result = user.sendWelcomeEmail();
        
        // Assert
        assertTrue(result.contains("juan@ejemplo.com"));
        assertTrue(result.contains("bienvenida"));
    }
    
    @Test
    public void testUserBad_SaveToFile_ContainsUsername() {
        // Arrange
        User user = new User("Juan Pérez", "juan@ejemplo.com");
        
        // Act
        String result = user.saveToFile();
        
        // Assert
        assertTrue(result.contains("Juan Pérez"));
        assertTrue(result.contains("Guardando"));
    }
    
    @Test
    public void testUserGood_OnlyManagesUserData() {
        // Arrange & Act
        User user = new User("Juan Pérez", "juan@ejemplo.com");
        
        // Assert
        assertEquals("Juan Pérez", user.getName());
        assertEquals("juan@ejemplo.com", user.getEmail());
    }
    
    @Test
    public void testEmailService_SendsWelcomeEmail() {
        // Arrange
        User user = new User("Juan Pérez", "juan@ejemplo.com");
        EmailService emailService = new EmailService();
        
        // Act
        String result = emailService.sendWelcomeEmail(user);
        
        // Assert
        assertTrue(result.contains("juan@ejemplo.com"));
        assertTrue(result.contains("bienvenida"));
    }
    
    @Test
    public void testUserFileManager_SavesUser() {
        // Arrange
        User user = new User("Juan Pérez", "juan@ejemplo.com");
        UserFileManager fileManager = new UserFileManager();
        
        // Act
        String result = fileManager.saveToFile(user);
        
        // Assert
        assertTrue(result.contains("Juan Pérez"));
        assertTrue(result.contains("Guardando"));
    }
    
    @Test
    public void testSRP_EachClassHasSingleResponsibility() {
        // Arrange
        User user = new User("Juan", "juan@email.com");
        EmailService emailService = new EmailService();
        UserFileManager fileManager = new UserFileManager();
        
        // Act & Assert
        assertNotNull(user.getName());
        assertTrue(emailService.sendWelcomeEmail(user).toLowerCase().contains("email"));
        assertTrue(fileManager.saveToFile(user).toLowerCase().contains("archivo"));
    }
}
