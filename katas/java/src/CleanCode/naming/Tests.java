package CleanCode.naming;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

/**
 * Tests para el concepto de Naming en Clean Code
 * Valida tanto las implementaciones malas como las buenas
 */
public class Tests {
    
    @Test
    public void testUserServiceBad_ValidateUser_UnderAge_ReturnsFalse() {
        // Arrange
        UserService service = new UserService(); // De NamingBad.java
        User user = new User(17, "ACT", 1200);
        
        // Act
        boolean result = service.validateUser(user);
        
        // Assert
        assertFalse(result, "Usuario menor de 18 años no debe ser válido");
    }
    
    @Test
    public void testUserServiceBad_ValidateUser_ActiveStatus_ReturnsTrue() {
        // Arrange
        UserService service = new UserService();
        User user = new User(20, "ACT", 500);
        
        // Act
        boolean result = service.validateUser(user);
        
        // Assert
        assertTrue(result, "Usuario activo debe ser válido");
    }
    
    @Test
    public void testUserServiceBad_ValidateUser_PremiumPoints_ReturnsTrue() {
        // Arrange
        UserService service = new UserService();
        User user = new User(20, "INA", 1200);
        
        // Act
        boolean result = service.validateUser(user);
        
        // Assert
        assertTrue(result, "Usuario con puntos premium debe ser válido");
    }
    
    @Test
    public void testUserServiceBad_CalculateDiscount_VIP_Returns20Percent() {
        // Arrange
        UserService service = new UserService();
        
        // Act
        double discount = service.calculateDiscount(100, "VIP");
        
        // Assert
        assertEquals(20.0, discount, 0.01, "Descuento VIP debe ser 20%");
    }
    
    @Test
    public void testUserServiceBad_CalculateDiscount_Regular_Returns5Percent() {
        // Arrange
        UserService service = new UserService();
        
        // Act
        double discount = service.calculateDiscount(100, "REG");
        
        // Assert
        assertEquals(5.0, discount, 0.01, "Descuento regular debe ser 5%");
    }
    
    @Test
    public void testUserServiceGood_ConstantsAreDefined() {
        // Arrange
        UserService service = new UserService(); // De NamingGood.java
        
        // Assert - Verifica que las constantes estén bien definidas
        User user = new User(18, "ACT", 1000);
        assertTrue(service.validateUser(user), "Constantes deben estar correctamente definidas");
    }
}

/*
INSTRUCCIONES PARA EJECUTAR LOS TESTS:

1. Asegúrate de tener Maven o Gradle instalado

2. Agregar dependencia de JUnit 5 al pom.xml (Maven):
   <dependency>
       <groupId>org.junit.jupiter</groupId>
       <artifactId>junit-jupiter</artifactId>
       <version>5.9.0</version>
       <scope>test</scope>
   </dependency>

3. O agregar a build.gradle (Gradle):
   testImplementation 'org.junit.jupiter:junit-jupiter:5.9.0'

4. Ejecutar tests con Maven:
   mvn test

5. Ejecutar tests con Gradle:
   gradle test

6. Ver resultados detallados:
   mvn test -Dtest=Tests
*/
