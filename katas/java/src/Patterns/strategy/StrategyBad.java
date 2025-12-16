package Patterns.strategy;

// Violación del Patrón Strategy: Algoritmos codificados con cadenas if/else
// ❌ Problema: Toda la lógica de cálculo de descuentos mezclada en una clase

public class StrategyBad {
    public static void main(String[] args) {
        System.out.println("=== Violación del Patrón Strategy ===");

        DiscountCalculator calculator = new DiscountCalculator();
        double orderAmount = 100;

        System.out.println("Monto del pedido: $" + orderAmount);
        System.out.println("Descuento regular: $" + calculator.calculateDiscount("regular", orderAmount));
        System.out.println("Descuento premium: $" + calculator.calculateDiscount("premium", orderAmount));
        System.out.println("Descuento VIP: $" + calculator.calculateDiscount("vip", orderAmount));
        System.out.println("Descuento empleado: $" + calculator.calculateDiscount("employee", orderAmount));

        // ❌ Problemas:
        // 1. Todos los algoritmos de descuento en una clase
        // 2. Agregar nuevo tipo de cliente requiere modificar DiscountCalculator
        // 3. No se pueden probar algoritmos de descuento individuales por separado
        // 4. Viola el Principio Abierto/Cerrado
    }
}

class DiscountCalculator {
    public double calculateDiscount(String customerType, double orderAmount) {
        // ❌ Todos los algoritmos mezclados con lógica condicional
        if (customerType.equals("regular")) {
            // Cliente regular - sin descuento
            return 0;
        } else if (customerType.equals("premium")) {
            // Cliente premium - 10% de descuento
            return orderAmount * 0.1;
        } else if (customerType.equals("vip")) {
            // Cliente VIP - 20% de descuento
            return orderAmount * 0.2;
        } else if (customerType.equals("employee")) {
            // Empleado - 50% de descuento
            return orderAmount * 0.5;
        } else {
            throw new IllegalArgumentException("Tipo de cliente desconocido: " + customerType);
        }
    }

    // ❌ Agregar nuevos tipos de cliente requiere modificar esta clase
    public String[] getSupportedCustomerTypes() {
        return new String[]{"regular", "premium", "vip", "employee"};
    }
}
