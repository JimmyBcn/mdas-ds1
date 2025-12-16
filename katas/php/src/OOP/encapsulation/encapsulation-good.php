<?php
// Cumplimiento de Encapsulamiento: Datos protegidos con validación
// ✅ Solución: Propiedades privadas y métodos controlados

class BankAccount {
    // ✅ Propiedades privadas - no accesibles directamente
    private float $balance;
    private readonly string $accountNumber; // readonly previene modificación
    private bool $isActive;
    private array $transactionHistory;

    public function __construct(string $accountNumber, float $initialBalance) {
        // ✅ Validación en constructor
        if ($initialBalance < 0) {
            throw new Exception("El balance inicial no puede ser negativo");
        }
        if (!$accountNumber || strlen($accountNumber) === 0) {
            throw new Exception("Número de cuenta inválido");
        }

        $this->accountNumber = $accountNumber;
        $this->balance = $initialBalance;
        $this->isActive = true;
        $this->transactionHistory = [];
    }

    // ✅ Getter - solo lectura del balance
    public function getBalance(): float {
        return $this->balance;
    }

    // ✅ Getter - solo lectura del número de cuenta
    public function getAccountNumber(): string {
        return $this->accountNumber;
    }

    // ✅ Getter - estado de la cuenta
    public function checkIfActive(): bool {
        return $this->isActive;
    }

    // ✅ Método con validación de negocio
    public function deposit(float $amount): bool {
        if (!$this->isActive) {
            echo "Error: Cuenta inactiva" . PHP_EOL;
            return false;
        }
        if ($amount <= 0) {
            echo "Error: El monto debe ser positivo" . PHP_EOL;
            return false;
        }

        $this->balance += $amount;
        $this->transactionHistory[] = "Depósito: $$amount";
        echo "Depósito exitoso: $$amount. Nuevo balance: $" . $this->balance . PHP_EOL;
        return true;
    }

    // ✅ Método con validación de fondos suficientes
    public function withdraw(float $amount): bool {
        if (!$this->isActive) {
            echo "Error: Cuenta inactiva" . PHP_EOL;
            return false;
        }
        if ($amount <= 0) {
            echo "Error: El monto debe ser positivo" . PHP_EOL;
            return false;
        }
        if ($amount > $this->balance) {
            echo "Error: Fondos insuficientes" . PHP_EOL;
            return false;
        }

        $this->balance -= $amount;
        $this->transactionHistory[] = "Retiro: $$amount";
        echo "Retiro exitoso: $$amount. Nuevo balance: $" . $this->balance . PHP_EOL;
        return true;
    }

    // ✅ Método controlado para cerrar cuenta
    public function closeAccount(): bool {
        if ($this->balance > 0) {
            echo "Error: Debe retirar todos los fondos antes de cerrar la cuenta" . PHP_EOL;
            return false;
        }
        $this->isActive = false;
        echo "Cuenta cerrada exitosamente" . PHP_EOL;
        return true;
    }

    // ✅ Copia del historial, no referencia directa
    public function getTransactionHistory(): array {
        return [...$this->transactionHistory]; // Copia defensiva
    }
}

// ✅ Con encapsulamiento, todas las reglas son respetadas
echo "=== Cumplimiento de Encapsulamiento ===" . PHP_EOL;

$account = new BankAccount("001", 1000);
echo "Balance inicial: $" . $account->getBalance() . PHP_EOL;

// ✅ No se puede modificar directamente - solo mediante métodos
// $account->balance = -5000; // ❌ Error: Cannot access private property

// ✅ Intento de retiro excesivo es rechazado
$account->withdraw(2000); // "Error: Fondos insuficientes"

// ✅ Depósito con validación
$account->deposit(500); // Funciona correctamente

// ✅ Retiro válido
$account->withdraw(300); // Funciona correctamente

echo "Balance final: $" . $account->getBalance() . PHP_EOL;

// ✅ No se puede cerrar cuenta con fondos
$account->closeAccount(); // "Error: Debe retirar todos los fondos..."
