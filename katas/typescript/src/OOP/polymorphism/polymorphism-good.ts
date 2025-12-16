// Cumplimiento de Polimorfismo: Comportamiento específico sin condicionales
// ✅ Solución: Cada clase implementa su propio comportamiento

// ✅ Clase base abstracta define la interfaz común
abstract class Payment {
  // ✅ Métodos abstractos - cada hijo DEBE implementarlos
  abstract process(amount: number): string;
  abstract validate(amount: number): boolean;
  abstract calculateFee(amount: number): number;

  // ✅ Método común para todos
  public getInfo(): string {
    return `Método de pago: ${this.constructor.name}`;
  }
}

// ✅ Cada clase implementa su comportamiento específico
class CreditCardPayment extends Payment {
  public process(amount: number): string {
    return `Procesando pago con Tarjeta de Crédito por $${amount}`;
  }

  public validate(amount: number): boolean {
    return amount > 0 && amount <= 10000; // Límite de $10,000
  }

  public calculateFee(amount: number): number {
    return amount * 0.03; // 3% comisión
  }
}

class PayPalPayment extends Payment {
  public process(amount: number): string {
    return `Procesando pago con PayPal por $${amount}`;
  }

  public validate(amount: number): boolean {
    return amount > 0 && amount <= 5000; // Límite de $5,000
  }

  public calculateFee(amount: number): number {
    return amount * 0.025; // 2.5% comisión
  }
}

class CryptoPayment extends Payment {
  public process(amount: number): string {
    return `Procesando pago con Criptomoneda por $${amount}`;
  }

  public validate(amount: number): boolean {
    return amount > 0; // Sin límite
  }

  public calculateFee(amount: number): number {
    return amount * 0.01; // 1% comisión
  }
}

// ✅ Procesador sin condicionales - usa polimorfismo
class PaymentProcessor {
  // ✅ Método genérico - funciona con cualquier Payment
  public processPayment(payment: Payment, amount: number): string {
    if (payment.validate(amount)) {
      const result = payment.process(amount); // ✅ Llama al método correcto automáticamente
      const fee = payment.calculateFee(amount); // ✅ Sin if/else
      return `${result}\nComisión: $${fee}`;
    }
    return "Pago inválido";
  }

  public processMultiplePayments(payments: { payment: Payment; amount: number }[]): void {
    payments.forEach(({ payment, amount }) => {
      console.log(payment.getInfo());
      console.log(this.processPayment(payment, amount));
      console.log("---");
    });
  }
}

// ✅ Uso limpio sin condicionales
console.log("=== Cumplimiento de Polimorfismo ===");

const creditCard = new CreditCardPayment();
const paypal = new PayPalPayment();
const crypto = new CryptoPayment();

// ✅ Array de tipo Payment - polimorfismo en acción
const payments = [
  { payment: creditCard, amount: 100 },
  { payment: paypal, amount: 200 },
  { payment: crypto, amount: 300 },
];

const processor = new PaymentProcessor();

// ✅ Un solo método procesa todos los tipos sin verificar
processor.processMultiplePayments(payments);

// ✅ Agregar nuevo método de pago es fácil - solo crear la clase
class BankTransferPayment extends Payment {
  public process(amount: number): string {
    return `Procesando pago con Transferencia Bancaria por $${amount}`;
  }

  public validate(amount: number): boolean {
    return amount > 0 && amount <= 50000; // Límite de $50,000
  }

  public calculateFee(amount: number): number {
    return 5; // Tarifa fija de $5
  }
}

const bankTransfer = new BankTransferPayment();
console.log("\n=== Nuevo método de pago agregado sin modificar código existente ===");

// ✅ Funciona inmediatamente sin cambiar PaymentProcessor
processor.processMultiplePayments([{ payment: bankTransfer, amount: 1000 }]);

// ✅ Beneficios:
// - Sin if/else ni switch
// - Agregar nuevos métodos de pago no modifica código existente
// - Cada clase tiene su lógica encapsulada
// - Respeta Open/Closed Principle
// - Fácil de mantener y escalar

export { Payment, CreditCardPayment, PayPalPayment, CryptoPayment, BankTransferPayment, PaymentProcessor };
