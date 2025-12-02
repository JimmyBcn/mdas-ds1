// @ts-nocheck
function processOrders() {
  const data = [
    { id: 1, typ: 'std', qty: 2, prc: 15.0, tax: 'gen', cus: 'premium', ord: 6 },
    { id: 2, typ: 'exp', qty: 1, prc: 25.0, tax: 'gen', cus: 'regular', ord: 2 },
    { id: 3, typ: 'eco', qty: 5, prc: 9.5, tax: 'red', cus: 'premium', ord: 12 },
    { id: 4, typ: 'std', qty: 3, prc: 12.0, tax: 'gen', cus: 'regular', ord: 1 },
    { id: 5, typ: 'exp', qty: 4, prc: 18.0, tax: 'gen', cus: 'premium', ord: 8 }
  ];
  let totRev = 0,
    totDsc = 0,
    totTax = 0;
  const results = [];
  for (let i = 0; i < data.length; i++) {
    const o = data[i];
    const subtotal = o.qty * o.prc;
    let taxAmt = 0;
    if (o.tax === 'gen') taxAmt = subtotal * 0.1;
    else if (o.tax === 'red') taxAmt = subtotal * 0.04;
    let ship = 0;
    if (o.typ === 'std') ship = 5 + o.qty * 0.5;
    else if (o.typ === 'exp') {
      ship = 12 + o.qty * 1.0;
      if (o.qty >= 4) ship += 6;
    } else if (o.typ === 'eco') ship = 3 + o.qty * 0.25;
    let dsc = 0;
    if (o.cus === 'premium') {
      if (o.ord >= 10) dsc = subtotal * 0.15;
      else if (o.ord >= 5) dsc = subtotal * 0.1;
      else dsc = subtotal * 0.05;
    } else {
      if (o.ord >= 10) dsc = subtotal * 0.05;
      else if (o.ord >= 5) dsc = subtotal * 0.02;
    }
    const total = subtotal + taxAmt + ship - dsc;
    totRev += total;
    totDsc += dsc;
    totTax += taxAmt;
    results.push({
      id: o.id,
      subtotal,
      tax: taxAmt,
      shipping: ship,
      discount: dsc,
      total,
      type: o.typ
    });
  }
  console.log('=== BOOKLY REPORT ===');
  console.log('Total pedidos: ' + data.length);
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
  console.log('Ingresos totales: €' + totRev.toFixed(2));
  console.log('Descuentos totales: €' + totDsc.toFixed(2));
  console.log('Impuestos totales: €' + totTax.toFixed(2));
  console.log('=====================');
  return results;
}
if (require.main === module) {
  processOrders();
}
export { processOrders };
