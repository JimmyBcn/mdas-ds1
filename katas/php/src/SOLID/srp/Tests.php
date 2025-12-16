<?php

use PHPUnit\Framework\TestCase;

require_once 'srp-bad.php';
require_once 'srp-good.php';

/**
 * Tests para el principio SRP (Single Responsibility Principle)
 */
class Tests extends TestCase
{
    public function testUserBad_GetName_ReturnsCorrectName()
    {
        // Arrange
        $user = new User("Juan Pérez", "juan@ejemplo.com");
        
        // Act
        $name = $user->getName();
        
        // Assert
        $this->assertEquals("Juan Pérez", $name);
    }
    
    public function testUserBad_SendWelcomeEmail_ContainsEmail()
    {
        // Arrange
        $user = new User("Juan Pérez", "juan@ejemplo.com");
        
        // Act
        $result = $user->sendWelcomeEmail();
        
        // Assert
        $this->assertStringContainsString("juan@ejemplo.com", $result);
        $this->assertStringContainsString("bienvenida", $result);
    }
    
    public function testUserBad_SaveToFile_ContainsUsername()
    {
        // Arrange
        $user = new User("Juan Pérez", "juan@ejemplo.com");
        
        // Act
        $result = $user->saveToFile();
        
        // Assert
        $this->assertStringContainsString("Juan Pérez", $result);
        $this->assertStringContainsString("Guardando", $result);
    }
    
    public function testUserGood_OnlyManagesUserData()
    {
        // Arrange & Act
        $user = new User("Juan Pérez", "juan@ejemplo.com");
        
        // Assert
        $this->assertEquals("Juan Pérez", $user->getName());
        $this->assertEquals("juan@ejemplo.com", $user->getEmail());
    }
    
    public function testEmailService_SendsWelcomeEmail()
    {
        // Arrange
        $user = new User("Juan Pérez", "juan@ejemplo.com");
        $emailService = new EmailService();
        
        // Act
        $result = $emailService->sendWelcomeEmail($user);
        
        // Assert
        $this->assertStringContainsString("juan@ejemplo.com", $result);
        $this->assertStringContainsString("bienvenida", $result);
    }
    
    public function testUserFileManager_SavesUser()
    {
        // Arrange
        $user = new User("Juan Pérez", "juan@ejemplo.com");
        $fileManager = new UserFileManager();
        
        // Act
        $result = $fileManager->saveToFile($user);
        
        // Assert
        $this->assertStringContainsString("Juan Pérez", $result);
        $this->assertStringContainsString("Guardando", $result);
    }
    
    public function testSRP_EachClassHasSingleResponsibility()
    {
        // Arrange
        $user = new User("Juan", "juan@email.com");
        $emailService = new EmailService();
        $fileManager = new UserFileManager();
        
        // Act & Assert
        $this->assertNotNull($user->getName());
        $this->assertStringContainsString("email", strtolower($emailService->sendWelcomeEmail($user)));
        $this->assertStringContainsString("archivo", strtolower($fileManager->saveToFile($user)));
    }
}
