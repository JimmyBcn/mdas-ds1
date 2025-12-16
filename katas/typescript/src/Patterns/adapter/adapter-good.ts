// Implementación del Patrón Adapter: Interfaz unificada para clases incompatibles
// ✅ Solución: Los adaptadores hacen que interfaces incompatibles trabajen juntas

// Mismos servicios de terceros (no podemos modificar estos)
class StripeService {
  public processStripePayment(amount: number): string {
    return `Procesando pago con Stripe por $${amount}`;
  }
}

class PayPalService {
  public executePayPalPayment(amount: number): string {
    return `Procesando pago con PayPal por $${amount}`;
  }
}

// ✅ Interfaz objetivo que nuestro procesador de pagos espera
interface PaymentGateway {
  pay(amount: number): string;
}

// ✅ Los adaptadores convierten interfaces incompatibles a nuestra interfaz objetivo
class StripeAdapter implements PaymentGateway {
  private stripe: StripeService;

  constructor() {
    this.stripe = new StripeService();
  }

  public pay(amount: number): string {
    // ✅ El adaptador convierte la llamada a la interfaz uniforme
    return this.stripe.processStripePayment(amount);
  }
}

class PayPalAdapter implements PaymentGateway {
  private paypal: PayPalService;

  constructor() {
    this.paypal = new PayPalService();
  }

  public pay(amount: number): string {
    // ✅ El adaptador convierte la llamada a la interfaz uniforme
    return this.paypal.executePayPalPayment(amount);
  }
}

// ✅ El código cliente trabaja con interfaz uniforme
class PaymentProcessor {
  private gateway: PaymentGateway;

  constructor(gateway: PaymentGateway) {
    this.gateway = gateway;
  }

  public processPayment(amount: number): string {
    return this.gateway.pay(amount); // ✅ ¡El mismo método para todos los tipos!
  }
}

// ✅ Beneficios:
// 1. Interfaz uniforme para diferentes proveedores de pago
// 2. Fácil agregar nuevos proveedores (solo crear nuevo adaptador)
// 3. El código cliente no necesita conocer implementaciones específicas
// 4. Sin lógica condicional en PaymentProcessor

console.log("=== Solución con Patrón Adapter ===");

const stripeProcessor = new PaymentProcessor(new StripeAdapter());
console.log(stripeProcessor.processPayment(100));

const paypalProcessor = new PaymentProcessor(new PayPalAdapter());
console.log(paypalProcessor.processPayment(200));

// ✅ ¡Agregar nuevo proveedor es fácil - solo crear nuevo adaptador!
class SquareService {
  public executeSquareTransaction(amount: number): string {
    return `Procesando pago con Square por $${amount}`;
  }
}

class SquareAdapter implements PaymentGateway {
  private square: SquareService;

  constructor() {
    this.square = new SquareService();
  }

  public pay(amount: number): string {
    return this.square.executeSquareTransaction(amount);
  }
}

const squareProcessor = new PaymentProcessor(new SquareAdapter());
console.log(squareProcessor.processPayment(300));

export { PaymentGateway, StripeService, PayPalService, StripeAdapter, PayPalAdapter, SquareService, SquareAdapter, PaymentProcessor };
