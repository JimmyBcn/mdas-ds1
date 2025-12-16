package OOP.encapsulation;

import java.util.*;

// Cumplimiento de Encapsulamiento: Datos protegidos con validación
// ✅ Solución: Propiedades privadas y métodos controlados

public class EncapsulationGood {
    public static void main(String[] args) {
        System.out.println("=== Cumplimiento de Encapsulamiento ===");
        
        BankAccount account = new BankAccount("001", 1000);
        System.out.println("Balance inicial: $" + account.getBalance());
        
        // ✅ No se puede modificar directamente - solo mediante métodos
        // account.balance = -5000; // ❌ Error de compilación: balance is private
        
        // ✅ Intento de retiro excesivo es rechazado
        account.withdraw(2000); // "Error: Fondos insuficientes"
        
        // ✅ Depósito con validación
        account.deposit(500); // Funciona correctamente
        
        // ✅ Retiro válido
        account.withdraw(300); // Funciona correctamente
        
        System.out.println("Balance final: $" + account.getBalance());
        
        // ✅ No se puede cerrar cuenta con fondos
        account.closeAccount(); // "Error: Debe retirar todos los fondos..."
    }
}

class BankAccount {
    // ✅ Propiedades privadas - no accesibles directamente
    private double balance;
    private final String accountNumber; // final previene modificación
    private boolean isActive;
    private List<String> transactionHistory;
    
    public BankAccount(String accountNumber, double initialBalance) {
        // ✅ Validación en constructor
        if (initialBalance < 0) {
            throw new IllegalArgumentException("El balance inicial no puede ser negativo");
        }
        if (accountNumber == null || accountNumber.isEmpty()) {
            throw new IllegalArgumentException("Número de cuenta inválido");
        }
        
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.isActive = true;
        this.transactionHistory = new ArrayList<>();
    }
    
    // ✅ Getter - solo lectura del balance
    public double getBalance() {
        return balance;
    }
    
    // ✅ Getter - solo lectura del número de cuenta
    public String getAccountNumber() {
        return accountNumber;
    }
    
    // ✅ Getter - estado de la cuenta
    public boolean isActive() {
        return isActive;
    }
    
    // ✅ Método con validación de negocio
    public boolean deposit(double amount) {
        if (!isActive) {
            System.out.println("Error: Cuenta inactiva");
            return false;
        }
        if (amount <= 0) {
            System.out.println("Error: El monto debe ser positivo");
            return false;
        }
        
        balance += amount;
        transactionHistory.add("Depósito: $" + amount);
        System.out.println("Depósito exitoso: $" + amount + ". Nuevo balance: $" + balance);
        return true;
    }
    
    // ✅ Método con validación de fondos suficientes
    public boolean withdraw(double amount) {
        if (!isActive) {
            System.out.println("Error: Cuenta inactiva");
            return false;
        }
        if (amount <= 0) {
            System.out.println("Error: El monto debe ser positivo");
            return false;
        }
        if (amount > balance) {
            System.out.println("Error: Fondos insuficientes");
            return false;
        }
        
        balance -= amount;
        transactionHistory.add("Retiro: $" + amount);
        System.out.println("Retiro exitoso: $" + amount + ". Nuevo balance: $" + balance);
        return true;
    }
    
    // ✅ Método controlado para cerrar cuenta
    public boolean closeAccount() {
        if (balance > 0) {
            System.out.println("Error: Debe retirar todos los fondos antes de cerrar la cuenta");
            return false;
        }
        isActive = false;
        System.out.println("Cuenta cerrada exitosamente");
        return true;
    }
    
    // ✅ Copia del historial, no referencia directa
    public List<String> getTransactionHistory() {
        return new ArrayList<>(transactionHistory); // Copia defensiva
    }
}
