import { IDiscountCalculator } from '../interfaces/IDiscountCalculator';

/**
 * Single Responsibility Principle (SRP):
 * This class has only one reason to change: when discount calculation logic changes.
 *
 * Open/Closed Principle (OCP):
 * This class is open for extension (can create subclasses for different discount strategies)
 * but closed for modification (the core logic doesn't need to change).
 *
 * Liskov Substitution Principle (LSP):
 * Any instance of DiscountCalculator can be replaced with any other IDiscountCalculator implementation
 * without breaking the program.
 */
export class DiscountCalculator implements IDiscountCalculator {
  private readonly CUSTOMER_TYPE_PREMIUM = 'premium';
  private readonly CUSTOMER_TYPE_REGULAR = 'regular';

  private readonly PREMIUM_HIGH_TIER_THRESHOLD = 10;
  private readonly PREMIUM_HIGH_TIER_DISCOUNT = 0.15;
  private readonly PREMIUM_MID_TIER_THRESHOLD = 5;
  private readonly PREMIUM_MID_TIER_DISCOUNT = 0.1;
  private readonly PREMIUM_LOW_TIER_DISCOUNT = 0.05;

  private readonly REGULAR_HIGH_TIER_THRESHOLD = 10;
  private readonly REGULAR_HIGH_TIER_DISCOUNT = 0.05;
  private readonly REGULAR_MID_TIER_THRESHOLD = 5;
  private readonly REGULAR_MID_TIER_DISCOUNT = 0.02;

  calculate(subtotal: number, customerType: string, orderCount: number): number {
    if (customerType === this.CUSTOMER_TYPE_PREMIUM) {
      return this.calculatePremiumDiscount(subtotal, orderCount);
    }

    if (customerType === this.CUSTOMER_TYPE_REGULAR) {
      return this.calculateRegularDiscount(subtotal, orderCount);
    }

    return 0;
  }

  private calculatePremiumDiscount(subtotal: number, orderCount: number): number {
    if (orderCount >= this.PREMIUM_HIGH_TIER_THRESHOLD) {
      return subtotal * this.PREMIUM_HIGH_TIER_DISCOUNT;
    }

    if (orderCount >= this.PREMIUM_MID_TIER_THRESHOLD) {
      return subtotal * this.PREMIUM_MID_TIER_DISCOUNT;
    }

    return subtotal * this.PREMIUM_LOW_TIER_DISCOUNT;
  }

  private calculateRegularDiscount(subtotal: number, orderCount: number): number {
    if (orderCount >= this.REGULAR_HIGH_TIER_THRESHOLD) {
      return subtotal * this.REGULAR_HIGH_TIER_DISCOUNT;
    }

    if (orderCount >= this.REGULAR_MID_TIER_THRESHOLD) {
      return subtotal * this.REGULAR_MID_TIER_DISCOUNT;
    }

    return 0;
  }
}
