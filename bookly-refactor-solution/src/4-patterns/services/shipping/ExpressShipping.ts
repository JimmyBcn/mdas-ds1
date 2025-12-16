import { IShippingCalculator } from '../../interfaces/IShippingCalculator';

/**
 * Strategy Pattern: ExpressShipping
 *
 * This class implements a concrete shipping strategy for express delivery.
 * Includes bulk order fee for orders with 4 or more items.
 */
export class ExpressShipping implements IShippingCalculator {
  private readonly BASE_COST = 12;
  private readonly PER_ITEM = 1.0;
  private readonly BULK_FEE = 6;
  private readonly BULK_THRESHOLD = 4;

  calculate(_shippingType: string, quantity: number): number {
    let cost = this.BASE_COST + quantity * this.PER_ITEM;

    if (quantity >= this.BULK_THRESHOLD) {
      cost += this.BULK_FEE;
    }

    return cost;
  }
}
