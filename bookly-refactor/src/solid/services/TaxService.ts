import { ITaxCalculator } from '../interfaces';

export class TaxService implements ITaxCalculator {
  static GENERAL_TAX_RATE = 0.1;
  static REDUCED_TAX_RATE = 0.04;
  calculate(subtotal: number, taxType: string): number {
    if (taxType === 'gen') return subtotal * TaxService.GENERAL_TAX_RATE;
    if (taxType === 'red') return subtotal * TaxService.REDUCED_TAX_RATE;
    return 0;
  }
}
