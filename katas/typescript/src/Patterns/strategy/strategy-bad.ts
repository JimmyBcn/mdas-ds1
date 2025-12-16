// Violación del Patrón Strategy: Algoritmos codificados con cadenas if/else
// ❌ Problema: Toda la lógica de cálculo de envío mezclada en una clase

class ShippingCalculator {
  public calculateShipping(type: string, weight: number): number {
    // ❌ Todos los algoritmos mezclados con lógica condicional
    if (type === "standard") {
      // Envío estándar - peso + $5 tarifa base
      return weight + 5;
    } else if (type === "express") {
      // Envío express - peso * 1.10 (10% adicional)
      return Math.round(weight * 1.1 * 100) / 100;
    } else if (type === "overnight") {
      // Envío nocturno - peso * 1.20 (20% adicional)
      return Math.round(weight * 1.2 * 100) / 100;
    }
    // Tipo desconocido - retorna peso original
    return weight;
  }

  // ❌ Agregar nuevos tipos de envío requiere modificar esta clase
  public getSupportedShippingTypes(): string[] {
    return ["standard", "express", "overnight"];
  }
}

// Uso mostrando los problemas
console.log("=== Violación del Patrón Strategy ===");

const calculator = new ShippingCalculator();
const weight = 100;

console.log(`Peso del paquete: ${weight} kg`);
console.log(`Envío estándar: $${calculator.calculateShipping("standard", weight)}`);
console.log(`Envío express: $${calculator.calculateShipping("express", weight)}`);
console.log(`Envío nocturno: $${calculator.calculateShipping("overnight", weight)}`);

// ❌ Problemas:
// 1. Todos los algoritmos de envío en una clase
// 2. Agregar nuevo tipo de envío requiere modificar ShippingCalculator
// 3. No se pueden probar algoritmos de envío individuales por separado
// 4. Viola el Principio Abierto/Cerrado
// 5. Difícil de mantener con muchos tipos de envío

export { ShippingCalculator };
