// Violación de Polimorfismo: Lógica condicional para tipos
// ❌ Problema: Usar if/else o switch para diferentes tipos de pago

// ❌ Clase que necesita conocer todos los tipos de pago específicos
class PaymentProcessor {
  // ❌ Método lleno de condicionales para cada tipo
  public processPayment(type: string, amount: number): string {
    if (type === "credit_card") {
      return `Procesando pago con Tarjeta de Crédito por $${amount}`;
    } else if (type === "paypal") {
      return `Procesando pago con PayPal por $${amount}`;
    } else if (type === "crypto") {
      return `Procesando pago con Criptomoneda por $${amount}`;
    }
    return `Tipo de pago desconocido`;
    // ❌ Si agrego un nuevo método de pago, debo modificar este método
  }

  // ❌ Más condicionales para validación
  public validatePayment(type: string, amount: number): boolean {
    if (type === "credit_card") {
      return amount > 0 && amount <= 10000;
    } else if (type === "paypal") {
      return amount > 0 && amount <= 5000;
    } else if (type === "crypto") {
      return amount > 0; // Sin límite
    }
    return false;
  }

  // ❌ Y más condicionales para calcular comisiones
  public calculateFee(type: string, amount: number): number {
    if (type === "credit_card") {
      return amount * 0.03; // 3% comisión
    } else if (type === "paypal") {
      return amount * 0.025; // 2.5% comisión
    } else if (type === "crypto") {
      return amount * 0.01; // 1% comisión
    }
    return 0;
  }
}

// ❌ Uso con condicionales por todos lados
console.log("=== Violación de Polimorfismo ===");

const processor = new PaymentProcessor();

const payments = [
  { type: "credit_card", amount: 100 },
  { type: "paypal", amount: 200 },
  { type: "crypto", amount: 300 },
];

// ❌ El procesador debe verificar el tipo constantemente
payments.forEach(({ type, amount }) => {
  if (processor.validatePayment(type, amount)) {
    console.log(processor.processPayment(type, amount));
    console.log(`Comisión: $${processor.calculateFee(type, amount)}`);
  }
});

// ❌ Problemas:
// - Muchos if/else y switch repetidos
// - Agregar nuevo método de pago requiere modificar MUCHOS métodos
// - Propenso a errores (olvidar un caso)
// - Viola Open/Closed Principle
// - Difícil de mantener y escalar

export { PaymentProcessor };
