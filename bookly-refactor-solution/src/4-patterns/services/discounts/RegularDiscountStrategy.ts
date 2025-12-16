import { IDiscountCalculator } from '../../interfaces/IDiscountCalculator';

/**
 * Strategy Pattern: RegularDiscountStrategy
 *
 * This class implements the discount calculation strategy for regular customers.
 * Regular customers get smaller tiered discounts based on their order count.
 */
export class RegularDiscountStrategy implements IDiscountCalculator {
  private readonly HIGH_TIER_THRESHOLD = 10;
  private readonly HIGH_TIER_DISCOUNT = 0.05;
  private readonly MID_TIER_THRESHOLD = 5;
  private readonly MID_TIER_DISCOUNT = 0.02;

  calculate(subtotal: number, _customerType: string, orderCount: number): number {
    if (orderCount >= this.HIGH_TIER_THRESHOLD) {
      return subtotal * this.HIGH_TIER_DISCOUNT;
    }

    if (orderCount >= this.MID_TIER_THRESHOLD) {
      return subtotal * this.MID_TIER_DISCOUNT;
    }

    return 0;
  }
}
