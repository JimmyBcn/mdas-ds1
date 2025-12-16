import { IShippingCalculator } from '../../interfaces/IShippingCalculator';
import { ShippingFactory } from './ShippingFactory';

/**
 * Strategy Pattern + Factory Pattern:
 *
 * This class uses the Strategy pattern by delegating to specific shipping strategies.
 * It uses the Factory pattern to create the appropriate strategy based on shipping type.
 *
 * Benefits:
 * - Uses polymorphism: each strategy implements IShippingCalculator
 * - Factory centralizes strategy creation
 * - Easy to add new shipping types without modifying this class (OCP)
 * - Each strategy is isolated and testable (SRP)
 */
export class ShippingCalculator implements IShippingCalculator {
  calculate(shippingType: string, quantity: number): number {
    // Factory Pattern: Create the appropriate strategy based on type
    const strategy = ShippingFactory.createShippingCalculator(shippingType);

    // Strategy Pattern: Delegate to the strategy using polymorphism
    return strategy.calculate(shippingType, quantity);
  }
}
