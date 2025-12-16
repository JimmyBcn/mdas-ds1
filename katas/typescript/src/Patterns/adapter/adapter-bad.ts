// Violación del Patrón Adapter: Interfaces incompatibles fuerzan llamadas a métodos diferentes
// ❌ Problema: Servicios de pago de terceros tienen interfaces diferentes

// Servicio de Stripe (no podemos modificar esto)
class StripeService {
  public processStripePayment(amount: number): string {
    return `Procesando pago con Stripe por $${amount}`;
  }
}

// Servicio de PayPal (tampoco podemos modificar esto)
class PayPalService {
  public executePayPalPayment(amount: number): string {
    return `Procesando pago con PayPal por $${amount}`;
  }
}

// ❌ Nuestro procesador debe manejar cada tipo de forma diferente
class PaymentProcessor {
  public processPayment(type: string, amount: number): string {
    if (type === "stripe") {
      const stripe = new StripeService();
      return stripe.processStripePayment(amount); // ❌ Nombre de método diferente
    } else if (type === "paypal") {
      const paypal = new PayPalService();
      return paypal.executePayPalPayment(amount); // ❌ Nombre de método diferente
    } else {
      throw new Error(`Tipo de pago no soportado: ${type}`);
    }
  }
}

// ❌ Problemas:
// 1. Debe recordar nombres de métodos diferentes para cada servicio
// 2. Código cliente acoplado a implementaciones específicas
// 3. Agregar nuevo proveedor de pago requiere modificar PaymentProcessor
// 4. Lógica condicional crece con cada nuevo proveedor

console.log("=== Violación del Patrón Adapter ===");
const processor = new PaymentProcessor();
console.log(processor.processPayment("stripe", 100));
console.log(processor.processPayment("paypal", 200));

export { StripeService, PayPalService, PaymentProcessor };
