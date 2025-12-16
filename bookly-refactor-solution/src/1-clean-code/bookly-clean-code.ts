// ============================================================================
// TAX CONFIGURATION
// ============================================================================

const TAX_TYPE_GENERAL = 'gen';
const TAX_TYPE_REDUCED = 'red';

const GENERAL_TAX_RATE = 0.1;
const REDUCED_TAX_RATE = 0.04;

// ============================================================================
// SHIPPING CONFIGURATION
// ============================================================================

const SHIPPING_TYPE_STANDARD = 'std';
const SHIPPING_TYPE_EXPRESS = 'exp';
const SHIPPING_TYPE_ECONOMY = 'eco';

const STANDARD_SHIPPING_BASE_COST = 5;
const STANDARD_SHIPPING_PER_ITEM = 0.5;

const EXPRESS_SHIPPING_BASE_COST = 12;
const EXPRESS_SHIPPING_PER_ITEM = 1.0;
const EXPRESS_SHIPPING_BULK_FEE = 6;
const EXPRESS_SHIPPING_BULK_THRESHOLD = 4;

const ECONOMY_SHIPPING_BASE_COST = 3;
const ECONOMY_SHIPPING_PER_ITEM = 0.25;

// ============================================================================
// CUSTOMER & DISCOUNT CONFIGURATION
// ============================================================================

const CUSTOMER_TYPE_PREMIUM = 'premium';
const CUSTOMER_TYPE_REGULAR = 'regular';

const PREMIUM_HIGH_TIER_THRESHOLD = 10;
const PREMIUM_HIGH_TIER_DISCOUNT = 0.15;

const PREMIUM_MID_TIER_THRESHOLD = 5;
const PREMIUM_MID_TIER_DISCOUNT = 0.1;

const PREMIUM_LOW_TIER_DISCOUNT = 0.05;

const REGULAR_HIGH_TIER_THRESHOLD = 10;
const REGULAR_HIGH_TIER_DISCOUNT = 0.05;

const REGULAR_MID_TIER_THRESHOLD = 5;
const REGULAR_MID_TIER_DISCOUNT = 0.02;

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

type Order = {
  id: number;
  type: string;
  quantity: number;
  unitPrice: number;
  taxType: string;
  customerType: string;
  orderCount: number;
};

type OrderResult = {
  id: number;
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;
  total: number;
  type: string;
};

// ============================================================================
// CALCULATION FUNCTIONS
// ============================================================================

function calculateTax(subtotal: number, taxType: string): number {
  return taxType === TAX_TYPE_GENERAL ? subtotal * GENERAL_TAX_RATE : subtotal * REDUCED_TAX_RATE;
}

function calculateDiscount(subtotal: number, customerType: string, orderCount: number): number {
  if (customerType === CUSTOMER_TYPE_PREMIUM) {
    if (orderCount >= PREMIUM_HIGH_TIER_THRESHOLD) {
      return subtotal * PREMIUM_HIGH_TIER_DISCOUNT;
    }
    if (orderCount >= PREMIUM_MID_TIER_THRESHOLD) {
      return subtotal * PREMIUM_MID_TIER_DISCOUNT;
    }
    return subtotal * PREMIUM_LOW_TIER_DISCOUNT;
  }

  if (customerType === CUSTOMER_TYPE_REGULAR) {
    if (orderCount >= REGULAR_HIGH_TIER_THRESHOLD) {
      return subtotal * REGULAR_HIGH_TIER_DISCOUNT;
    }
    if (orderCount >= REGULAR_MID_TIER_THRESHOLD) {
      return subtotal * REGULAR_MID_TIER_DISCOUNT;
    }
    return 0;
  }

  return 0;
}

