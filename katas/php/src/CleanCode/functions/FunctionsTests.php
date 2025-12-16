<?php

use PHPUnit\Framework\TestCase;

require_once 'functions-good.php';

/**
 * Tests para el concepto de Functions en Clean Code
 * Valida que las funciones sean pequeñas, hagan una sola cosa y estén en el mismo nivel de abstracción
 */
class FunctionsTests extends TestCase
{
    public function testUserScoreProcessor_ProcessUserScore_UpdatesScore()
    {
        // Arrange
        $user = new User("Alex", 100);
        $processor = new UserScoreProcessor();
        
        // Act
        $processor->processUserScore($user, 50, 30);
        
        // Assert
        $this->assertEquals(150, $user->score, 'El puntaje debe actualizarse correctamente (100 + 50 + 0 bonus)');
    }
    
    public function testUserScoreProcessor_ProcessUserScore_WithFastBonus_AddsBonus()
    {
        // Arrange
        $user = new User("Alex", 100);
        $processor = new UserScoreProcessor();
        
        // Act - Tiempo rápido (menos de 60 segundos) debe dar bonus
        $processor->processUserScore($user, 50, 45);
        
        // Assert
        $this->assertEquals(160, $user->score, 'El puntaje debe incluir bonus de 10 puntos por tiempo rápido (100 + 50 + 10)');
    }
    
    public function testUserScoreProcessor_ProcessUserScore_WithSlowTime_NoBonus()
    {
        // Arrange
        $user = new User("Maria", 200);
        $processor = new UserScoreProcessor();
        
        // Act - Tiempo lento (más de 60 segundos) no da bonus
        $processor->processUserScore($user, 75, 90);
        
        // Assert
        $this->assertEquals(275, $user->score, 'El puntaje no debe incluir bonus si el tiempo es lento (200 + 75 + 0)');
    }
    
    public function testUser_CanBeInstantiated()
    {
        // Arrange & Act
        $user = new User("Test User", 500);
        
        // Assert
        $this->assertNotNull($user, 'El usuario debe poder ser instanciado');
        $this->assertEquals("Test User", $user->name, 'El nombre debe ser asignado correctamente');
        $this->assertEquals(500, $user->score, 'El puntaje debe ser asignado correctamente');
    }
}
