package OOP.encapsulation;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

/**
 * Tests para el concepto de Encapsulación en OOP
 * Valida que los datos estén protegidos y se acceda mediante métodos
 */
public class EncapsulationTests {
    
    @Test
    public void testBankAccount_CanBeInstantiated() {
        // Arrange & Act
        BankAccount account = new BankAccount("123456", 1000.0);
        
        // Assert
        assertNotNull(account, "La cuenta bancaria debe poder ser instanciada");
    }
    
    @Test
    public void testBankAccount_GetBalance_ReturnsCorrectValue() {
        // Arrange
        BankAccount account = new BankAccount("123456", 1000.0);
        
        // Act
        double balance = account.getBalance();
        
        // Assert
        assertEquals(1000.0, balance, 0.01, "El balance debe ser correcto");
    }
    
    @Test
    public void testBankAccount_Deposit_IncreasesBalance() {
        // Arrange
        BankAccount account = new BankAccount("123456", 1000.0);
        
        // Act
        boolean result = account.deposit(500.0);
        
        // Assert
        assertTrue(result, "El depósito debe ser exitoso");
        assertEquals(1500.0, account.getBalance(), 0.01, "El balance debe incrementarse correctamente");
    }
    
    @Test
    public void testBankAccount_Deposit_RejectsNegativeAmount() {
        // Arrange
        BankAccount account = new BankAccount("123456", 1000.0);
        
        // Act
        boolean result = account.deposit(-100.0);
        
        // Assert
        assertFalse(result, "No debe aceptar depósitos negativos");
        assertEquals(1000.0, account.getBalance(), 0.01, "El balance no debe cambiar");
    }
    
    @Test
    public void testBankAccount_Withdraw_DecreasesBalance() {
        // Arrange
        BankAccount account = new BankAccount("123456", 1000.0);
        
        // Act
        boolean result = account.withdraw(300.0);
        
        // Assert
        assertTrue(result, "El retiro debe ser exitoso");
        assertEquals(700.0, account.getBalance(), 0.01, "El balance debe decrementarse correctamente");
    }
    
    @Test
    public void testBankAccount_Withdraw_RejectsInsufficientFunds() {
        // Arrange
        BankAccount account = new BankAccount("123456", 1000.0);
        
        // Act
        boolean result = account.withdraw(1500.0);
        
        // Assert
        assertFalse(result, "No debe permitir retiros mayores al balance");
        assertEquals(1000.0, account.getBalance(), 0.01, "El balance no debe cambiar");
    }
    
    @Test
    public void testBankAccount_GetAccountNumber_ReturnsCorrectValue() {
        // Arrange
        BankAccount account = new BankAccount("123456", 1000.0);
        
        // Act
        String accountNumber = account.getAccountNumber();
        
        // Assert
        assertEquals("123456", accountNumber, "El número de cuenta debe ser correcto");
    }
}
