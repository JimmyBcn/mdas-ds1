import { IDiscountCalculator } from '../../interfaces/IDiscountCalculator';
import { DiscountFactory } from './DiscountFactory';

/**
 * Strategy Pattern + Factory Pattern:
 *
 * This class uses the Strategy pattern by delegating to specific discount strategies.
 * It uses the Factory pattern to create the appropriate strategy based on customer type.
 *
 * Benefits:
 * - Uses polymorphism: each strategy implements IDiscountCalculator
 * - Factory centralizes strategy creation
 * - Easy to add new customer types without modifying this class (OCP)
 * - Each strategy is isolated and testable (SRP)
 */
export class DiscountCalculator implements IDiscountCalculator {
  calculate(subtotal: number, customerType: string, orderCount: number): number {
    // Factory Pattern: Create the appropriate strategy based on customer type
    const strategy = DiscountFactory.createDiscountCalculator(customerType);

    // Strategy Pattern: Delegate to the strategy using polymorphism
    return strategy.calculate(subtotal, customerType, orderCount);
  }
}
