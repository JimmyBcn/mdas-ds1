<?php

use PHPUnit\Framework\TestCase;

require_once 'naming-bad.php';
require_once 'naming-good.php';

/**
 * Tests para el concepto de Naming en Clean Code
 * Valida tanto las implementaciones malas como las buenas
 */
class Tests extends TestCase
{
    public function testUserServiceBad_ValidateUser_UnderAge_ReturnsFalse()
    {
        // Arrange
        $service = new UserService(); // De naming-bad.php
        $user = ['age' => 17, 'status' => 'ACT', 'points' => 1200];
        
        // Act
        $result = $service->validateUser($user);
        
        // Assert
        $this->assertFalse($result, 'Usuario menor de 18 años no debe ser válido');
    }
    
    public function testUserServiceBad_ValidateUser_ActiveStatus_ReturnsTrue()
    {
        // Arrange
        $service = new UserService();
        $user = ['age' => 20, 'status' => 'ACT', 'points' => 500];
        
        // Act
        $result = $service->validateUser($user);
        
        // Assert
        $this->assertTrue($result, 'Usuario activo debe ser válido');
    }
    
    public function testUserServiceBad_ValidateUser_PremiumPoints_ReturnsTrue()
    {
        // Arrange
        $service = new UserService();
        $user = ['age' => 20, 'status' => 'INA', 'points' => 1200];
        
        // Act
        $result = $service->validateUser($user);
        
        // Assert
        $this->assertTrue($result, 'Usuario con puntos premium debe ser válido');
    }
    
    public function testUserServiceBad_CalculateDiscount_VIP_Returns20Percent()
    {
        // Arrange
        $service = new UserService();
        
        // Act
        $discount = $service->calculateDiscount(100, 'VIP');
        
        // Assert
        $this->assertEquals(20.0, $discount, 'Descuento VIP debe ser 20%');
    }
    
    public function testUserServiceBad_CalculateDiscount_Regular_Returns5Percent()
    {
        // Arrange
        $service = new UserService();
        
        // Act
        $discount = $service->calculateDiscount(100, 'REG');
        
        // Assert
        $this->assertEquals(5.0, $discount, 'Descuento regular debe ser 5%');
    }
    
    public function testUserServiceBad_CalculateDiscount_UnknownType_ReturnsZero()
    {
        // Arrange
        $service = new UserService();
        
        // Act
        $discount = $service->calculateDiscount(100, 'UNKNOWN');
        
        // Assert
        $this->assertEquals(0.0, $discount, 'Tipo desconocido debe retornar 0');
    }
}

/*
INSTRUCCIONES PARA EJECUTAR LOS TESTS:

1. Instalar PHPUnit vía Composer:
   composer require --dev phpunit/phpunit ^9

2. Crear archivo phpunit.xml en la raíz del proyecto:
   <?xml version="1.0"?>
   <phpunit bootstrap="vendor/autoload.php">
       <testsuites>
           <testsuite name="Naming Tests">
               <directory>.</directory>
           </testsuite>
       </testsuites>
   </phpunit>

3. Ejecutar tests:
   ./vendor/bin/phpunit Tests.php

4. Ejecutar con detalles:
   ./vendor/bin/phpunit --verbose Tests.php

5. Ejecutar todos los tests de la carpeta:
   ./vendor/bin/phpunit .
*/
