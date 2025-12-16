package Patterns.factory;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

/**
 * Tests para el patrón Factory
 */
public class Tests {
    
    @Test
    public void testNotificationServiceBad_SendsEmailNotification() {
        // Arrange
        NotificationService service = new NotificationService();
        
        // Act
        String result = service.sendNotification("email", "Test message");
        
        // Assert
        assertTrue(result.contains("EMAIL"));
        assertTrue(result.contains("Test message"));
    }
    
    @Test
    public void testNotificationServiceBad_SendsSMSNotification() {
        // Arrange
        NotificationService service = new NotificationService();
        
        // Act
        String result = service.sendNotification("sms", "Test message");
        
        // Assert
        assertTrue(result.contains("SMS"));
        assertTrue(result.contains("Test message"));
    }
    
    @Test
    public void testNotificationServiceBad_SendsPushNotification() {
        // Arrange
        NotificationService service = new NotificationService();
        
        // Act
        String result = service.sendNotification("push", "Test message");
        
        // Assert
        assertTrue(result.contains("PUSH"));
        assertTrue(result.contains("Test message"));
    }
    
    @Test
    public void testNotificationFactoryGood_CreatesEmailNotification() {
        // Arrange & Act
        Notification notification = NotificationFactory.create("email");
        String result = notification.send("Test message");
        
        // Assert
        assertTrue(result.contains("EMAIL"));
    }
    
    @Test
    public void testNotificationFactoryGood_CreatesSMSNotification() {
        // Arrange & Act
        Notification notification = NotificationFactory.create("sms");
        String result = notification.send("Test message");
        
        // Assert
        assertTrue(result.contains("SMS"));
    }
    
    @Test
    public void testNotificationFactoryGood_CreatesPushNotification() {
        // Arrange & Act
        Notification notification = NotificationFactory.create("push");
        String result = notification.send("Test message");
        
        // Assert
        assertTrue(result.contains("PUSH"));
    }
    
    @Test
    public void testNotificationServiceGood_UsesFactory() {
        // Arrange
        NotificationService service = new NotificationService();
        
        // Act
        String emailResult = service.sendNotification("email", "Test 1");
        String smsResult = service.sendNotification("sms", "Test 2");
        String pushResult = service.sendNotification("push", "Test 3");
        
        // Assert
        assertTrue(emailResult.contains("EMAIL"));
        assertTrue(smsResult.contains("SMS"));
        assertTrue(pushResult.contains("PUSH"));
    }
}
