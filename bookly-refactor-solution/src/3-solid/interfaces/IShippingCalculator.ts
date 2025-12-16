/**
 * Interface Segregation Principle (ISP):
 * Clients should not be forced to depend on interfaces they do not use.
 * This interface focuses solely on shipping cost calculation responsibilities.
 */
export interface IShippingCalculator {
  calculate(shippingType: string, quantity: number): number;
}
