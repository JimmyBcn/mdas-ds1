import { IShippingCalculator } from '../interfaces/IShippingCalculator';

/**
 * Single Responsibility Principle (SRP):
 * This class has only one reason to change: when shipping calculation logic changes.
 *
 * Open/Closed Principle (OCP):
 * This class is open for extension (can create subclasses for different shipping strategies)
 * but closed for modification (the core logic doesn't need to change).
 *
 * Liskov Substitution Principle (LSP):
 * Any instance of ShippingCalculator can be replaced with any other IShippingCalculator implementation
 * without breaking the program.
 */
export class ShippingCalculator implements IShippingCalculator {
  private readonly SHIPPING_TYPE_STANDARD = 'std';
  private readonly SHIPPING_TYPE_EXPRESS = 'exp';
  private readonly SHIPPING_TYPE_ECONOMY = 'eco';

  private readonly STANDARD_SHIPPING_BASE_COST = 5;
  private readonly STANDARD_SHIPPING_PER_ITEM = 0.5;

  private readonly EXPRESS_SHIPPING_BASE_COST = 12;
  private readonly EXPRESS_SHIPPING_PER_ITEM = 1.0;
  private readonly EXPRESS_SHIPPING_BULK_FEE = 6;
  private readonly EXPRESS_SHIPPING_BULK_THRESHOLD = 4;

  private readonly ECONOMY_SHIPPING_BASE_COST = 3;
  private readonly ECONOMY_SHIPPING_PER_ITEM = 0.25;

  calculate(shippingType: string, quantity: number): number {
    if (shippingType === this.SHIPPING_TYPE_STANDARD) {
      return this.calculateStandardShipping(quantity);
    }

    if (shippingType === this.SHIPPING_TYPE_EXPRESS) {
      return this.calculateExpressShipping(quantity);
    }

    if (shippingType === this.SHIPPING_TYPE_ECONOMY) {
      return this.calculateEconomyShipping(quantity);
    }

    return 0;
  }

  private calculateStandardShipping(quantity: number): number {
    return this.STANDARD_SHIPPING_BASE_COST + quantity * this.STANDARD_SHIPPING_PER_ITEM;
  }

  private calculateExpressShipping(quantity: number): number {
    let cost = this.EXPRESS_SHIPPING_BASE_COST + quantity * this.EXPRESS_SHIPPING_PER_ITEM;

    if (quantity >= this.EXPRESS_SHIPPING_BULK_THRESHOLD) {
      cost += this.EXPRESS_SHIPPING_BULK_FEE;
    }

    return cost;
  }

  private calculateEconomyShipping(quantity: number): number {
    return this.ECONOMY_SHIPPING_BASE_COST + quantity * this.ECONOMY_SHIPPING_PER_ITEM;
  }
}
