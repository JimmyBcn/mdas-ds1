<?php
// Implementación del Patrón Strategy: Clases de algoritmos separadas que pueden intercambiarse
// ✅ Solución: Cada algoritmo de descuento en su propia clase

// ✅ Interfaz de estrategia define comportamiento común
interface DiscountStrategy {
    public function calculateDiscount(float $orderAmount): float;
    public function getDescription(): string;
}

// ✅ Cada algoritmo en su propia clase
class RegularCustomerDiscount implements DiscountStrategy {
    public function calculateDiscount(float $orderAmount): float {
        return 0; // Sin descuento
    }

    public function getDescription(): string {
        return "Cliente regular - sin descuento";
    }
}

class PremiumCustomerDiscount implements DiscountStrategy {
    public function calculateDiscount(float $orderAmount): float {
        return $orderAmount * 0.1; // 10% de descuento
    }

    public function getDescription(): string {
        return "Cliente premium - 10% de descuento";
    }
}

class VIPCustomerDiscount implements DiscountStrategy {
    public function calculateDiscount(float $orderAmount): float {
        return $orderAmount * 0.2; // 20% de descuento
    }

    public function getDescription(): string {
        return "Cliente VIP - 20% de descuento";
    }
}

class EmployeeDiscount implements DiscountStrategy {
    public function calculateDiscount(float $orderAmount): float {
        return $orderAmount * 0.5; // 50% de descuento
    }

    public function getDescription(): string {
        return "Empleado - 50% de descuento";
    }
}

// ✅ Clase contexto usa estrategia sin saber cuál es
class DiscountCalculator {
    private DiscountStrategy $strategy;

    public function __construct(DiscountStrategy $strategy) {
        $this->strategy = $strategy;
    }

    // ✅ Puede cambiar estrategia en tiempo de ejecución
    public function setStrategy(DiscountStrategy $strategy): void {
        $this->strategy = $strategy;
    }

    public function calculateDiscount(float $orderAmount): float {
        return $this->strategy->calculateDiscount($orderAmount);
    }

    public function getDiscountInfo(): string {
        return $this->strategy->getDescription();
    }
}

// ✅ Uso - las estrategias pueden intercambiarse fácilmente
echo "=== Solución con Patrón Strategy ===" . PHP_EOL;

$orderAmount = 100;
echo "Monto del pedido: $$orderAmount" . PHP_EOL . PHP_EOL;

// ✅ Fácil cambiar entre diferentes estrategias de descuento
$calculator = new DiscountCalculator(new RegularCustomerDiscount());
echo $calculator->getDiscountInfo() . ": $" . $calculator->calculateDiscount($orderAmount) . PHP_EOL;

$calculator->setStrategy(new PremiumCustomerDiscount());
echo $calculator->getDiscountInfo() . ": $" . $calculator->calculateDiscount($orderAmount) . PHP_EOL;

$calculator->setStrategy(new VIPCustomerDiscount());
echo $calculator->getDiscountInfo() . ": $" . $calculator->calculateDiscount($orderAmount) . PHP_EOL;

$calculator->setStrategy(new EmployeeDiscount());
echo $calculator->getDiscountInfo() . ": $" . $calculator->calculateDiscount($orderAmount) . PHP_EOL;

// ✅ ¡Agregar nueva estrategia es fácil - solo crear nueva clase!
class StudentDiscount implements DiscountStrategy {
    public function calculateDiscount(float $orderAmount): float {
        return $orderAmount * 0.15; // 15% de descuento
    }

    public function getDescription(): string {
        return "Estudiante - 15% de descuento";
    }
}

$calculator->setStrategy(new StudentDiscount());
echo $calculator->getDiscountInfo() . ": $" . $calculator->calculateDiscount($orderAmount) . PHP_EOL;
