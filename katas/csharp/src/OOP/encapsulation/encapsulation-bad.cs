using System;
using System.Collections.Generic;

// Violación de Encapsulamiento: Datos expuestos sin protección
// ❌ Problema: Cualquiera puede modificar el estado sin validación

public class BankAccount
{
  // ❌ Propiedades públicas permiten acceso directo sin control
  public decimal Balance;
  public string AccountNumber;
  public bool IsActive;
  public List<string> TransactionHistory;

  public BankAccount(string accountNumber, decimal initialBalance)
  {
    AccountNumber = accountNumber;
    Balance = initialBalance;
    IsActive = true;
    TransactionHistory = new List<string>();
  }

  // ❌ Método sin validaciones
  public void Deposit(decimal amount)
  {
    Balance += amount;
    TransactionHistory.Add($"Depósito: {amount}");
  }

  // ❌ Método sin validaciones
  public void Withdraw(decimal amount)
  {
    Balance -= amount;
    TransactionHistory.Add($"Retiro: {amount}");
  }
}

// ❌ Sin encapsulamiento, cualquiera puede romper las reglas
Console.WriteLine("=== Violación de Encapsulamiento ===");

var account = new BankAccount("001", 1000);
Console.WriteLine($"Balance inicial: ${account.Balance}");

// ❌ Modificación directa sin validación
account.Balance = -5000; // ¡Balance negativo!
Console.WriteLine($"Balance después de modificación directa: ${account.Balance}");

// ❌ Cambiar número de cuenta directamente
account.AccountNumber = "999"; // ¡No debería ser posible!
Console.WriteLine($"Número de cuenta modificado: {account.AccountNumber}");

// ❌ Desactivar cuenta sin proceso adecuado
account.IsActive = false; // Bypass de reglas de negocio
Console.WriteLine($"Cuenta activa: {account.IsActive}");

// ❌ Modificar historial directamente
account.TransactionHistory = new List<string>(); // ¡Borrar evidencia!
Console.WriteLine($"Historial manipulado: {account.TransactionHistory.Count} transacciones");

// ❌ Retiro sin validación de fondos suficientes
account.Balance = 100;
account.Withdraw(1000); // ¡Retiro mayor al balance!
Console.WriteLine($"Balance después de retiro excesivo: ${account.Balance}");
