// @ts-nocheck
// ShipFast Inc. - Refactored with OOP principles
// Version 2.0 - Object-Oriented Programming

// Constants
const HEAVY_WEIGHT_THRESHOLD = 5;
const LONG_DISTANCE_THRESHOLD = 200;

// ============= ABSTRACTION & INHERITANCE: Shipment Hierarchy =============

abstract class Shipment {
  constructor(public id: number, public weight: number, public distance: number) {}

  abstract calculatePrice(): number;

  isHeavy(): boolean {
    return this.weight > HEAVY_WEIGHT_THRESHOLD;
  }

  isLongDistance(): boolean {
    return this.distance > LONG_DISTANCE_THRESHOLD;
  }

  abstract getType(): string;
}

class StandardShipment extends Shipment {
  private readonly BASE_PRICE = 5;
  private readonly WEIGHT_RATE = 2;
  private readonly DISTANCE_RATE = 0.01;
  private readonly HEAVY_SURCHARGE = 10;

  calculatePrice(): number {
    let price = this.BASE_PRICE + this.weight * this.WEIGHT_RATE + this.distance * this.DISTANCE_RATE;

    if (this.isHeavy()) {
      price = price + this.HEAVY_SURCHARGE;
    }

    return price;
  }

  getType(): string {
    return "Standard";
  }
}

class ExpressShipment extends Shipment {
  private readonly BASE_PRICE = 10;
  private readonly WEIGHT_RATE = 3;
  private readonly DISTANCE_RATE = 0.02;
  private readonly HEAVY_SURCHARGE = 15;
  private readonly LONG_DISTANCE_SURCHARGE = 20;

  calculatePrice(): number {
    let price = this.BASE_PRICE + this.weight * this.WEIGHT_RATE + this.distance * this.DISTANCE_RATE;

    if (this.isHeavy()) {
      price = price + this.HEAVY_SURCHARGE;
    }

    if (this.isLongDistance()) {
      price = price + this.LONG_DISTANCE_SURCHARGE;
    }

    return price;
  }

  getType(): string {
    return "Express";
  }
}

class SameDayShipment extends Shipment {
  private readonly BASE_PRICE = 3;
  private readonly WEIGHT_RATE = 1.5;
  private readonly DISTANCE_RATE = 0.005;

  calculatePrice(): number {
    const price = this.BASE_PRICE + this.weight * this.WEIGHT_RATE + this.distance * this.DISTANCE_RATE;

    return price;
  }

  getType(): string {
    return "Same Day";
  }
}

// ============= ABSTRACTION & INHERITANCE: Customer Hierarchy =============

abstract class Customer {
  constructor(public orderCount: number) {}

  abstract applyDiscount(price: number): number;

  abstract getType(): string;
}

class PremiumCustomer extends Customer {
  private readonly HIGH_VOLUME_THRESHOLD = 10;
  private readonly MEDIUM_VOLUME_THRESHOLD = 5;
  private readonly HIGH_VOLUME_DISCOUNT = 0.2;
  private readonly MEDIUM_VOLUME_DISCOUNT = 0.15;
  private readonly LOW_VOLUME_DISCOUNT = 0.1;

  applyDiscount(price: number): number {
    let discountRate = this.LOW_VOLUME_DISCOUNT;

    if (this.orderCount >= this.HIGH_VOLUME_THRESHOLD) {
      discountRate = this.HIGH_VOLUME_DISCOUNT;
    } else if (this.orderCount >= this.MEDIUM_VOLUME_THRESHOLD) {
      discountRate = this.MEDIUM_VOLUME_DISCOUNT;
    }

    return price * discountRate;
  }

  getType(): string {
    return "Premium";
  }
}

class RegularCustomer extends Customer {
  private readonly HIGH_VOLUME_THRESHOLD = 10;
  private readonly MEDIUM_VOLUME_THRESHOLD = 5;
  private readonly HIGH_VOLUME_DISCOUNT = 0.1;
  private readonly MEDIUM_VOLUME_DISCOUNT = 0.05;

  applyDiscount(price: number): number {
    let discountRate = 0;

    if (this.orderCount >= this.HIGH_VOLUME_THRESHOLD) {
      discountRate = this.HIGH_VOLUME_DISCOUNT;
    } else if (this.orderCount >= this.MEDIUM_VOLUME_THRESHOLD) {
      discountRate = this.MEDIUM_VOLUME_DISCOUNT;
    }

    return price * discountRate;
  }

  getType(): string {
    return "Regular";
  }
}

// ============= ENCAPSULATION: Order =============

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
    this.discountAmount = this.customer.applyDiscount(this.basePrice);
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
    return this.shipment.getType();
  }
}

// ============= Report Generator =============

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

// ============= Processor =============

class ShipmentProcessor {
  private orders: Order[] = [];

  addOrder(order: Order): void {
    this.orders.push(order);
  }

  processAll(): void {
    for (let i = 0; i < this.orders.length; i++) {
      this.orders[i].process();
    }
  }

  getOrders(): Order[] {
    return this.orders;
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
  const processor = new ShipmentProcessor();

  // Order 1: Standard shipment, Premium customer
  const shipment1 = new StandardShipment(1, 2.5, 150);
  const customer1 = new PremiumCustomer(5);
  const order1 = new Order(shipment1, customer1);
  processor.addOrder(order1);

  // Order 2: Express shipment, Regular customer
  const shipment2 = new ExpressShipment(2, 1.2, 300);
  const customer2 = new RegularCustomer(2);
  const order2 = new Order(shipment2, customer2);
  processor.addOrder(order2);

  // Order 3: Standard shipment, Premium customer
  const shipment3 = new StandardShipment(3, 5.0, 50);
  const customer3 = new PremiumCustomer(12);
  const order3 = new Order(shipment3, customer3);
  processor.addOrder(order3);

  // Order 4: Same Day shipment, Regular customer
  const shipment4 = new SameDayShipment(4, 0.8, 500);
  const customer4 = new RegularCustomer(1);
  const order4 = new Order(shipment4, customer4);
  processor.addOrder(order4);

  // Order 5: Express shipment, Premium customer
  const shipment5 = new ExpressShipment(5, 3.0, 200);
  const customer5 = new PremiumCustomer(8);
  const order5 = new Order(shipment5, customer5);
  processor.addOrder(order5);

  processor.processAll();

  const reportGenerator = new ReportGenerator();
  reportGenerator.generate(processor.getOrders());

  // Convert orders to results format
  const results: ShipmentResult[] = processor.getOrders().map((order) => ({
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
