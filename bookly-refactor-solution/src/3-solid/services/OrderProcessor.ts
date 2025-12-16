import { Order } from '../models/Order';
import { OrderResult } from '../models/OrderResult';
import { ITaxCalculator } from '../interfaces/ITaxCalculator';
import { IDiscountCalculator } from '../interfaces/IDiscountCalculator';
import { IShippingCalculator } from '../interfaces/IShippingCalculator';

/**
 * Single Responsibility Principle (SRP):
 * This class has only one reason to change: when order processing logic changes.
 * It delegates calculations to specialized services.
 *
 * Open/Closed Principle (OCP):
 * This class is open for extension but closed for modification.
 * New calculation types can be added without changing this class.
 *
 * Dependency Inversion Principle (DIP):
 * This class depends on abstractions (interfaces) rather than concrete implementations.
 * The dependencies are injected through the constructor, following dependency injection pattern.
 */
export class OrderProcessor {
  private totalRevenue: number = 0;
  private totalDiscounts: number = 0;
  private totalTaxes: number = 0;

  constructor(
    private readonly taxCalculator: ITaxCalculator,
    private readonly discountCalculator: IDiscountCalculator,
    private readonly shippingCalculator: IShippingCalculator
  ) {}

  processOrders(orders: Order[]): OrderResult[] {
    this.resetTotals();
    const results: OrderResult[] = [];

    for (const order of orders) {
      const result = this.processOrder(order);
      results.push(result);
      this.updateTotals(result);
    }

    return results;
  }

  private processOrder(order: Order): OrderResult {
    const subtotal = order.calculateSubtotal();

    const tax = this.taxCalculator.calculate(subtotal, order.taxType);
    const shipping = this.shippingCalculator.calculate(order.shippingType, order.quantity);
    const discount = this.discountCalculator.calculate(
      subtotal,
      order.customerType,
      order.orderCount
    );

    return OrderResult.create(order.id, subtotal, tax, shipping, discount, order.shippingType);
  }

  private updateTotals(result: OrderResult): void {
    this.totalRevenue += result.total;
    this.totalDiscounts += result.discount;
    this.totalTaxes += result.tax;
  }

  private resetTotals(): void {
    this.totalRevenue = 0;
    this.totalDiscounts = 0;
    this.totalTaxes = 0;
  }

  getTotalRevenue(): number {
    return this.totalRevenue;
  }

  getTotalDiscounts(): number {
    return this.totalDiscounts;
  }

  getTotalTaxes(): number {
    return this.totalTaxes;
  }
}
