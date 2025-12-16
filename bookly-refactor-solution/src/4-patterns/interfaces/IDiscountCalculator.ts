/**
 * Interface Segregation Principle (ISP):
 * Clients should not be forced to depend on interfaces they do not use.
 * This interface focuses solely on discount calculation responsibilities.
 */
export interface IDiscountCalculator {
  calculate(subtotal: number, customerType: string, orderCount: number): number;
}
