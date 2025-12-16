<?php

use PHPUnit\Framework\TestCase;

require_once 'factory-bad.php';
require_once 'factory-good.php';

/**
 * Tests para el patrón Factory
 */
class Tests extends TestCase
{
    public function testNotificationServiceBad_SendsEmailNotification()
    {
        // Arrange
        $service = new NotificationService();
        
        // Act
        $result = $service->sendNotification("email", "Test message");
        
        // Assert
        $this->assertStringContainsString("EMAIL", $result);
        $this->assertStringContainsString("Test message", $result);
    }
    
    public function testNotificationServiceBad_SendsSMSNotification()
    {
        // Arrange
        $service = new NotificationService();
        
        // Act
        $result = $service->sendNotification("sms", "Test message");
        
        // Assert
        $this->assertStringContainsString("SMS", $result);
        $this->assertStringContainsString("Test message", $result);
    }
    
    public function testNotificationServiceBad_SendsPushNotification()
    {
        // Arrange
        $service = new NotificationService();
        
        // Act
        $result = $service->sendNotification("push", "Test message");
        
        // Assert
        $this->assertStringContainsString("PUSH", $result);
        $this->assertStringContainsString("Test message", $result);
    }
    
    public function testNotificationFactoryGood_CreatesEmailNotification()
    {
        // Arrange & Act
        $notification = NotificationFactory::create("email");
        $result = $notification->send("Test message");
        
        // Assert
        $this->assertStringContainsString("EMAIL", $result);
    }
    
    public function testNotificationFactoryGood_CreatesSMSNotification()
    {
        // Arrange & Act
        $notification = NotificationFactory::create("sms");
        $result = $notification->send("Test message");
        
        // Assert
        $this->assertStringContainsString("SMS", $result);
    }
    
    public function testNotificationFactoryGood_CreatesPushNotification()
    {
        // Arrange & Act
        $notification = NotificationFactory::create("push");
        $result = $notification->send("Test message");
        
        // Assert
        $this->assertStringContainsString("PUSH", $result);
    }
    
    public function testNotificationServiceGood_UsesFactory()
    {
        // Arrange
        $service = new NotificationService();
        
        // Act
        $emailResult = $service->sendNotification("email", "Test 1");
        $smsResult = $service->sendNotification("sms", "Test 2");
        $pushResult = $service->sendNotification("push", "Test 3");
        
        // Assert
        $this->assertStringContainsString("EMAIL", $emailResult);
        $this->assertStringContainsString("SMS", $smsResult);
        $this->assertStringContainsString("PUSH", $pushResult);
    }
}
