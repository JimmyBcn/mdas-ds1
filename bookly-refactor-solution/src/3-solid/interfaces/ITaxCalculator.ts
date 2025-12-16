/**
 * Interface Segregation Principle (ISP):
 * Clients should not be forced to depend on interfaces they do not use.
 * This interface focuses solely on tax calculation responsibilities.
 */
export interface ITaxCalculator {
  calculate(subtotal: number, taxType: string): number;
}
