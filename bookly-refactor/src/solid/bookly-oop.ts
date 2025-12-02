// @ts-nocheck
interface ITaxCalculator {
  calculate(sub: number, type: string): number;
}
interface IDiscountCalculator {
  calculate(sub: number, customer: string, orders: number): number;
}
interface IShippingCalculator {
  calculate(q: number): number;
}
class TaxCalculator implements ITaxCalculator {
  calculate(sub, t) {
    return t === 'gen' ? sub * 0.1 : sub * 0.04;
  }
}
class DiscountCalculator implements IDiscountCalculator {
  calculate(sub, c, o) {
    if (c === 'premium') {
      if (o >= 10) return sub * 0.15;
      if (o >= 5) return sub * 0.1;
      return sub * 0.05;
    }
    if (c === 'regular') {
      if (o >= 10) return sub * 0.05;
      if (o >= 5) return sub * 0.02;
      return 0;
    }
    return 0;
  }
}
class StandardShipping implements IShippingCalculator {
  calculate(q) {
    return 5 + q * 0.5;
  }
}
class ExpressShipping implements IShippingCalculator {
  calculate(q) {
    let a = 12 + q * 1.0;
    if (q >= 4) a += 6;
    return a;
  }
}
class EconomyShipping implements IShippingCalculator {
  calculate(q) {
    return 3 + q * 0.25;
  }
}
class ShippingFactory {
  static create(type: string): IShippingCalculator {
    if (type === 'std') return new StandardShipping();
    if (type === 'exp') return new ExpressShipping();
    return new EconomyShipping();
  }
}
class Order {
  constructor(
    public id: number,
    public type: string,
    public quantity: number,
    public unitPrice: number,
    public taxType: string,
    public customerType: string,
    public orderCount: number
  ) {}
}
class OrderService {
  constructor(
    private tax: ITaxCalculator,
    private disc: IDiscountCalculator
  ) {}
  process(o: Order) {
    const sub = o.quantity * o.unitPrice;
    const tax = this.tax.calculate(sub, o.taxType);
    const ship = ShippingFactory.create(o.type).calculate(o.quantity);
    const d = this.disc.calculate(sub, o.customerType, o.orderCount);
    const total = sub + tax + ship - d;
    return { id: o.id, subtotal: sub, tax, shipping: ship, discount: d, total, type: o.type };
  }
}
function processOrders() {
  const orders = [
    new Order(1, 'std', 2, 15.0, 'gen', 'premium', 6),
    new Order(2, 'exp', 1, 25.0, 'gen', 'regular', 2),
    new Order(3, 'eco', 5, 9.5, 'red', 'premium', 12),
    new Order(4, 'std', 3, 12.0, 'gen', 'regular', 1),
    new Order(5, 'exp', 4, 18.0, 'gen', 'premium', 8)
  ];
  const service = new OrderService(new TaxCalculator(), new DiscountCalculator());
  let totalRevenue = 0,
    totalDiscounts = 0,
    totalTaxes = 0;
  const results = [];
  for (const o of orders) {
    const r = service.process(o);
    totalRevenue += r.total;
    totalDiscounts += r.discount;
    totalTaxes += r.tax;
    results.push(r);
  }
  console.log('=== BOOKLY REPORT ===');
  console.log('Total pedidos: ' + orders.length);
  console.log('---');
  for (const r of results) {
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
  console.log('Ingresos totales: €' + totalRevenue.toFixed(2));
  console.log('Descuentos totales: €' + totalDiscounts.toFixed(2));
  console.log('Impuestos totales: €' + totalTaxes.toFixed(2));
  console.log('=====================');
  return results;
}
if (require.main === module) {
  processOrders();
}
export { processOrders };
