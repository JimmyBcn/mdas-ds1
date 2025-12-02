export interface ITaxCalculator {
  calculate(subtotal: number, taxType: string): number;
}
export interface IShippingCalculator {
  calculate(quantity: number): number;
}
export interface IShippingFactory {
  create(type: string): IShippingCalculator;
}
export interface IDiscountCalculator {
  calculate(subtotal: number, customerType: string, orderCount: number): number;
}
export interface IReporter {
  print(
    results: any[],
    totals: { revenue: number; discounts: number; taxes: number },
    count: number
  ): void;
}
