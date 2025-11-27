// @ts-nocheck
// ShipFast Inc. - Refactored with SOLID principles
// Version 3.0 - SOLID (SRP + OCP)

// ============= OPEN/CLOSED: Interfaces for Extension =============

interface IPriceCalculator {
  calculate(weight: number, distance: number): number;
}

interface IDiscountCalculator {
  calculate(price: number, orderCount: number): number;
}

// ============= SINGLE RESPONSIBILITY: Price Calculators =============

class StandardPriceCalculator implements IPriceCalculator {
  private readonly BASE_PRICE = 5;
  private readonly WEIGHT_RATE = 2;
  private readonly DISTANCE_RATE = 0.01;
  private readonly HEAVY_SURCHARGE = 10;
  private readonly HEAVY_WEIGHT_THRESHOLD = 5;

  calculate(weight: number, distance: number): number {
    let price = this.BASE_PRICE + weight * this.WEIGHT_RATE + distance * this.DISTANCE_RATE;

    if (weight > this.HEAVY_WEIGHT_THRESHOLD) {
      price = price + this.HEAVY_SURCHARGE;
    }

    return price;
  }
}

class ExpressPriceCalculator implements IPriceCalculator {
  private readonly BASE_PRICE = 10;
  private readonly WEIGHT_RATE = 3;
  private readonly DISTANCE_RATE = 0.02;
  private readonly HEAVY_SURCHARGE = 15;
  private readonly LONG_DISTANCE_SURCHARGE = 20;
  private readonly HEAVY_WEIGHT_THRESHOLD = 5;
  private readonly LONG_DISTANCE_THRESHOLD = 200;

  calculate(weight: number, distance: number): number {
    let price = this.BASE_PRICE + weight * this.WEIGHT_RATE + distance * this.DISTANCE_RATE;

    if (weight > this.HEAVY_WEIGHT_THRESHOLD) {
      price = price + this.HEAVY_SURCHARGE;
    }

    if (distance > this.LONG_DISTANCE_THRESHOLD) {
      price = price + this.LONG_DISTANCE_SURCHARGE;
    }

    return price;
  }
}

class SameDayPriceCalculator implements IPriceCalculator {
  private readonly BASE_PRICE = 3;
  private readonly WEIGHT_RATE = 1.5;
  private readonly DISTANCE_RATE = 0.005;

  calculate(weight: number, distance: number): number {
    const price = this.BASE_PRICE + weight * this.WEIGHT_RATE + distance * this.DISTANCE_RATE;

    return price;
  }
}

// ============= SINGLE RESPONSIBILITY: Discount Calculators =============

class PremiumDiscountCalculator implements IDiscountCalculator {
  private readonly HIGH_VOLUME_THRESHOLD = 10;
  private readonly MEDIUM_VOLUME_THRESHOLD = 5;
  private readonly HIGH_VOLUME_DISCOUNT = 0.2;
  private readonly MEDIUM_VOLUME_DISCOUNT = 0.15;
  private readonly LOW_VOLUME_DISCOUNT = 0.1;

  calculate(price: number, orderCount: number): number {
    let discountRate = this.LOW_VOLUME_DISCOUNT;

    if (orderCount >= this.HIGH_VOLUME_THRESHOLD) {
      discountRate = this.HIGH_VOLUME_DISCOUNT;
    } else if (orderCount >= this.MEDIUM_VOLUME_THRESHOLD) {
      discountRate = this.MEDIUM_VOLUME_DISCOUNT;
    }

    return price * discountRate;
  }
}

class RegularDiscountCalculator implements IDiscountCalculator {
  private readonly HIGH_VOLUME_THRESHOLD = 10;
  private readonly MEDIUM_VOLUME_THRESHOLD = 5;
  private readonly HIGH_VOLUME_DISCOUNT = 0.1;
  private readonly MEDIUM_VOLUME_DISCOUNT = 0.05;

  calculate(price: number, orderCount: number): number {
    let discountRate = 0;

    if (orderCount >= this.HIGH_VOLUME_THRESHOLD) {
      discountRate = this.HIGH_VOLUME_DISCOUNT;
    } else if (orderCount >= this.MEDIUM_VOLUME_THRESHOLD) {
      discountRate = this.MEDIUM_VOLUME_DISCOUNT;
    }

    return price * discountRate;
  }
}

// ============= SINGLE RESPONSIBILITY: Shipment (Data Only) =============

class Shipment {
  constructor(public id: number, public weight: number, public distance: number, public type: string, public priceCalculator: IPriceCalculator) {}

  calculatePrice(): number {
    return this.priceCalculator.calculate(this.weight, this.distance);
  }
}

// ============= SINGLE RESPONSIBILITY: Customer (Data Only) =============

class Customer {
  constructor(public orderCount: number, public type: string, public discountCalculator: IDiscountCalculator) {}

  calculateDiscount(price: number): number {
    return this.discountCalculator.calculate(price, this.orderCount);
  }
}

// ============= SINGLE RESPONSIBILITY: Order (Data + Simple Logic) =============

