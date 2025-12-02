// @ts-nocheck
class TaxStrategy {
  calc(sub: number, t: string) {
    return t === 'gen' ? sub * 0.1 : sub * 0.04;
  }
}
class PremiumDiscountStrategy {
  calc(sub: number, orders: number) {
    if (orders >= 10) return sub * 0.15;
    if (orders >= 5) return sub * 0.1;
    return sub * 0.05;
  }
}
class RegularDiscountStrategy {
  calc(sub: number, orders: number) {
    if (orders >= 10) return sub * 0.05;
    if (orders >= 5) return sub * 0.02;
    return 0;
  }
}
class DiscountFactory {
  static create(customer: string) {
    return customer === 'premium' ? new PremiumDiscountStrategy() : new RegularDiscountStrategy();
  }
}
class ShippingBuilder {
  static build(type: string) {
    if (type === 'std') return { calculate: (q: number) => 5 + q * 0.5 };
    if (type === 'exp')
      return {
        calculate: (q: number) => {
          let a = 12 + q * 1.0;
          if (q >= 4) a += 6;
          return a;
        }
      };
    return { calculate: (q: number) => 3 + q * 0.25 };
  }
}
class OrderFacade {
  constructor() {
    this.tax = new TaxStrategy();
  }
  process(o) {
    const sub = o.quantity * o.unitPrice;
    const tax = this.tax.calc(sub, o.taxType);
    const ship = ShippingBuilder.build(o.type).calculate(o.quantity);
    const disc = DiscountFactory.create(o.customerType).calc(sub, o.orderCount);
    const total = sub + tax + ship - disc;
    return { id: o.id, subtotal: sub, tax, shipping: ship, discount: disc, total, type: o.type };
  }
}
function processOrders() {
  const orders = [
    {
      id: 1,
      type: 'std',
      quantity: 2,
      unitPrice: 15.0,
      taxType: 'gen',
      customerType: 'premium',
      orderCount: 6
    },
    {
      id: 2,
      type: 'exp',
      quantity: 1,
      unitPrice: 25.0,
      taxType: 'gen',
      customerType: 'regular',
      orderCount: 2
    },
    {
      id: 3,
      type: 'eco',
      quantity: 5,
      unitPrice: 9.5,
      taxType: 'red',
      customerType: 'premium',
      orderCount: 12
    },
    {
      id: 4,
      type: 'std',
      quantity: 3,
      unitPrice: 12.0,
      taxType: 'gen',
      customerType: 'regular',
      orderCount: 1
    },
    {
      id: 5,
      type: 'exp',
      quantity: 4,
      unitPrice: 18.0,
      taxType: 'gen',
      customerType: 'premium',
      orderCount: 8
    }
  ];
  const facade = new OrderFacade();
  let totalRevenue = 0,
    totalDiscounts = 0,
    totalTaxes = 0;
  const results = [];
  for (const o of orders) {
    const r = facade.process(o);
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
