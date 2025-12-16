export class ShippingCalculator {
  private static readonly SHIPPING_TYPE_STANDARD = 'std';
  private static readonly SHIPPING_TYPE_EXPRESS = 'exp';
  private static readonly SHIPPING_TYPE_ECONOMY = 'eco';

  private static readonly STANDARD_SHIPPING_BASE_COST = 5;
  private static readonly STANDARD_SHIPPING_PER_ITEM = 0.5;

  private static readonly EXPRESS_SHIPPING_BASE_COST = 12;
  private static readonly EXPRESS_SHIPPING_PER_ITEM = 1.0;
  private static readonly EXPRESS_SHIPPING_BULK_FEE = 6;
  private static readonly EXPRESS_SHIPPING_BULK_THRESHOLD = 4;

  private static readonly ECONOMY_SHIPPING_BASE_COST = 3;
  private static readonly ECONOMY_SHIPPING_PER_ITEM = 0.25;

  calculate(shippingType: string, quantity: number): number {
    if (shippingType === ShippingCalculator.SHIPPING_TYPE_STANDARD) {
      return this.calculateStandardShipping(quantity);
    }

    if (shippingType === ShippingCalculator.SHIPPING_TYPE_EXPRESS) {
      return this.calculateExpressShipping(quantity);
    }

    return this.calculateEconomyShipping(quantity);
  }

  private calculateStandardShipping(quantity: number): number {
    return (
      ShippingCalculator.STANDARD_SHIPPING_BASE_COST +
      quantity * ShippingCalculator.STANDARD_SHIPPING_PER_ITEM
    );
  }

  private calculateExpressShipping(quantity: number): number {
    let cost =
      ShippingCalculator.EXPRESS_SHIPPING_BASE_COST +
      quantity * ShippingCalculator.EXPRESS_SHIPPING_PER_ITEM;

    if (quantity >= ShippingCalculator.EXPRESS_SHIPPING_BULK_THRESHOLD) {
      cost += ShippingCalculator.EXPRESS_SHIPPING_BULK_FEE;
    }

    return cost;
  }

  private calculateEconomyShipping(quantity: number): number {
    return (
      ShippingCalculator.ECONOMY_SHIPPING_BASE_COST +
      quantity * ShippingCalculator.ECONOMY_SHIPPING_PER_ITEM
    );
  }
}
