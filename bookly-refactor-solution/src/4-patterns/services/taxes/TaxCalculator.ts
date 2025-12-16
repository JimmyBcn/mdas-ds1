import { ITaxCalculator } from '../../interfaces/ITaxCalculator';

/**
 * Single Responsibility Principle (SRP):
 * This class has only one reason to change: when tax calculation logic changes.
 *
 * Open/Closed Principle (OCP):
 * This class is open for extension (can create subclasses for different tax strategies)
 * but closed for modification (the core logic doesn't need to change).
 *
 * Liskov Substitution Principle (LSP):
 * Any instance of TaxCalculator can be replaced with any other ITaxCalculator implementation
 * without breaking the program.
 */
export class TaxCalculator implements ITaxCalculator {
  private readonly TAX_TYPE_GENERAL = 'gen';
  private readonly TAX_TYPE_REDUCED = 'red';

  private readonly GENERAL_TAX_RATE = 0.1;
  private readonly REDUCED_TAX_RATE = 0.04;

  calculate(subtotal: number, taxType: string): number {
    if (taxType === this.TAX_TYPE_GENERAL) {
      return subtotal * this.GENERAL_TAX_RATE;
    }

    if (taxType === this.TAX_TYPE_REDUCED) {
      return subtotal * this.REDUCED_TAX_RATE;
    }

    return 0;
  }
}
