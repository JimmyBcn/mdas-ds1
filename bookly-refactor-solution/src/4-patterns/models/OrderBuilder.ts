import { Order } from '../models/Order';

/**
 * Builder Pattern: OrderBuilder
 *
 * This builder provides a fluent interface for constructing Order objects.
 * It separates the construction of a complex object from its representation.
 *
 * Benefits:
 * - Provides a clear, readable way to construct orders
 * - Allows step-by-step construction with method chaining
 * - Makes it easy to create different representations
 * - Validates that all required fields are set before building
 */
export class OrderBuilder {
  private id?: number;
  private shippingType?: string;
  private quantity?: number;
  private unitPrice?: number;
  private taxType?: string;
  private customerType?: string;
  private orderCount?: number;

  setId(id: number): OrderBuilder {
    this.id = id;
    return this;
  }

  setShippingType(shippingType: string): OrderBuilder {
    this.shippingType = shippingType;
    return this;
  }

  setQuantity(quantity: number): OrderBuilder {
    this.quantity = quantity;
    return this;
  }

  setUnitPrice(unitPrice: number): OrderBuilder {
    this.unitPrice = unitPrice;
    return this;
  }

  setTaxType(taxType: string): OrderBuilder {
    this.taxType = taxType;
    return this;
  }

  setCustomerType(customerType: string): OrderBuilder {
    this.customerType = customerType;
    return this;
  }

  setOrderCount(orderCount: number): OrderBuilder {
    this.orderCount = orderCount;
    return this;
  }

  build(): Order {
    if (
      this.id === undefined ||
      this.shippingType === undefined ||
      this.quantity === undefined ||
      this.unitPrice === undefined ||
      this.taxType === undefined ||
      this.customerType === undefined ||
      this.orderCount === undefined
    ) {
      throw new Error('All order fields must be set before building');
    }

    return new Order(
      this.id,
      this.shippingType,
      this.quantity,
      this.unitPrice,
      this.taxType,
      this.customerType,
      this.orderCount
    );
  }

  reset(): OrderBuilder {
    this.id = undefined;
    this.shippingType = undefined;
    this.quantity = undefined;
    this.unitPrice = undefined;
    this.taxType = undefined;
    this.customerType = undefined;
    this.orderCount = undefined;
    return this;
  }
}
