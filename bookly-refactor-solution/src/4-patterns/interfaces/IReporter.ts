import { Order } from '../models/Order';
import { OrderResult } from '../models/OrderResult';

/**
 * Interface Segregation Principle (ISP):
 * Clients should not be forced to depend on interfaces they do not use.
 * This interface focuses solely on reporting responsibilities.
 */
export interface IReporter {
  print(
    orders: Order[],
    results: OrderResult[],
    totalRevenue: number,
    totalDiscounts: number,
    totalTaxes: number
  ): void;
}
