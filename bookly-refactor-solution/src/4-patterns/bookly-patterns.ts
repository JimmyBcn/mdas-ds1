// ============================================================================
// IMPORTS
// ============================================================================

import { OrderResult } from './models/OrderResult';
import { OrderBuilder } from './models/OrderBuilder';
import { OrderProcessingFacade } from './services/OrderProcessingFacade';

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
// ORDER PROCESSING WITH DESIGN PATTERNS
// ============================================================================

/**
 * Main function demonstrating design patterns on top of SOLID principles:
 *
 * 1. Builder Pattern (OrderBuilder):
 *    - Provides a fluent interface for constructing Order objects
 *    - Makes order creation more readable and flexible
 *
 * 2. Facade Pattern (OrderProcessingFacade):
 *    - Simplifies the complex subsystem of order processing
 *    - Provides a single entry point with a simple interface
 *
 * 3. Strategy Pattern (StandardShipping, ExpressShipping, EconomyShipping):
 *    - Encapsulates different shipping algorithms
 *    - Used internally by ShippingCalculator
 *
 * 4. Simple Factory Pattern (ShippingFactory):
 *    - Centralizes creation of shipping strategies
 *    - Used internally by ShippingCalculator
 */
function processOrders(): OrderResult[] {
  // BUILDER PATTERN: Create orders using the fluent builder interface
  const builder = new OrderBuilder();

  const orders = [
    builder
      .setId(1)
      .setShippingType(SHIPPING_TYPE_STANDARD)
      .setQuantity(2)
      .setUnitPrice(15.0)
      .setTaxType(TAX_TYPE_GENERAL)
      .setCustomerType(CUSTOMER_TYPE_PREMIUM)
      .setOrderCount(6)
      .build(),

    builder
      .reset()
      .setId(2)
      .setShippingType(SHIPPING_TYPE_EXPRESS)
      .setQuantity(1)
      .setUnitPrice(25.0)
      .setTaxType(TAX_TYPE_GENERAL)
      .setCustomerType(CUSTOMER_TYPE_REGULAR)
      .setOrderCount(2)
      .build(),

    builder
      .reset()
      .setId(3)
      .setShippingType(SHIPPING_TYPE_ECONOMY)
      .setQuantity(5)
      .setUnitPrice(9.5)
      .setTaxType(TAX_TYPE_REDUCED)
      .setCustomerType(CUSTOMER_TYPE_PREMIUM)
      .setOrderCount(12)
      .build(),

    builder
      .reset()
      .setId(4)
      .setShippingType(SHIPPING_TYPE_STANDARD)
      .setQuantity(3)
      .setUnitPrice(12.0)
      .setTaxType(TAX_TYPE_GENERAL)
      .setCustomerType(CUSTOMER_TYPE_REGULAR)
      .setOrderCount(1)
      .build(),

    builder
      .reset()
      .setId(5)
      .setShippingType(SHIPPING_TYPE_EXPRESS)
      .setQuantity(4)
      .setUnitPrice(18.0)
      .setTaxType(TAX_TYPE_GENERAL)
      .setCustomerType(CUSTOMER_TYPE_PREMIUM)
      .setOrderCount(8)
      .build()
  ];

  // FACADE PATTERN: Process orders using the simplified facade interface
  // The facade hides all the complexity of dependency injection, processing, and reporting
  const facade = new OrderProcessingFacade();
  const results = facade.processAndReport(orders);

  return results;
}

// ============================================================================
// MODULE EXECUTION
// ============================================================================

if (require.main === module) {
  processOrders();
}

export { processOrders };
