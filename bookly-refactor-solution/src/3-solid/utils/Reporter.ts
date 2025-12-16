import { Order } from '../models/Order';
import { OrderResult } from '../models/OrderResult';
import { IReporter } from '../interfaces/IReporter';

/**
 * Single Responsibility Principle (SRP):
 * This class has only one reason to change: when reporting format changes.
 *
 * Open/Closed Principle (OCP):
 * This class is open for extension (can create subclasses for different report formats)
 * but closed for modification (the core logic doesn't need to change).
 *
 * Liskov Substitution Principle (LSP):
 * Any instance of Reporter can be replaced with any other IReporter implementation
 * without breaking the program.
 */
export class Reporter implements IReporter {
  print(
    orders: Order[],
    results: OrderResult[],
    totalRevenue: number,
    totalDiscounts: number,
    totalTaxes: number
  ): void {
    this.printHeader(orders.length);
    this.printOrderDetails(results);
    this.printSummary(totalRevenue, totalDiscounts, totalTaxes);
    this.printFooter();
  }

  private printHeader(orderCount: number): void {
    console.log(`=== BOOKLY REPORT === | Total pedidos: ${orderCount}`);
  }

  private printOrderDetails(results: OrderResult[]): void {
    for (const result of results) {
      console.log(
        `Pedido #${result.id} | Tipo: ${result.type} | Subtotal: €${result.subtotal.toFixed(2)} | IVA: €${result.tax.toFixed(2)} | Envío: €${result.shipping.toFixed(2)} | Descuento: €${result.discount.toFixed(2)} | Total: €${result.total.toFixed(2)}`
      );
    }
  }

  private printSummary(totalRevenue: number, totalDiscounts: number, totalTaxes: number): void {
    console.log(
      `Ingresos totales: €${totalRevenue.toFixed(2)} | Descuentos totales: €${totalDiscounts.toFixed(2)} | Impuestos totales: €${totalTaxes.toFixed(2)}`
    );
  }

  private printFooter(): void {
    console.log('=====================');
  }
}
