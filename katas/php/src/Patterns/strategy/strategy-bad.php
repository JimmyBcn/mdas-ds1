<?php
// Violación del Patrón Strategy: Algoritmos codificados con cadenas if/else
// ❌ Problema: Toda la lógica de cálculo de descuentos mezclada en una clase

class DiscountCalculator {
    public function calculateDiscount(string $customerType, float $orderAmount): float {
        // ❌ Todos los algoritmos mezclados con lógica condicional
        if ($customerType === "regular") {
            // Cliente regular - sin descuento
            return 0;
        } elseif ($customerType === "premium") {
            // Cliente premium - 10% de descuento
            return $orderAmount * 0.1;
        } elseif ($customerType === "vip") {
            // Cliente VIP - 20% de descuento
            return $orderAmount * 0.2;
        } elseif ($customerType === "employee") {
            // Empleado - 50% de descuento
            return $orderAmount * 0.5;
        } else {
            throw new Exception("Tipo de cliente desconocido: $customerType");
        }
    }

    // ❌ Agregar nuevos tipos de cliente requiere modificar esta clase
    public function getSupportedCustomerTypes(): array {
        return ["regular", "premium", "vip", "employee"];
    }
}

// Uso mostrando los problemas
echo "=== Violación del Patrón Strategy ===" . PHP_EOL;

$calculator = new DiscountCalculator();
$orderAmount = 100;

echo "Monto del pedido: $$orderAmount" . PHP_EOL;
echo "Descuento regular: $" . $calculator->calculateDiscount("regular", $orderAmount) . PHP_EOL;
echo "Descuento premium: $" . $calculator->calculateDiscount("premium", $orderAmount) . PHP_EOL;
echo "Descuento VIP: $" . $calculator->calculateDiscount("vip", $orderAmount) . PHP_EOL;
echo "Descuento empleado: $" . $calculator->calculateDiscount("employee", $orderAmount) . PHP_EOL;

// ❌ Problemas:
// 1. Todos los algoritmos de descuento en una clase
// 2. Agregar nuevo tipo de cliente requiere modificar DiscountCalculator
// 3. No se pueden probar algoritmos de descuento individuales por separado
// 4. Viola el Principio Abierto/Cerrado
