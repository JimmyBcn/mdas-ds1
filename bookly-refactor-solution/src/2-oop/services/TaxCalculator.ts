export class TaxCalculator {
  private static readonly TAX_TYPE_GENERAL = 'gen';
  private static readonly TAX_TYPE_REDUCED = 'red';

  private static readonly GENERAL_TAX_RATE = 0.1;
  private static readonly REDUCED_TAX_RATE = 0.04;

  calculate(subtotal: number, taxType: string): number {
    return taxType === TaxCalculator.TAX_TYPE_GENERAL
      ? subtotal * TaxCalculator.GENERAL_TAX_RATE
      : subtotal * TaxCalculator.REDUCED_TAX_RATE;
  }
}
