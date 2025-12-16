// Implementación del Patrón Strategy: Clases de algoritmos separadas que pueden intercambiarse
// ✅ Solución: Cada algoritmo de envío en su propia clase

// ✅ Interfaz de estrategia define comportamiento común
interface ShippingStrategy {
  calculate(weight: number): number;
}

// ✅ Cada algoritmo en su propia clase
class StandardShipping implements ShippingStrategy {
  public calculate(weight: number): number {
    return weight + 5; // Tarifa base de $5
  }
}

class ExpressShipping implements ShippingStrategy {
  public calculate(weight: number): number {
    return Math.round(weight * 1.1 * 100) / 100; // 10% adicional
  }
}

class OvernightShipping implements ShippingStrategy {
  public calculate(weight: number): number {
    return Math.round(weight * 1.2 * 100) / 100; // 20% adicional
  }
}

// ✅ Clase contexto usa estrategia sin saber cuál es
class ShippingCalculator {
  private strategy: ShippingStrategy;

  constructor(strategy: ShippingStrategy) {
    this.strategy = strategy;
  }

  // ✅ Puede cambiar estrategia en tiempo de ejecución
  public setStrategy(strategy: ShippingStrategy): void {
    this.strategy = strategy;
  }

  public calculateShipping(weight: number): number {
    return this.strategy.calculate(weight);
  }
}

// ✅ Uso - las estrategias pueden intercambiarse fácilmente
console.log("=== Solución con Patrón Strategy ===");

const weight = 100;
console.log(`Peso del paquete: ${weight} kg\n`);

// ✅ Fácil cambiar entre diferentes estrategias de envío
const calculator = new ShippingCalculator(new StandardShipping());
console.log(`Envío estándar: $${calculator.calculateShipping(weight)}`);

calculator.setStrategy(new ExpressShipping());
console.log(`Envío express: $${calculator.calculateShipping(weight)}`);

calculator.setStrategy(new OvernightShipping());
console.log(`Envío nocturno: $${calculator.calculateShipping(weight)}`);

// ✅ ¡Agregar nueva estrategia es fácil - solo crear nueva clase!
class SameDayShipping implements ShippingStrategy {
  public calculate(weight: number): number {
    return weight * 1.3; // 30% adicional
  }
}

calculator.setStrategy(new SameDayShipping());
console.log(`Envío mismo día: $${calculator.calculateShipping(weight)}`);

// ✅ Beneficios:
// 1. Cada algoritmo de envío en su propia clase
// 2. Agregar nuevas estrategias sin modificar código existente
// 3. Fácil de probar cada estrategia individualmente
// 4. Cumple el Principio Abierto/Cerrado
// 5. Estrategias intercambiables en tiempo de ejecución

export { ShippingStrategy, StandardShipping, ExpressShipping, OvernightShipping, ShippingCalculator };
