<?php
// Violación de Clean Code: Mal Nombrado
// ❌ Problemas: Nombres sin intención, información falsa, difícil pronunciar, codificaciones

// ❌ Sin intención clara
$d = 0; // ¿Qué es 'd'?
$x = ""; // ¿Qué es 'x'?
$arr = [1, 2, 3]; // ¿Array de qué?

// ❌ Información falsa
$userList = new stdClass(); // ¡No es una List, es un objeto!
$accountsArray = (object)['name' => 'John', 'balance' => 1000]; // ¡No es un array!

// ❌ Difícil de pronunciar
$yyyymmdstr = "20251102"; // ¿Cómo pronuncias esto?
$genymdhms = new DateTime(); // ¿Gen-y-m-d-h-m-s?

// ❌ Codificaciones innecesarias (notación húngara)
$strFirstName = "John"; // El 'str' es redundante en PHP
$intAge = 25; // El 'int' es redundante
$boolIsActive = true; // El 'bool' es redundante

// ❌ Números y strings mágicos
class UserService {
    public function validateUser(object $user): bool {
        if ($user->age < 18) { // ❌ ¿Qué significa 18?
            return false;
        }

        if ($user->status === "ACT") { // ❌ ¿Qué significa "ACT"?
            return true;
        }

        if ($user->points > 1000) { // ❌ ¿Por qué 1000?
            return true;
        }

        return false;
    }

    public function calculateDiscount(float $total, string $type): float {
        if ($type === "VIP") {
            return $total * 0.2; // ❌ ¿Qué significa 0.2?
        } elseif ($type === "REG") {
            return $total * 0.05; // ❌ ¿Qué significa 0.05?
        }
        return 0;
    }
}

// Uso
echo "=== Violación de Nombrado en Clean Code ===" . PHP_EOL;

$d = 86400; // ¿Segundos? ¿Milisegundos? ¿Días?
$x = "usuario@email.com";

$service = new UserService();
$user = (object)['age' => 20, 'status' => 'ACT', 'points' => 1200];
echo "Usuario válido: " . ($service->validateUser($user) ? "true" : "false") . PHP_EOL;
echo "Descuento: " . $service->calculateDiscount(100, "VIP") . PHP_EOL;
