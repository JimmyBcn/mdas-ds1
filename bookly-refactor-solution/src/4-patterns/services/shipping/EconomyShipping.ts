import { IShippingCalculator } from '../../interfaces/IShippingCalculator';

/**
 * Strategy Pattern: EconomyShipping
 *
 * This class implements a concrete shipping strategy for economy delivery.
 * Lowest cost option with minimal per-item charges.
 */
export class EconomyShipping implements IShippingCalculator {
  private readonly BASE_COST = 3;
  private readonly PER_ITEM = 0.25;

  calculate(_shippingType: string, quantity: number): number {
    return this.BASE_COST + quantity * this.PER_ITEM;
  }
}