function calculateShippingCost(shippingType: string, quantity: number): number {
  if (shippingType === SHIPPING_TYPE_STANDARD) {
    return STANDARD_SHIPPING_BASE_COST + quantity * STANDARD_SHIPPING_PER_ITEM;
  }

  if (shippingType === SHIPPING_TYPE_EXPRESS) {
    let shippingCost = EXPRESS_SHIPPING_BASE_COST + quantity * EXPRESS_SHIPPING_PER_ITEM;
    if (quantity >= EXPRESS_SHIPPING_BULK_THRESHOLD) {
      shippingCost += EXPRESS_SHIPPING_BULK_FEE;
    }
    return shippingCost;
  }

  return ECONOMY_SHIPPING_BASE_COST + quantity * ECONOMY_SHIPPING_PER_ITEM;
}

// ============================================================================
// ORDER PROCESSING
// ============================================================================

function processOrders(): OrderResult[] {
  const orders: Order[] = [
    {
      id: 1,
      type: SHIPPING_TYPE_STANDARD,
      quantity: 2,
      unitPrice: 15.0,
      taxType: TAX_TYPE_GENERAL,
      customerType: CUSTOMER_TYPE_PREMIUM,
      orderCount: 6
    },
    {
      id: 2,
      type: SHIPPING_TYPE_EXPRESS,
      quantity: 1,
      unitPrice: 25.0,
      taxType: TAX_TYPE_GENERAL,
      customerType: CUSTOMER_TYPE_REGULAR,
      orderCount: 2
    },
    {
      id: 3,
      type: SHIPPING_TYPE_ECONOMY,
      quantity: 5,
      unitPrice: 9.5,
      taxType: TAX_TYPE_REDUCED,
      customerType: CUSTOMER_TYPE_PREMIUM,
      orderCount: 12
    },
    {
      id: 4,
      type: SHIPPING_TYPE_STANDARD,
      quantity: 3,
      unitPrice: 12.0,
      taxType: TAX_TYPE_GENERAL,
      customerType: CUSTOMER_TYPE_REGULAR,
      orderCount: 1
    },
    {
      id: 5,
      type: SHIPPING_TYPE_EXPRESS,
      quantity: 4,
      unitPrice: 18.0,
      taxType: TAX_TYPE_GENERAL,
      customerType: CUSTOMER_TYPE_PREMIUM,
      orderCount: 8
    }
  ];

  let totalRevenue = 0;
  let totalDiscounts = 0;
  let totalTaxes = 0;
  const results: OrderResult[] = [];

  for (const order of orders) {
    const subtotal = order.quantity * order.unitPrice;
    const tax = calculateTax(subtotal, order.taxType);
    const shippingCost = calculateShippingCost(order.type, order.quantity);
    const discount = calculateDiscount(subtotal, order.customerType, order.orderCount);
    const total = subtotal + tax + shippingCost - discount;

    totalRevenue += total;
    totalDiscounts += discount;
    totalTaxes += tax;

    results.push({
      id: order.id,
      subtotal: subtotal,
      tax,
      shipping: shippingCost,
      discount: discount,
      total,
      type: order.type
    });
  }

  printReport(orders, results, totalRevenue, totalDiscounts, totalTaxes);

  return results;
}

// ============================================================================
// REPORTING
// ============================================================================

function printReport(
  orders: Order[],
  results: OrderResult[],
  totalRevenue: number,
  totalDiscounts: number,
  totalTaxes: number
): void {
  console.log(`=== BOOKLY REPORT === | Total pedidos: ${orders.length}`);

  for (const result of results) {
    console.log(
      `Pedido #${result.id} | Tipo: ${result.type} | Subtotal: €${result.subtotal.toFixed(2)} | IVA: €${result.tax.toFixed(2)} | Envío: €${result.shipping.toFixed(2)} | Descuento: €${result.discount.toFixed(2)} | Total: €${result.total.toFixed(2)}`
    );
  }

  console.log(
    `Ingresos totales: €${totalRevenue.toFixed(2)} | Descuentos totales: €${totalDiscounts.toFixed(2)} | Impuestos totales: €${totalTaxes.toFixed(2)}`
  );
  console.log('=====================');
}

// ============================================================================
// MODULE EXECUTION
// ============================================================================

if (require.main === module) {
  processOrders();
}

export { processOrders };
