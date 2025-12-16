<?php

use PHPUnit\Framework\TestCase;

require_once 'abstraction-good.php';

/**
 * Tests para el concepto de Abstracción en OOP
 * Valida que la abstracción oculte detalles de implementación
 */
class AbstractionTests extends TestCase
{
    public function testEmailSender_CanBeInstantiated()
    {
        // Arrange & Act
        $sender = new EmailSender("usuario@gmail.com", "password123");
        
        // Assert
        $this->assertNotNull($sender, 'El EmailSender debe poder ser instanciado');
    }
    
    public function testEmailSender_SendsEmailSuccessfully()
    {
        // Arrange
        $sender = new EmailSender("usuario@gmail.com", "password123");
        
        // Act
        $result = $sender->sendEmail("destinatario@gmail.com", "Hola", "Mensaje de prueba");
        
        // Assert
        $this->assertTrue($result, 'El email debe enviarse exitosamente');
    }
    
    public function testEmailSender_FailsWithEmptyCredentials()
    {
        // Arrange
        $sender = new EmailSender("", "");
        
        // Act
        $result = $sender->sendEmail("destinatario@gmail.com", "Hola", "Mensaje");
        
        // Assert
        $this->assertFalse($result, 'Debe fallar al enviar email con credenciales vacías');
    }
    
    public function testEmailSender_AbstractsComplexity()
    {
        // Arrange
        $sender = new EmailSender("usuario@gmail.com", "password123");
        
        // Act - Un solo método simple abstrae toda la complejidad
        $result = $sender->sendEmail("test@test.com", "Test", "Test body");
        
        // Assert
        $this->assertTrue($result, 'La abstracción debe simplificar el proceso de envío de email');
    }
}
