import { IDiscountCalculator } from '../../interfaces/IDiscountCalculator';
import { PremiumDiscountStrategy } from './PremiumDiscountStrategy';
import { RegularDiscountStrategy } from './RegularDiscountStrategy';

/**
 * Simple Factory Pattern: DiscountFactory
 *
 * This factory encapsulates the creation logic for discount strategies.
 * It provides a centralized place to create discount calculators based on customer type.
 *
 * Benefits:
 * - Centralizes object creation logic
 * - Client code doesn't need to know about concrete strategy classes
 * - Easy to add new customer types without changing client code
 */
export class DiscountFactory {
  private static readonly CUSTOMER_TYPE_PREMIUM = 'premium';
  private static readonly CUSTOMER_TYPE_REGULAR = 'regular';

  static createDiscountCalculator(customerType: string): IDiscountCalculator {
    switch (customerType) {
      case this.CUSTOMER_TYPE_PREMIUM:
        return new PremiumDiscountStrategy();

      case this.CUSTOMER_TYPE_REGULAR:
        return new RegularDiscountStrategy();

      default:
        // Return a no-discount strategy for unknown customer types
        return new RegularDiscountStrategy();
    }
  }
}
