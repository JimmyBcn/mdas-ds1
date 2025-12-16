<?php

use PHPUnit\Framework\TestCase;

require_once 'encapsulation-good.php';

/**
 * Tests para el concepto de Encapsulación en OOP
 * Valida que los datos estén protegidos y se acceda mediante métodos
 */
class EncapsulationTests extends TestCase
{
    public function testBankAccount_CanBeInstantiated()
    {
        // Arrange & Act
        $account = new BankAccount("123456", 1000.0);
        
        // Assert
        $this->assertNotNull($account, 'La cuenta bancaria debe poder ser instanciada');
    }
    
    public function testBankAccount_GetBalance_ReturnsCorrectValue()
    {
        // Arrange
        $account = new BankAccount("123456", 1000.0);
        
        // Act
        $balance = $account->getBalance();
        
        // Assert
        $this->assertEquals(1000.0, $balance, 'El balance debe ser correcto');
    }
    
    public function testBankAccount_Deposit_IncreasesBalance()
    {
        // Arrange
        $account = new BankAccount("123456", 1000.0);
        
        // Act
        $result = $account->deposit(500.0);
        
        // Assert
        $this->assertTrue($result, 'El depósito debe ser exitoso');
        $this->assertEquals(1500.0, $account->getBalance(), 'El balance debe incrementarse correctamente');
    }
    
    public function testBankAccount_Deposit_RejectsNegativeAmount()
    {
        // Arrange
        $account = new BankAccount("123456", 1000.0);
        
        // Act
        $result = $account->deposit(-100.0);
        
        // Assert
        $this->assertFalse($result, 'No debe aceptar depósitos negativos');
        $this->assertEquals(1000.0, $account->getBalance(), 'El balance no debe cambiar');
    }
    
    public function testBankAccount_Withdraw_DecreasesBalance()
    {
        // Arrange
        $account = new BankAccount("123456", 1000.0);
        
        // Act
        $result = $account->withdraw(300.0);
        
        // Assert
        $this->assertTrue($result, 'El retiro debe ser exitoso');
        $this->assertEquals(700.0, $account->getBalance(), 'El balance debe decrementarse correctamente');
    }
    
    public function testBankAccount_Withdraw_RejectsInsufficientFunds()
    {
        // Arrange
        $account = new BankAccount("123456", 1000.0);
        
        // Act
        $result = $account->withdraw(1500.0);
        
        // Assert
        $this->assertFalse($result, 'No debe permitir retiros mayores al balance');
        $this->assertEquals(1000.0, $account->getBalance(), 'El balance no debe cambiar');
    }
    
    public function testBankAccount_GetAccountNumber_ReturnsCorrectValue()
    {
        // Arrange
        $account = new BankAccount("123456", 1000.0);
        
        // Act
        $accountNumber = $account->getAccountNumber();
        
        // Assert
        $this->assertEquals("123456", $accountNumber, 'El número de cuenta debe ser correcto');
    }
}
