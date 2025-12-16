// ============================================================================
// IMPORTS
// ============================================================================

import { Order } from './models/Order';
import { OrderResult } from './models/OrderResult';
import { OrderProcessor } from './services/OrderProcessor';
import { TaxCalculator } from './services/TaxCalculator';
import { DiscountCalculator } from './services/DiscountCalculator';
import { ShippingCalculator } from './services/ShippingCalculator';
import { Reporter } from './utils/Reporter';

// ============================================================================
// CONSTANTS
// ============================================================================

const SHIPPING_TYPE_STANDARD = 'std';
const SHIPPING_TYPE_EXPRESS = 'exp';
const SHIPPING_TYPE_ECONOMY = 'eco';

const TAX_TYPE_GENERAL = 'gen';
const TAX_TYPE_REDUCED = 'red';

const CUSTOMER_TYPE_PREMIUM = 'premium';
const CUSTOMER_TYPE_REGULAR = 'regular';

// ============================================================================
// ORDER PROCESSING
// ============================================================================

/**
 * Main function demonstrating SOLID principles:
 *
 * Dependency Inversion Principle (DIP):
 * We create concrete implementations and inject them into OrderProcessor.
 * This allows for easy testing and swapping of implementations.
 */
function processOrders(): OrderResult[] {
  const orders: Order[] = [
    new Order(1, SHIPPING_TYPE_STANDARD, 2, 15.0, TAX_TYPE_GENERAL, CUSTOMER_TYPE_PREMIUM, 6),
    new Order(2, SHIPPING_TYPE_EXPRESS, 1, 25.0, TAX_TYPE_GENERAL, CUSTOMER_TYPE_REGULAR, 2),
    new Order(3, SHIPPING_TYPE_ECONOMY, 5, 9.5, TAX_TYPE_REDUCED, CUSTOMER_TYPE_PREMIUM, 12),
    new Order(4, SHIPPING_TYPE_STANDARD, 3, 12.0, TAX_TYPE_GENERAL, CUSTOMER_TYPE_REGULAR, 1),
    new Order(5, SHIPPING_TYPE_EXPRESS, 4, 18.0, TAX_TYPE_GENERAL, CUSTOMER_TYPE_PREMIUM, 8)
  ];

  // Dependency Injection: Create dependencies and inject them
  const taxCalculator = new TaxCalculator();
  const discountCalculator = new DiscountCalculator();
  const shippingCalculator = new ShippingCalculator();

  const processor = new OrderProcessor(taxCalculator, discountCalculator, shippingCalculator);
  const results = processor.processOrders(orders);

  const reporter = new Reporter();
  reporter.print(
    orders,
    results,
    processor.getTotalRevenue(),
    processor.getTotalDiscounts(),
    processor.getTotalTaxes()
  );

  return results;
}

// ============================================================================
// MODULE EXECUTION
// ============================================================================

if (require.main === module) {
  processOrders();
}

export { processOrders };
