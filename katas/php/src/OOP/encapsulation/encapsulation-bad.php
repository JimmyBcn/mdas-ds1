<?php
// Violación de Encapsulamiento: Datos expuestos sin protección
// ❌ Problema: Cualquiera puede modificar el estado sin validación

class BankAccount {
    // ❌ Propiedades públicas permiten acceso directo sin control
    public float $balance;
    public string $accountNumber;
    public bool $isActive;
    public array $transactionHistory;

    public function __construct(string $accountNumber, float $initialBalance) {
        $this->accountNumber = $accountNumber;
        $this->balance = $initialBalance;
        $this->isActive = true;
        $this->transactionHistory = [];
    }

    // ❌ Método sin validaciones
    public function deposit(float $amount): void {
        $this->balance += $amount;
        $this->transactionHistory[] = "Depósito: $amount";
    }

    // ❌ Método sin validaciones
    public function withdraw(float $amount): void {
        $this->balance -= $amount;
        $this->transactionHistory[] = "Retiro: $amount";
    }
}

// ❌ Sin encapsulamiento, cualquiera puede romper las reglas
echo "=== Violación de Encapsulamiento ===" . PHP_EOL;

$account = new BankAccount("001", 1000);
echo "Balance inicial: $" . $account->balance . PHP_EOL;

// ❌ Modificación directa sin validación
$account->balance = -5000; // ¡Balance negativo!
echo "Balance después de modificación directa: $" . $account->balance . PHP_EOL;

// ❌ Cambiar número de cuenta directamente
$account->accountNumber = "999"; // ¡No debería ser posible!
echo "Número de cuenta modificado: " . $account->accountNumber . PHP_EOL;

// ❌ Desactivar cuenta sin proceso adecuado
$account->isActive = false; // Bypass de reglas de negocio
echo "Cuenta activa: " . ($account->isActive ? "true" : "false") . PHP_EOL;

// ❌ Modificar historial directamente
$account->transactionHistory = []; // ¡Borrar evidencia!
echo "Historial manipulado: " . count($account->transactionHistory) . " transacciones" . PHP_EOL;

// ❌ Retiro sin validación de fondos suficientes
$account->balance = 100;
$account->withdraw(1000); // ¡Retiro mayor al balance!
echo "Balance después de retiro excesivo: $" . $account->balance . PHP_EOL;
