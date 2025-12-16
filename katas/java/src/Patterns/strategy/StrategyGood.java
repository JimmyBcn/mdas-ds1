package Patterns.strategy;

// Implementación del Patrón Strategy: Clases de algoritmos separadas que pueden intercambiarse
// ✅ Solución: Cada algoritmo de descuento en su propia clase

public class StrategyGood {
    public static void main(String[] args) {
        // ✅ Uso - las estrategias pueden intercambiarse fácilmente
        System.out.println("=== Solución con Patrón Strategy ===");

        double orderAmount = 100;
        System.out.println("Monto del pedido: $" + orderAmount + "\n");

        // ✅ Fácil cambiar entre diferentes estrategias de descuento
        DiscountCalculator calculator = new DiscountCalculator(new RegularCustomerDiscount());
        System.out.println(calculator.getDiscountInfo() + ": $" + calculator.calculateDiscount(orderAmount));

        calculator.setStrategy(new PremiumCustomerDiscount());
        System.out.println(calculator.getDiscountInfo() + ": $" + calculator.calculateDiscount(orderAmount));

        calculator.setStrategy(new VIPCustomerDiscount());
        System.out.println(calculator.getDiscountInfo() + ": $" + calculator.calculateDiscount(orderAmount));

        calculator.setStrategy(new EmployeeDiscount());
        System.out.println(calculator.getDiscountInfo() + ": $" + calculator.calculateDiscount(orderAmount));

        // ✅ ¡Agregar nueva estrategia es fácil - solo crear nueva clase!
        calculator.setStrategy(new StudentDiscount());
        System.out.println(calculator.getDiscountInfo() + ": $" + calculator.calculateDiscount(orderAmount));
    }
}

// ✅ Interfaz de estrategia define comportamiento común
interface DiscountStrategy {
    double calculateDiscount(double orderAmount);
    String getDescription();
}

// ✅ Cada algoritmo en su propia clase
class RegularCustomerDiscount implements DiscountStrategy {
    public double calculateDiscount(double orderAmount) {
        return 0; // Sin descuento
    }

    public String getDescription() {
        return "Cliente regular - sin descuento";
    }
}

class PremiumCustomerDiscount implements DiscountStrategy {
    public double calculateDiscount(double orderAmount) {
        return orderAmount * 0.1; // 10% de descuento
    }

    public String getDescription() {
        return "Cliente premium - 10% de descuento";
    }
}

class VIPCustomerDiscount implements DiscountStrategy {
    public double calculateDiscount(double orderAmount) {
        return orderAmount * 0.2; // 20% de descuento
    }

    public String getDescription() {
        return "Cliente VIP - 20% de descuento";
    }
}

class EmployeeDiscount implements DiscountStrategy {
    public double calculateDiscount(double orderAmount) {
        return orderAmount * 0.5; // 50% de descuento
    }

    public String getDescription() {
        return "Empleado - 50% de descuento";
    }
}

// ✅ Clase contexto usa estrategia sin saber cuál es
class DiscountCalculator {
    private DiscountStrategy strategy;

    public DiscountCalculator(DiscountStrategy strategy) {
        this.strategy = strategy;
    }

    // ✅ Puede cambiar estrategia en tiempo de ejecución
    public void setStrategy(DiscountStrategy strategy) {
        this.strategy = strategy;
    }

    public double calculateDiscount(double orderAmount) {
        return strategy.calculateDiscount(orderAmount);
    }

    public String getDiscountInfo() {
        return strategy.getDescription();
    }
}

// ✅ ¡Agregar nueva estrategia es fácil - solo crear nueva clase!
class StudentDiscount implements DiscountStrategy {
    public double calculateDiscount(double orderAmount) {
        return orderAmount * 0.15; // 15% de descuento
    }

    public String getDescription() {
        return "Estudiante - 15% de descuento";
    }
}
