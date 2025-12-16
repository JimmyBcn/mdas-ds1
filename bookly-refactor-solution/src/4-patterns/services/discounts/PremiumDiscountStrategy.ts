import { IDiscountCalculator } from '../../interfaces/IDiscountCalculator';

/**
 * Strategy Pattern: PremiumDiscountStrategy
 *
 * This class implements the discount calculation strategy for premium customers.
 * Premium customers get tiered discounts based on their order count.
 */
export class PremiumDiscountStrategy implements IDiscountCalculator {
  private readonly HIGH_TIER_THRESHOLD = 10;
  private readonly HIGH_TIER_DISCOUNT = 0.15;
  private readonly MID_TIER_THRESHOLD = 5;
  private readonly MID_TIER_DISCOUNT = 0.1;
  private readonly LOW_TIER_DISCOUNT = 0.05;

  calculate(subtotal: number, _customerType: string, orderCount: number): number {
    if (orderCount >= this.HIGH_TIER_THRESHOLD) {
      return subtotal * this.HIGH_TIER_DISCOUNT;
    }

    if (orderCount >= this.MID_TIER_THRESHOLD) {
      return subtotal * this.MID_TIER_DISCOUNT;
    }

    return subtotal * this.LOW_TIER_DISCOUNT;
  }
}
