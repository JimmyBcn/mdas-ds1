import { IShippingCalculator, IShippingFactory } from '../interfaces';

class StandardShipping implements IShippingCalculator {
  static BASE = 5;
  static PER_ITEM = 0.5;
  calculate(quantity: number): number {
    return StandardShipping.BASE + quantity * StandardShipping.PER_ITEM;
  }
}
class ExpressShipping implements IShippingCalculator {
  static BASE = 12;
  static PER_ITEM = 1.0;
  static BULK_THRESHOLD = 4;
  static BULK_SURCHARGE = 6;
  calculate(quantity: number): number {
    let a = ExpressShipping.BASE + quantity * ExpressShipping.PER_ITEM;
    if (quantity >= ExpressShipping.BULK_THRESHOLD) a = a + ExpressShipping.BULK_SURCHARGE;
    return a;
  }
}
class EconomyShipping implements IShippingCalculator {
  static BASE = 3;
  static PER_ITEM = 0.25;
  calculate(quantity: number): number {
    return EconomyShipping.BASE + quantity * EconomyShipping.PER_ITEM;
  }
}

export class ShippingFactory implements IShippingFactory {
  create(type: string): IShippingCalculator {
    if (type === 'std') return new StandardShipping();
    if (type === 'exp') return new ExpressShipping();
    return new EconomyShipping();
  }
}
