package OOP.encapsulation;

import java.util.*;

// Violación de Encapsulamiento: Datos expuestos sin protección
// ❌ Problema: Cualquiera puede modificar el estado sin validación

public class EncapsulationBad {
    public static void main(String[] args) {
        System.out.println("=== Violación de Encapsulamiento ===");
        
        BankAccount account = new BankAccount("001", 1000);
        System.out.println("Balance inicial: $" + account.balance);
        
        // ❌ Modificación directa sin validación
        account.balance = -5000; // ¡Balance negativo!
        System.out.println("Balance después de modificación directa: $" + account.balance);
        
        // ❌ Cambiar número de cuenta directamente
        account.accountNumber = "999"; // ¡No debería ser posible!
        System.out.println("Número de cuenta modificado: " + account.accountNumber);
        
        // ❌ Desactivar cuenta sin proceso adecuado
        account.isActive = false; // Bypass de reglas de negocio
        System.out.println("Cuenta activa: " + account.isActive);
        
        // ❌ Modificar historial directamente
        account.transactionHistory.clear(); // ¡Borrar evidencia!
        System.out.println("Historial manipulado: " + account.transactionHistory.size() + " transacciones");
        
        // ❌ Retiro sin validación de fondos suficientes
        account.balance = 100;
        account.withdraw(1000); // ¡Retiro mayor al balance!
        System.out.println("Balance después de retiro excesivo: $" + account.balance);
    }
}

class BankAccount {
    // ❌ Propiedades públicas permiten acceso directo sin control
    public double balance;
    public String accountNumber;
    public boolean isActive;
    public List<String> transactionHistory;
    
    public BankAccount(String accountNumber, double initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.isActive = true;
        this.transactionHistory = new ArrayList<>();
    }
    
    // ❌ Método sin validaciones
    public void deposit(double amount) {
        balance += amount;
        transactionHistory.add("Depósito: " + amount);
    }
    
    // ❌ Método sin validaciones
    public void withdraw(double amount) {
        balance -= amount;
        transactionHistory.add("Retiro: " + amount);
    }
}
