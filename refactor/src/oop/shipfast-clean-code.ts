// @ts-nocheck
// ShipFast Inc. - Refactored with Clean Code principles
// Version 1.0 - Clean Code

// Constants for pricing
const STANDARD_BASE_PRICE = 5;
const STANDARD_WEIGHT_RATE = 2;
const STANDARD_DISTANCE_RATE = 0.01;
const STANDARD_HEAVY_SURCHARGE = 10;

const EXPRESS_BASE_PRICE = 10;
const EXPRESS_WEIGHT_RATE = 3;
const EXPRESS_DISTANCE_RATE = 0.02;
const EXPRESS_HEAVY_SURCHARGE = 15;
const EXPRESS_LONG_DISTANCE_SURCHARGE = 20;

const SAMEDAY_BASE_PRICE = 3;
const SAMEDAY_WEIGHT_RATE = 1.5;
const SAMEDAY_DISTANCE_RATE = 0.005;

const HEAVY_WEIGHT_THRESHOLD = 5;
const LONG_DISTANCE_THRESHOLD = 200;

// Constants for discounts
const PREMIUM_HIGH_VOLUME_THRESHOLD = 10;
const PREMIUM_MEDIUM_VOLUME_THRESHOLD = 5;
const PREMIUM_HIGH_VOLUME_DISCOUNT = 0.2;
const PREMIUM_MEDIUM_VOLUME_DISCOUNT = 0.15;
const PREMIUM_LOW_VOLUME_DISCOUNT = 0.1;

const REGULAR_HIGH_VOLUME_THRESHOLD = 10;
const REGULAR_MEDIUM_VOLUME_THRESHOLD = 5;
const REGULAR_HIGH_VOLUME_DISCOUNT = 0.1;
const REGULAR_MEDIUM_VOLUME_DISCOUNT = 0.05;

// Type definitions
type ShipmentInput = {
  id: number;
  shipmentType: string;
  weight: number;
  distance: number;
  customerType: string;
  orderCount: number;
};

type ShipmentResult = {
  id: number;
  price: number;
  discount: number;
  final: number;
  type: string;
};

function processShipments() {
  const shipmentsData: ShipmentInput[] = [
    { id: 1, shipmentType: "std", weight: 2.5, distance: 150, customerType: "premium", orderCount: 5 },
    { id: 2, shipmentType: "exp", weight: 1.2, distance: 300, customerType: "regular", orderCount: 2 },
    { id: 3, shipmentType: "std", weight: 5.0, distance: 50, customerType: "premium", orderCount: 12 },
    { id: 4, shipmentType: "sme", weight: 0.8, distance: 500, customerType: "regular", orderCount: 1 },
    { id: 5, shipmentType: "exp", weight: 3.0, distance: 200, customerType: "premium", orderCount: 8 },
  ];

  let totalRevenue = 0;
  let totalDiscounts = 0;
  const results: ShipmentResult[] = [];

  for (let i = 0; i < shipmentsData.length; i++) {
    const shipment = shipmentsData[i];

    const basePrice = calculateBasePrice(shipment.shipmentType, shipment.weight, shipment.distance);

    const discountAmount = calculateDiscount(basePrice, shipment.customerType, shipment.orderCount);

    const finalPrice = basePrice - discountAmount;

    totalRevenue = totalRevenue + finalPrice;
    totalDiscounts = totalDiscounts + discountAmount;

    results.push({
      id: shipment.id,
      price: basePrice,
      discount: discountAmount,
      final: finalPrice,
      type: shipment.shipmentType,
    });
  }

  generateReport(results, totalRevenue, totalDiscounts);

  return results;
}

function calculateBasePrice(shipmentType: string, weight: number, distance: number): number {
  let price = 0;

  if (shipmentType === "std") {
    price = calculateStandardPrice(weight, distance);
  } else if (shipmentType === "exp") {
    price = calculateExpressPrice(weight, distance);
  } else if (shipmentType === "sme") {
    price = calculateSameDayPrice(weight, distance);
  }

  return price;
}

function calculateStandardPrice(weight: number, distance: number): number {
  let price = STANDARD_BASE_PRICE + weight * STANDARD_WEIGHT_RATE + distance * STANDARD_DISTANCE_RATE;

  if (weight > HEAVY_WEIGHT_THRESHOLD) {
    price = price + STANDARD_HEAVY_SURCHARGE;
  }

  return price;
}

function calculateExpressPrice(weight: number, distance: number): number {
  let price = EXPRESS_BASE_PRICE + weight * EXPRESS_WEIGHT_RATE + distance * EXPRESS_DISTANCE_RATE;

  if (weight > HEAVY_WEIGHT_THRESHOLD) {
    price = price + EXPRESS_HEAVY_SURCHARGE;
  }

  if (distance > LONG_DISTANCE_THRESHOLD) {
    price = price + EXPRESS_LONG_DISTANCE_SURCHARGE;
  }

  return price;
}

function calculateSameDayPrice(weight: number, distance: number): number {
  const price = SAMEDAY_BASE_PRICE + weight * SAMEDAY_WEIGHT_RATE + distance * SAMEDAY_DISTANCE_RATE;

  return price;
}

function calculateDiscount(basePrice: number, customerType: string, orderCount: number): number {
  let discountAmount = 0;

  if (customerType === "premium") {
    discountAmount = calculatePremiumDiscount(basePrice, orderCount);
  } else if (customerType === "regular") {
    discountAmount = calculateRegularDiscount(basePrice, orderCount);
  }

  return discountAmount;
}

function calculatePremiumDiscount(basePrice: number, orderCount: number): number {
  let discountAmount = 0;

  if (orderCount >= PREMIUM_HIGH_VOLUME_THRESHOLD) {
    discountAmount = basePrice * PREMIUM_HIGH_VOLUME_DISCOUNT;
  } else if (orderCount >= PREMIUM_MEDIUM_VOLUME_THRESHOLD) {
    discountAmount = basePrice * PREMIUM_MEDIUM_VOLUME_DISCOUNT;
  } else {
    discountAmount = basePrice * PREMIUM_LOW_VOLUME_DISCOUNT;
  }

  return discountAmount;
}

function calculateRegularDiscount(basePrice: number, orderCount: number): number {
  let discountAmount = 0;

  if (orderCount >= REGULAR_HIGH_VOLUME_THRESHOLD) {
    discountAmount = basePrice * REGULAR_HIGH_VOLUME_DISCOUNT;
  } else if (orderCount >= REGULAR_MEDIUM_VOLUME_THRESHOLD) {
    discountAmount = basePrice * REGULAR_MEDIUM_VOLUME_DISCOUNT;
  }

  return discountAmount;
}

function generateReport(results: ShipmentResult[], totalRevenue: number, totalDiscounts: number): void {
  console.log("=== SHIPFAST REPORT ===");
  console.log("Total shipments: " + results.length);
  console.log("---");

  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    console.log("Shipment #" + result.id + " | Type: " + result.type + " | Price: $" + result.price.toFixed(2) + " | Discount: $" + result.discount.toFixed(2) + " | Final: $" + result.final.toFixed(2));
  }

  console.log("---");
  console.log("Total Revenue: $" + totalRevenue.toFixed(2));
  console.log("Total Discounts: $" + totalDiscounts.toFixed(2));
  console.log("======================");
}

// Run only if this is the main module
if (require.main === module) {
  processShipments();
}

export { processShipments };
