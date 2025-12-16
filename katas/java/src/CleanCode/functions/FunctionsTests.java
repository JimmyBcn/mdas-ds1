package CleanCode.functions;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

/**
 * Tests para el concepto de Functions en Clean Code
 * Valida que las funciones sean pequeñas, hagan una sola cosa y estén en el mismo nivel de abstracción
 */
public class FunctionsTests {
    
    @Test
    public void testUserScoreProcessor_ProcessUserScore_UpdatesScore() {
        // Arrange
        User user = new User("Alex", 100);
        UserScoreProcessor processor = new UserScoreProcessor();
        
        // Act
        processor.processUserScore(user, 50, 30);
        
        // Assert
        assertEquals(150, user.score, "El puntaje debe actualizarse correctamente (100 + 50 + 0 bonus)");
    }
    
    @Test
    public void testUserScoreProcessor_ProcessUserScore_WithFastBonus_AddsBonus() {
        // Arrange
        User user = new User("Alex", 100);
        UserScoreProcessor processor = new UserScoreProcessor();
        
        // Act - Tiempo rápido (menos de 60 segundos) debe dar bonus
        processor.processUserScore(user, 50, 45);
        
        // Assert
        assertEquals(160, user.score, "El puntaje debe incluir bonus de 10 puntos por tiempo rápido (100 + 50 + 10)");
    }
    
    @Test
    public void testUserScoreProcessor_ProcessUserScore_WithSlowTime_NoBonus() {
        // Arrange
        User user = new User("Maria", 200);
        UserScoreProcessor processor = new UserScoreProcessor();
        
        // Act - Tiempo lento (más de 60 segundos) no da bonus
        processor.processUserScore(user, 75, 90);
        
        // Assert
        assertEquals(275, user.score, "El puntaje no debe incluir bonus si el tiempo es lento (200 + 75 + 0)");
    }
    
    @Test
    public void testUser_CanBeInstantiated() {
        // Arrange & Act
        User user = new User("Test User", 500);
        
        // Assert
        assertNotNull(user, "El usuario debe poder ser instanciado");
        assertEquals("Test User", user.name, "El nombre debe ser asignado correctamente");
        assertEquals(500, user.score, "El puntaje debe ser asignado correctamente");
    }
}
