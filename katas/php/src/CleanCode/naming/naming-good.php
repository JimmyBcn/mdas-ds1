<?php
// Cumplimiento de Clean Code: Buen Nombrado
// ✅ Solución: Nombres con intención, sin información falsa, pronunciables, sin codificaciones

// ✅ Nombres con intención clara
$secondsInDay = 0;
$userEmailAddress = "";
$productPrices = [1, 2, 3];

// ✅ Sin información falsa
$activeUsers = new stdClass(); // Correcto: es un objeto
$userAccount = (object)['name' => 'John', 'balance' => 1000]; // Correcto: es un objeto

// ✅ Pronunciables
$currentDateString = "20251102";
$generatedTimestamp = new DateTime();

// ✅ Sin codificaciones innecesarias
$firstName = "John"; // PHP ya sabe que es string
$age = 25; // PHP ya sabe que es number
$isActive = true; // PHP ya sabe que es boolean

// ✅ Constantes con nombre en lugar de números/strings mágicos
class UserService {
    // Constantes descriptivas
    private const MINIMUM_AGE = 18;
    private const ACTIVE_STATUS = "ACT";
    private const PREMIUM_POINTS_THRESHOLD = 1000;

    private const VIP_CUSTOMER_TYPE = "VIP";
    private const REGULAR_CUSTOMER_TYPE = "REG";

    private const VIP_DISCOUNT_RATE = 0.2;
    private const REGULAR_DISCOUNT_RATE = 0.05;

    public function validateUser(object $user): bool {
        if ($user->age < self::MINIMUM_AGE) { // ✅ Claro: edad mínima requerida
            return false;
        }

        if ($user->status === self::ACTIVE_STATUS) { // ✅ Claro: estado activo
            return true;
        }

        if ($user->points > self::PREMIUM_POINTS_THRESHOLD) { // ✅ Claro: umbral de puntos premium
            return true;
        }

        return false;
    }

    public function calculateDiscount(float $totalAmount, string $customerType): float {
        if ($customerType === self::VIP_CUSTOMER_TYPE) {
            return $totalAmount * self::VIP_DISCOUNT_RATE; // ✅ Claro: tasa de descuento VIP
        } elseif ($customerType === self::REGULAR_CUSTOMER_TYPE) {
            return $totalAmount * self::REGULAR_DISCOUNT_RATE; // ✅ Claro: tasa de descuento regular
        }
        return 0;
    }
}

// Uso
echo "=== Cumplimiento de Nombrado en Clean Code ===" . PHP_EOL;

$secondsInDay = 86400; // ✅ Claro: segundos en un día
$userEmailAddress = "usuario@email.com"; // ✅ Claro: dirección de email del usuario

$userService = new UserService();
$validUser = (object)['age' => 20, 'status' => 'ACT', 'points' => 1200];
echo "Usuario válido: " . ($userService->validateUser($validUser) ? "true" : "false") . PHP_EOL;
echo "Descuento: " . $userService->calculateDiscount(100, "VIP") . PHP_EOL;
