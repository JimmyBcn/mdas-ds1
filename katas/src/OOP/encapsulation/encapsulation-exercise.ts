// 🔧 EJERCICIO: OOP - Encapsulation (Encapsulamiento)
//
// Instrucciones:
// 1. Analiza el archivo encapsulation-bad.ts e identifica datos sin protección
// 2. Protege el estado interno y agrega validaciones
// 3. Implementa tu solución aquí antes de ver encapsulation-good.ts
//
// Pistas:
// - ¿Qué propiedades son públicas que permiten valores inválidos?
// - ¿Cómo podrías prevenir balance negativo?
// - ¿Cómo evitarías cambiar el número de cuenta directamente?
// - Usa `private` para propiedades y `readonly` para valores inmutables
// - Crea getters para lectura y métodos con validación para modificación
//
// Objetivo: Garantizar que BankAccount siempre tenga estado válido
// (balance >= 0, número de cuenta inmutable, validaciones en todos los métodos)
//
// Cuando termines, compara tu solución con encapsulation-good.ts

// Escribe tu solución aquí:

class BankAccount {
  private readonly accountNumber: string;
  private balance: number;
  private isActive: boolean;
  private transactionHistory: string[];

  constructor(accountNumber: string, initialBalance: number) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
    this.isActive = true;
    this.transactionHistory = [];
  }

  public getBalance(): number {
    if (!this.isActive) {
      throw new Error("La cuenta está inactiva.");
    }
    return this.balance;
  }

  public getAccountNumber(): string {
    return this.accountNumber;
  }

  public deposit(amount: number): void {
    if (!this.isActive) {
      throw new Error("No se pueden hacer depósitos en una cuenta inactiva.");
    }
    if (amount <= 0) {
      throw new Error("El monto del depósito debe ser positivo.");
    }
    this.balance += amount;
    this.transactionHistory.push(`Depósito: +${amount}`);
  }

  public withdraw(amount: number): void {
    if (!this.isActive) {
      throw new Error("No se pueden hacer retiros en una cuenta inactiva.");
    }
    if (amount <= 0) {
      throw new Error("El monto del retiro debe ser positivo.");
    }
    if (amount > this.balance) {
      throw new Error("Fondos insuficientes.");
    }
    this.balance -= amount;
    this.transactionHistory.push(`Retiro: -${amount}`);
  }
}

const account = new BankAccount("001", 1000);
console.log(`Balance inicial: $${account.getBalance()}`);
account.deposit(500);
console.log(`Balance después del depósito: $${account.getBalance()}`);
account.withdraw(300);
console.log(`Balance después del retiro: $${account.getBalance()}`);

export { BankAccount };
