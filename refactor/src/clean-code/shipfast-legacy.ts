// @ts-nocheck
// Script original de ShipFast - Escrito en 72h bajo presión
// TODO: Refactorizar algún día...

function processShipments() {
  // Datos de envíos
  // typ: tipo de envío (std=standard, exp=express, sme=same-day)
  // wgt: peso en kg
  // dst: distancia en km
  // cst: tipo de cliente (premium, regular)
  // ord: número de pedidos del cliente
  const data = [
    { id: 1, typ: "std", wgt: 2.5, dst: 150, cst: "premium", ord: 5 },
    { id: 2, typ: "exp", wgt: 1.2, dst: 300, cst: "regular", ord: 2 },
    { id: 3, typ: "std", wgt: 5.0, dst: 50, cst: "premium", ord: 12 },
    { id: 4, typ: "sme", wgt: 0.8, dst: 500, cst: "regular", ord: 1 },
    { id: 5, typ: "exp", wgt: 3.0, dst: 200, cst: "premium", ord: 8 },
  ];

  let totRev = 0;
  let totDsc = 0;
  const results = [];

  for (let idx = 0; idx < data.length; idx++) {
    const shp = data[idx];
    let prc = 0;
    let dsc = 0;

    // Calculate base price
    if (shp.typ === "std") {
      prc = 5 + shp.wgt * 2 + shp.dst * 0.01;
      if (shp.wgt > 5) {
        prc = prc + 10;
      }
    } else if (shp.typ === "exp") {
      prc = 10 + shp.wgt * 3 + shp.dst * 0.02;
      if (shp.wgt > 5) {
        prc = prc + 15;
      }
      if (shp.dst > 200) {
        prc = prc + 20;
      }
    } else if (shp.typ === "sme") {
      prc = 3 + shp.wgt * 1.5 + shp.dst * 0.005;
    }

    // Apply discounts
    if (shp.cst === "premium") {
      if (shp.ord >= 10) {
        dsc = prc * 0.2;
      } else if (shp.ord >= 5) {
        dsc = prc * 0.15;
      } else {
        dsc = prc * 0.1;
      }
    } else {
      if (shp.ord >= 10) {
        dsc = prc * 0.1;
      } else if (shp.ord >= 5) {
        dsc = prc * 0.05;
      }
    }

    const fin = prc - dsc;
    totRev = totRev + fin;
    totDsc = totDsc + dsc;

    results.push({
      id: shp.id,
      price: prc,
      discount: dsc,
      final: fin,
      type: shp.typ,
    });
  }

  // Generate report
  console.log("=== SHIPFAST REPORT ===");
  console.log("Total shipments: " + data.length);
  console.log("---");
  for (let idx = 0; idx < results.length; idx++) {
    const res = results[idx];
    console.log("Shipment #" + res.id + " | Type: " + res.type + " | Price: $" + res.price.toFixed(2) + " | Discount: $" + res.discount.toFixed(2) + " | Final: $" + res.final.toFixed(2));
  }
  console.log("---");
  console.log("Total Revenue: $" + totRev.toFixed(2));
  console.log("Total Discounts: $" + totDsc.toFixed(2));
  console.log("======================");

  return results;
}

// Run only if this is the main module
if (require.main === module) {
  processShipments();
}

export { processShipments };
