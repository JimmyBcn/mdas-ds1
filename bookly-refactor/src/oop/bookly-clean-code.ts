// @ts-nocheck
class Order {
  constructor(id, type, quantity, unitPrice, taxType, customerType, orderCount) {
    this.id = id;
    this.type = type;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
    this.taxType = taxType;
    this.customerType = customerType;
    this.orderCount = orderCount;
  }
}
class TaxCalculator {
  calculate(sub, t) {
    return t === 'gen' ? sub * 0.1 : sub * 0.04;
  }
}
class DiscountCalculator {
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
class ShippingCalculator {
  calculate(q) {
    return 0;
  }
}
class StandardShipping extends ShippingCalculator {
  calculate(q) {
    return 5 + q * 0.5;
  }
}
class ExpressShipping extends ShippingCalculator {
  calculate(q) {
    let a = 12 + q * 1.0;
    if (q >= 4) a += 6;
    return a;
  }
}
class EconomyShipping extends ShippingCalculator {
  calculate(q) {
    return 3 + q * 0.25;
  }
}
function createShipping(type) {
  if (type === 'std') return new StandardShipping();
  if (type === 'exp') return new ExpressShipping();
  return new EconomyShipping();
}
function processOrders() {
  const orders = [
    new Order(1, 'std', 2, 15.0, 'gen', 'premium', 6),
    new Order(2, 'exp', 1, 25.0, 'gen', 'regular', 2),
    new Order(3, 'eco', 5, 9.5, 'red', 'premium', 12),
    new Order(4, 'std', 3, 12.0, 'gen', 'regular', 1),
    new Order(5, 'exp', 4, 18.0, 'gen', 'premium', 8)
  ];
  const taxCalc = new TaxCalculator();
  const discCalc = new DiscountCalculator();
  let totalRevenue = 0,
    totalDiscounts = 0,
    totalTaxes = 0;
  const results = [];
  for (let i = 0; i < orders.length; i++) {
    const o = orders[i];
    const sub = o.quantity * o.unitPrice;
    const tax = taxCalc.calculate(sub, o.taxType);
    const ship = createShipping(o.type).calculate(o.quantity);
    const disc = discCalc.calculate(sub, o.customerType, o.orderCount);
    const total = sub + tax + ship - disc;
    totalRevenue += total;
    totalDiscounts += disc;
    totalTaxes += tax;
    results.push({
      id: o.id,
      subtotal: sub,
      tax,
      shipping: ship,
      discount: disc,
      total,
      type: o.type
    });
  }
  console.log('=== BOOKLY REPORT ===');
  console.log('Total pedidos: ' + orders.length);
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