class Order {
  private basePrice: number;
  private discountAmount: number;
  private finalPrice: number;

  constructor(public shipment: Shipment, public customer: Customer) {
    this.basePrice = 0;
    this.discountAmount = 0;
    this.finalPrice = 0;
  }

  process(): void {
    this.basePrice = this.shipment.calculatePrice();
    this.discountAmount = this.customer.calculateDiscount(this.basePrice);
    this.finalPrice = this.basePrice - this.discountAmount;
  }

  getBasePrice(): number {
    return this.basePrice;
  }

  getDiscountAmount(): number {
    return this.discountAmount;
  }

  getFinalPrice(): number {
    return this.finalPrice;
  }

  getId(): number {
    return this.shipment.id;
  }

  getShipmentType(): string {
    return this.shipment.type;
  }
}

// ============= SINGLE RESPONSIBILITY: Order Repository =============

class OrderRepository {
  private orders: Order[] = [];

  add(order: Order): void {
    this.orders.push(order);
  }

  getAll(): Order[] {
    return this.orders;
  }

  count(): number {
    return this.orders.length;
  }
}

// ============= SINGLE RESPONSIBILITY: Order Processor =============

class OrderProcessor {
  process(order: Order): void {
    order.process();
  }

  processMultiple(orders: Order[]): void {
    for (let i = 0; i < orders.length; i++) {
      this.process(orders[i]);
    }
  }
}

// ============= SINGLE RESPONSIBILITY: Report Generator =============

class ReportGenerator {
  generate(orders: Order[]): void {
    let totalRevenue = 0;
    let totalDiscounts = 0;

    console.log("=== SHIPFAST REPORT ===");
    console.log("Total shipments: " + orders.length);
    console.log("---");

    for (let i = 0; i < orders.length; i++) {
      const order = orders[i];
      totalRevenue = totalRevenue + order.getFinalPrice();
      totalDiscounts = totalDiscounts + order.getDiscountAmount();

      console.log("Shipment #" + order.getId() + " | Type: " + order.getShipmentType() + " | Price: $" + order.getBasePrice().toFixed(2) + " | Discount: $" + order.getDiscountAmount().toFixed(2) + " | Final: $" + order.getFinalPrice().toFixed(2));
    }

    console.log("---");
    console.log("Total Revenue: $" + totalRevenue.toFixed(2));
    console.log("Total Discounts: $" + totalDiscounts.toFixed(2));
    console.log("======================");
  }
}

// ============= Main Execution =============

type ShipmentResult = {
  id: number;
  price: number;
  discount: number;
  final: number;
  type: string;
};

function processShipments(): ShipmentResult[] {
  const orderRepository = new OrderRepository();
  const orderProcessor = new OrderProcessor();

  // Create calculators
  const standardCalculator = new StandardPriceCalculator();
  const expressCalculator = new ExpressPriceCalculator();
  const sameDayCalculator = new SameDayPriceCalculator();
  const premiumDiscountCalculator = new PremiumDiscountCalculator();
  const regularDiscountCalculator = new RegularDiscountCalculator();

  // Order 1
  const shipment1 = new Shipment(1, 2.5, 150, "Standard", standardCalculator);
  const customer1 = new Customer(5, "Premium", premiumDiscountCalculator);
  const order1 = new Order(shipment1, customer1);
  orderRepository.add(order1);

  // Order 2
  const shipment2 = new Shipment(2, 1.2, 300, "Express", expressCalculator);
  const customer2 = new Customer(2, "Regular", regularDiscountCalculator);
  const order2 = new Order(shipment2, customer2);
  orderRepository.add(order2);

  // Order 3
  const shipment3 = new Shipment(3, 5.0, 50, "Standard", standardCalculator);
  const customer3 = new Customer(12, "Premium", premiumDiscountCalculator);
  const order3 = new Order(shipment3, customer3);
  orderRepository.add(order3);

  // Order 4
  const shipment4 = new Shipment(4, 0.8, 500, "Same Day", sameDayCalculator);
  const customer4 = new Customer(1, "Regular", regularDiscountCalculator);
  const order4 = new Order(shipment4, customer4);
  orderRepository.add(order4);

  // Order 5
  const shipment5 = new Shipment(5, 3.0, 200, "Express", expressCalculator);
  const customer5 = new Customer(8, "Premium", premiumDiscountCalculator);
  const order5 = new Order(shipment5, customer5);
  orderRepository.add(order5);

  orderProcessor.processMultiple(orderRepository.getAll());

  const reportGenerator = new ReportGenerator();
  reportGenerator.generate(orderRepository.getAll());

  // Convert orders to results format
  const results: ShipmentResult[] = orderRepository.getAll().map((order) => ({
    id: order.getId(),
    price: order.getBasePrice(),
    discount: order.getDiscountAmount(),
    final: order.getFinalPrice(),
    type: order.getShipmentType() === "Standard" ? "std" : order.getShipmentType() === "Express" ? "exp" : "sme",
  }));

  return results;
}

// Run only if this is the main module
if (require.main === module) {
  processShipments();
}

export { processShipments };
