import { IDiscountCalculator } from '../interfaces';

export class DiscountService implements IDiscountCalculator {
  static PREMIUM_HIGH_THRESHOLD = 10;
  static PREMIUM_MEDIUM_THRESHOLD = 5;
  static PREMIUM_HIGH_DISCOUNT = 0.15;
  static PREMIUM_MEDIUM_DISCOUNT = 0.1;
  static PREMIUM_LOW_DISCOUNT = 0.05;
  static REGULAR_HIGH_THRESHOLD = 10;
  static REGULAR_MEDIUM_THRESHOLD = 5;
  static REGULAR_HIGH_DISCOUNT = 0.05;
  static REGULAR_MEDIUM_DISCOUNT = 0.02;

  calculate(subtotal: number, customerType: string, orderCount: number): number {
    if (customerType === 'premium') {
      if (orderCount >= DiscountService.PREMIUM_HIGH_THRESHOLD)
        return subtotal * DiscountService.PREMIUM_HIGH_DISCOUNT;
      if (orderCount >= DiscountService.PREMIUM_MEDIUM_THRESHOLD)
        return subtotal * DiscountService.PREMIUM_MEDIUM_DISCOUNT;
      return subtotal * DiscountService.PREMIUM_LOW_DISCOUNT;
    }
    if (customerType === 'regular') {
      if (orderCount >= DiscountService.REGULAR_HIGH_THRESHOLD)
        return subtotal * DiscountService.REGULAR_HIGH_DISCOUNT;
      if (orderCount >= DiscountService.REGULAR_MEDIUM_THRESHOLD)
        return subtotal * DiscountService.REGULAR_MEDIUM_DISCOUNT;
      return 0;
    }
    return 0;
  }
}
