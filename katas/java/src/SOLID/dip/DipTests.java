package SOLID.dip;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

/**
 * Tests para el principio de Inversión de Dependencias (DIP)
 * Valida que las clases de alto nivel no dependan de clases de bajo nivel, sino de abstracciones
 */
public class DipTests {
    
    @Test
    public void testUserService_WithMySQLDatabase() {
        // Arrange
        Database database = new MySQLDatabase();
        UserService userService = new UserService(database);
        
        // Act
        String result = userService.getUser(1);
        
        // Assert
        assertNotNull(result, "Debe poder obtener usuario desde MySQL");
        assertTrue(result.contains("MySQL"), "El resultado debe indicar que viene de MySQL");
    }
    
    @Test
    public void testUserService_WithMongoDatabase() {
        // Arrange
        Database database = new MongoDatabase();
        UserService userService = new UserService(database);
        
        // Act
        String result = userService.getUser(1);
        
        // Assert
        assertNotNull(result, "Debe poder obtener usuario desde MongoDB");
        assertTrue(result.contains("MongoDB"), "El resultado debe indicar que viene de MongoDB");
    }
    
    @Test
    public void testUserService_WithPostgreSQLDatabase() {
        // Arrange
        Database database = new PostgreSQLDatabase();
        UserService userService = new UserService(database);
        
        // Act
        String result = userService.getUser(1);
        
        // Assert
        assertNotNull(result, "Debe poder obtener usuario desde PostgreSQL");
        assertTrue(result.contains("PostgreSQL"), "El resultado debe indicar que viene de PostgreSQL");
    }
    
    @Test
    public void testDIP_UserServiceDependsOnAbstraction() {
        // Arrange - UserService depende de la interfaz Database, no de implementaciones concretas
        Database mysql = new MySQLDatabase();
        Database mongo = new MongoDatabase();
        Database postgres = new PostgreSQLDatabase();
        
        // Act - UserService puede trabajar con cualquier implementación de Database
        UserService service1 = new UserService(mysql);
        UserService service2 = new UserService(mongo);
        UserService service3 = new UserService(postgres);
        
        // Assert - Todas las implementaciones funcionan con UserService
        assertNotNull(service1.getUser(1), "MySQL debe funcionar");
        assertNotNull(service2.getUser(1), "MongoDB debe funcionar");
        assertNotNull(service3.getUser(1), "PostgreSQL debe funcionar");
    }
    
    @Test
    public void testDIP_DatabaseImplementationsFollowContract() {
        // Arrange
        Database mysql = new MySQLDatabase();
        Database mongo = new MongoDatabase();
        
        // Act
        String mysqlUser = mysql.getUser(1);
        String mongoUser = mongo.getUser(1);
        
        // Assert - Todas las implementaciones cumplen el contrato de Database
        assertNotNull(mysqlUser, "MySQL debe implementar getUser");
        assertNotNull(mongoUser, "MongoDB debe implementar getUser");
    }
    
    @Test
    public void testMySQLDatabase_CanBeInstantiated() {
        // Arrange & Act
        MySQLDatabase database = new MySQLDatabase();
        
        // Assert
        assertNotNull(database, "MySQLDatabase debe poder ser instanciada");
        assertTrue(database instanceof Database, "MySQLDatabase debe implementar Database");
    }
    
    @Test
    public void testMongoDatabase_CanBeInstantiated() {
        // Arrange & Act
        MongoDatabase database = new MongoDatabase();
        
        // Assert
        assertNotNull(database, "MongoDatabase debe poder ser instanciada");
        assertTrue(database instanceof Database, "MongoDatabase debe implementar Database");
    }
}
