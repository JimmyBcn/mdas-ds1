using System;
using System.Collections.Generic;
using System.Linq;

// Cumplimiento de Encapsulamiento: Datos protegidos con validación
// ✅ Solución: Propiedades privadas y métodos controlados

public class BankAccount
{
  // ✅ Propiedades privadas - no accesibles directamente
  private decimal balance;
  private readonly string accountNumber; // readonly previene modificación
  private bool isActive;
  private List<string> transactionHistory;

  public BankAccount(string accountNumber, decimal initialBalance)
  {
    // ✅ Validación en constructor
    if (initialBalance < 0)
    {
      throw new Exception("El balance inicial no puede ser negativo");
    }
    if (string.IsNullOrEmpty(accountNumber))
    {
      throw new Exception("Número de cuenta inválido");
    }

    this.accountNumber = accountNumber;
    this.balance = initialBalance;
    this.isActive = true;
    this.transactionHistory = new List<string>();
  }

  // ✅ Getter - solo lectura del balance
  public decimal GetBalance()
  {
    return balance;
  }

  // ✅ Getter - solo lectura del número de cuenta
  public string GetAccountNumber()
  {
    return accountNumber;
  }

  // ✅ Getter - estado de la cuenta
  public bool CheckIfActive()
  {
    return isActive;
  }

  // ✅ Método con validación de negocio
  public bool Deposit(decimal amount)
  {
    if (!isActive)
    {
      Console.WriteLine("Error: Cuenta inactiva");
      return false;
    }
    if (amount <= 0)
    {
      Console.WriteLine("Error: El monto debe ser positivo");
      return false;
    }

    balance += amount;
    transactionHistory.Add($"Depósito: ${amount}");
    Console.WriteLine($"Depósito exitoso: ${amount}. Nuevo balance: ${balance}");
    return true;
  }

  // ✅ Método con validación de fondos suficientes
  public bool Withdraw(decimal amount)
  {
    if (!isActive)
    {
      Console.WriteLine("Error: Cuenta inactiva");
      return false;
    }
    if (amount <= 0)
    {
      Console.WriteLine("Error: El monto debe ser positivo");
      return false;
    }
    if (amount > balance)
    {
      Console.WriteLine("Error: Fondos insuficientes");
      return false;
    }

    balance -= amount;
    transactionHistory.Add($"Retiro: ${amount}");
    Console.WriteLine($"Retiro exitoso: ${amount}. Nuevo balance: ${balance}");
    return true;
  }

  // ✅ Método controlado para cerrar cuenta
  public bool CloseAccount()
  {
    if (balance > 0)
    {
      Console.WriteLine("Error: Debe retirar todos los fondos antes de cerrar la cuenta");
      return false;
    }
    isActive = false;
    Console.WriteLine("Cuenta cerrada exitosamente");
    return true;
  }

  // ✅ Copia del historial, no referencia directa
  public List<string> GetTransactionHistory()
  {
    return transactionHistory.ToList(); // Copia defensiva
  }
}

// ✅ Con encapsulamiento, todas las reglas son respetadas
Console.WriteLine("=== Cumplimiento de Encapsulamiento ===");

var account = new BankAccount("001", 1000);
Console.WriteLine($"Balance inicial: ${account.GetBalance()}");

// ✅ No se puede modificar directamente - solo mediante métodos
// account.balance = -5000; // ❌ Error: 'balance' es privado

// ✅ Intento de retiro excesivo es rechazado
account.Withdraw(2000); // "Error: Fondos insuficientes"

// ✅ Depósito con validación
account.Deposit(500); // Funciona correctamente

// ✅ Retiro válido
account.Withdraw(300); // Funciona correctamente

Console.WriteLine($"Balance final: ${account.GetBalance()}");

// ✅ No se puede cerrar cuenta con fondos
account.CloseAccount(); // "Error: Debe retirar todos los fondos..."
