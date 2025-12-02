import { IReporter } from '../interfaces';

export class ConsoleReporter implements IReporter {
  print(
    results: any[],
    totals: { revenue: number; discounts: number; taxes: number },
    count: number
  ): void {
    console.log('=== BOOKLY REPORT ===');
    console.log('Total pedidos: ' + count);
    console.log('---');
    for (let j = 0; j < results.length; j++) {
      const r = results[j];
      console.log(
        'Pedido #' +
          r.id +
          ' | Tipo: ' +
          r.type +
          ' | Subtotal: €' +
          r.subtotal.toFixed(2) +
          ' | IVA: €' +
          r.tax.toFixed(2) +
          ' | Envío: €' +
          r.shipping.toFixed(2) +
          ' | Descuento: €' +
          r.discount.toFixed(2) +
          ' | Total: €' +
          r.total.toFixed(2)
      );
    }
    console.log('---');
    console.log('Ingresos totales: €' + totals.revenue.toFixed(2));
    console.log('Descuentos totales: €' + totals.discounts.toFixed(2));
    console.log('Impuestos totales: €' + totals.taxes.toFixed(2));
    console.log('=====================');
  }
}
