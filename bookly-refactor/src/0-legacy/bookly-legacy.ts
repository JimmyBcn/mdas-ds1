// @ts-nocheck
function processOrders() {
  const ordersData = [
    { id: 1, typ: 'std', qty: 2, prc: 15.0, tax: 'gen', cus: 'premium', ord: 6 },
    { id: 2, typ: 'exp', qty: 1, prc: 25.0, tax: 'gen', cus: 'regular', ord: 2 },
    { id: 3, typ: 'eco', qty: 5, prc: 9.5, tax: 'red', cus: 'premium', ord: 12 },
    { id: 4, typ: 'std', qty: 3, prc: 12.0, tax: 'gen', cus: 'regular', ord: 1 },
    { id: 5, typ: 'exp', qty: 4, prc: 18.0, tax: 'gen', cus: 'premium', ord: 8 }
  ];
  let totalRevenue = 0,
    totalDiscounts = 0,
    totalTaxes = 0;
  const results = [];
  for (let i = 0; i < ordersData.length; i++) {
    const order = ordersData[i];
    const subtotal = order.qty * order.prc;
    let taxAmount = 0;
    if (order.tax === 'gen') taxAmount = subtotal * 0.1;
    else if (order.tax === 'red') taxAmount = subtotal * 0.04;
    let shippingCost = 0;
    if (order.typ === 'std') shippingCost = 5 + order.qty * 0.5;
    else if (order.typ === 'exp') {
      shippingCost = 12 + order.qty * 1.0;
      if (order.qty >= 4) shippingCost += 6;
    } else if (order.typ === 'eco') shippingCost = 3 + order.qty * 0.25;
    let discountAmount = 0;
    if (order.cus === 'premium') {
      if (order.ord >= 10) discountAmount = subtotal * 0.15;
      else if (order.ord >= 5) discountAmount = subtotal * 0.1;
      else discountAmount = subtotal * 0.05;
    } else {
      if (order.ord >= 10) discountAmount = subtotal * 0.05;
      else if (order.ord >= 5) discountAmount = subtotal * 0.02;
    }
    const total = subtotal + taxAmount + shippingCost - discountAmount;
    totalRevenue += total;
    totalDiscounts += discountAmount;
    totalTaxes += taxAmount;
    results.push({
      id: order.id,
      subtotal,
      tax: taxAmount,
      shipping: shippingCost,
      discount: discountAmount,
      total,
      type: order.typ
    });
  }
  console.log(`=== BOOKLY REPORT === | Total pedidos: ${ordersData.length}`);
  for (let j = 0; j < results.length; j++) {
    const result = results[j];
    console.log(
      `Pedido #${result.id} | Tipo: ${result.type} | Subtotal: €${result.subtotal.toFixed(2)} | IVA: €${result.tax.toFixed(2)} | Envío: €${result.shipping.toFixed(2)} | Descuento: €${result.discount.toFixed(2)} | Total: €${result.total.toFixed(2)}`
    );
  }
  console.log(
    `Ingresos totales: €${totalRevenue.toFixed(2)} | Descuentos totales: €${totalDiscounts.toFixed(2)} | Impuestos totales: €${totalTaxes.toFixed(2)}`
  );
  console.log('=====================');
  return results;
}
if (require.main === module) {
  processOrders();
}
export { processOrders };
