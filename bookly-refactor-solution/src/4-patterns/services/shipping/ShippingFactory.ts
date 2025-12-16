import { IShippingCalculator } from '../../interfaces/IShippingCalculator';
import { StandardShipping } from './StandardShipping';
import { ExpressShipping } from './ExpressShipping';
import { EconomyShipping } from './EconomyShipping';

/**
 * Simple Factory Pattern: ShippingFactory
 *
 * This factory encapsulates the creation logic for shipping strategies.
 * It provides a centralized place to create shipping calculators based on type.
 *
 * Benefits:
 * - Centralizes object creation logic
 * - Client code doesn't need to know about concrete classes
 * - Easy to add new shipping types without changing client code
 */
export class ShippingFactory {
  private static readonly SHIPPING_TYPE_STANDARD = 'std';
  private static readonly SHIPPING_TYPE_EXPRESS = 'exp';
  private static readonly SHIPPING_TYPE_ECONOMY = 'eco';

  static createShippingCalculator(shippingType: string): IShippingCalculator {
    switch (shippingType) {
      case this.SHIPPING_TYPE_STANDARD:
        return new StandardShipping();

      case this.SHIPPING_TYPE_EXPRESS:
        return new ExpressShipping();

      case this.SHIPPING_TYPE_ECONOMY:
        return new EconomyShipping();

      default:
        throw new Error(`Unknown shipping type: ${shippingType}`);
    }
  }
}
