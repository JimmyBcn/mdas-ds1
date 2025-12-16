import { Order } from '../models/Order';
import { OrderResult } from '../models/OrderResult';
import { Customer } from '../models/Customer';
import { TaxCalculator } from './TaxCalculator';
import { DiscountCalculator } from './DiscountCalculator';
import { ShippingCalculator } from './ShippingCalculator';

export class OrderProcessor {
  private taxCalculator: TaxCalculator;
  private discountCalculator: DiscountCalculator;
  private shippingCalculator: ShippingCalculator;

  private totalRevenue: number = 0;
  private totalDiscounts: number = 0;
  private totalTaxes: number = 0;

  constructor() {
    this.taxCalculator = new TaxCalculator();
    this.discountCalculator = new DiscountCalculator();
    this.shippingCalculator = new ShippingCalculator();
  }

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
    const customer = new Customer(order.customerType, order.orderCount);

    const tax = this.taxCalculator.calculate(subtotal, order.taxType);
    const shipping = this.shippingCalculator.calculate(order.shippingType, order.quantity);
    const discount = this.discountCalculator.calculate(subtotal, customer);

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
