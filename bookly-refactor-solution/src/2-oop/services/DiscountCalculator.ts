import { Customer } from '../models/Customer';

export class DiscountCalculator {
  private static readonly CUSTOMER_TYPE_PREMIUM = 'premium';
  private static readonly CUSTOMER_TYPE_REGULAR = 'regular';

  private static readonly PREMIUM_HIGH_TIER_THRESHOLD = 10;
  private static readonly PREMIUM_HIGH_TIER_DISCOUNT = 0.15;

  private static readonly PREMIUM_MID_TIER_THRESHOLD = 5;
  private static readonly PREMIUM_MID_TIER_DISCOUNT = 0.1;

  private static readonly PREMIUM_LOW_TIER_DISCOUNT = 0.05;

  private static readonly REGULAR_HIGH_TIER_THRESHOLD = 10;
  private static readonly REGULAR_HIGH_TIER_DISCOUNT = 0.05;

  private static readonly REGULAR_MID_TIER_THRESHOLD = 5;
  private static readonly REGULAR_MID_TIER_DISCOUNT = 0.02;

  calculate(subtotal: number, customer: Customer): number {
    if (customer.type === DiscountCalculator.CUSTOMER_TYPE_PREMIUM) {
      return this.calculatePremiumDiscount(subtotal, customer.orderCount);
    }

    if (customer.type === DiscountCalculator.CUSTOMER_TYPE_REGULAR) {
      return this.calculateRegularDiscount(subtotal, customer.orderCount);
    }

    return 0;
  }

  private calculatePremiumDiscount(subtotal: number, orderCount: number): number {
    if (orderCount >= DiscountCalculator.PREMIUM_HIGH_TIER_THRESHOLD) {
      return subtotal * DiscountCalculator.PREMIUM_HIGH_TIER_DISCOUNT;
    }

    if (orderCount >= DiscountCalculator.PREMIUM_MID_TIER_THRESHOLD) {
      return subtotal * DiscountCalculator.PREMIUM_MID_TIER_DISCOUNT;
    }

    return subtotal * DiscountCalculator.PREMIUM_LOW_TIER_DISCOUNT;
  }

  private calculateRegularDiscount(subtotal: number, orderCount: number): number {
    if (orderCount >= DiscountCalculator.REGULAR_HIGH_TIER_THRESHOLD) {
      return subtotal * DiscountCalculator.REGULAR_HIGH_TIER_DISCOUNT;
    }

    if (orderCount >= DiscountCalculator.REGULAR_MID_TIER_THRESHOLD) {
      return subtotal * DiscountCalculator.REGULAR_MID_TIER_DISCOUNT;
    }

    return 0;
  }
}
