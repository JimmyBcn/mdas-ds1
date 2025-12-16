<?php

use PHPUnit\Framework\TestCase;

require_once 'dip-good.php';

/**
 * Tests para el principio de Inversión de Dependencias (DIP)
 * Valida que las clases de alto nivel no dependan de clases de bajo nivel, sino de abstracciones
 */
class DipTests extends TestCase
{
    public function testUserService_WithMySQLDatabase()
    {
        // Arrange
        $database = new MySQLDatabase();
        $userService = new UserService($database);
        
        // Act
        $result = $userService->getUser(1);
        
        // Assert
        $this->assertNotNull($result, 'Debe poder obtener usuario desde MySQL');
        $this->assertStringContainsString("MySQL", $result, 'El resultado debe indicar que viene de MySQL');
    }
    
    public function testUserService_WithMongoDatabase()
    {
        // Arrange
        $database = new MongoDatabase();
        $userService = new UserService($database);
        
        // Act
        $result = $userService->getUser(1);
        
        // Assert
        $this->assertNotNull($result, 'Debe poder obtener usuario desde MongoDB');
        $this->assertStringContainsString("MongoDB", $result, 'El resultado debe indicar que viene de MongoDB');
    }
    
    public function testUserService_WithPostgreSQLDatabase()
    {
        // Arrange
        $database = new PostgreSQLDatabase();
        $userService = new UserService($database);
        
        // Act
        $result = $userService->getUser(1);
        
        // Assert
        $this->assertNotNull($result, 'Debe poder obtener usuario desde PostgreSQL');
        $this->assertStringContainsString("PostgreSQL", $result, 'El resultado debe indicar que viene de PostgreSQL');
    }
    
    public function testDIP_UserServiceDependsOnAbstraction()
    {
        // Arrange - UserService depende de la interfaz Database, no de implementaciones concretas
        $mysql = new MySQLDatabase();
        $mongo = new MongoDatabase();
        $postgres = new PostgreSQLDatabase();
        
        // Act - UserService puede trabajar con cualquier implementación de Database
        $service1 = new UserService($mysql);
        $service2 = new UserService($mongo);
        $service3 = new UserService($postgres);
        
        // Assert - Todas las implementaciones funcionan con UserService
        $this->assertNotNull($service1->getUser(1), 'MySQL debe funcionar');
        $this->assertNotNull($service2->getUser(1), 'MongoDB debe funcionar');
        $this->assertNotNull($service3->getUser(1), 'PostgreSQL debe funcionar');
    }
    
    public function testDIP_DatabaseImplementationsFollowContract()
    {
        // Arrange
        $mysql = new MySQLDatabase();
        $mongo = new MongoDatabase();
        
        // Act
        $mysqlUser = $mysql->getUser(1);
        $mongoUser = $mongo->getUser(1);
        
        // Assert - Todas las implementaciones cumplen el contrato de Database
        $this->assertNotNull($mysqlUser, 'MySQL debe implementar getUser');
        $this->assertNotNull($mongoUser, 'MongoDB debe implementar getUser');
    }
    
    public function testMySQLDatabase_CanBeInstantiated()
    {
        // Arrange & Act
        $database = new MySQLDatabase();
        
        // Assert
        $this->assertNotNull($database, 'MySQLDatabase debe poder ser instanciada');
        $this->assertInstanceOf(Database::class, $database, 'MySQLDatabase debe implementar Database');
    }
    
    public function testMongoDatabase_CanBeInstantiated()
    {
        // Arrange & Act
        $database = new MongoDatabase();
        
        // Assert
        $this->assertNotNull($database, 'MongoDatabase debe poder ser instanciada');
        $this->assertInstanceOf(Database::class, $database, 'MongoDatabase debe implementar Database');
    }
}
