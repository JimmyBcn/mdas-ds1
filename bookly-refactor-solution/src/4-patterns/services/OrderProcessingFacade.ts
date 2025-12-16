import { Order } from '../models/Order';
import { OrderResult } from '../models/OrderResult';
import { OrderProcessor } from './OrderProcessor';
import { TaxCalculator } from './taxes/TaxCalculator';
import { DiscountCalculator } from './discounts/DiscountCalculator';
import { ShippingCalculator } from './shipping/ShippingCalculator';
import { Reporter } from '../utils/Reporter';

/**
 * Facade Pattern: OrderProcessingFacade
 *
 * This facade provides a simplified interface to the complex order processing subsystem.
 * It hides the complexity of creating dependencies, processing orders, and generating reports.
 *
 * Benefits:
 * - Simplifies the interface for client code
 * - Reduces dependencies between clients and subsystem classes
 * - Makes the subsystem easier to use
 * - Provides a single entry point for order processing
 */
export class OrderProcessingFacade {
  private processor: OrderProcessor;
  private reporter: Reporter;

  constructor() {
    // Initialize all dependencies internally
    const taxCalculator = new TaxCalculator();
    const discountCalculator = new DiscountCalculator();
    const shippingCalculator = new ShippingCalculator();

    this.processor = new OrderProcessor(taxCalculator, discountCalculator, shippingCalculator);
    this.reporter = new Reporter();
  }

  /**
   * Process orders and generate report in a single call
   * This is the simplified interface that hides all the complexity
   */
  processAndReport(orders: Order[]): OrderResult[] {
    const results = this.processor.processOrders(orders);

    this.reporter.print(
      orders,
      results,
      this.processor.getTotalRevenue(),
      this.processor.getTotalDiscounts(),
      this.processor.getTotalTaxes()
    );

    return results;
  }
}
