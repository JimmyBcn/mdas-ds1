import { IShippingCalculator } from '../../interfaces/IShippingCalculator';

/**
 * Strategy Pattern: StandardShipping
 *
 * This class implements a concrete shipping strategy for standard delivery.
 * Each strategy encapsulates a specific algorithm for calculating shipping costs.
 */
export class StandardShipping implements IShippingCalculator {
  private readonly BASE_COST = 5;
  private readonly PER_ITEM = 0.5;

  calculate(_shippingType: string, quantity: number): number {
    return this.BASE_COST + quantity * this.PER_ITEM;
  }
}
