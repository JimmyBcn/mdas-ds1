// @ts-nocheck
// ShipFast Inc. - Refactored with Design Patterns
// Version 4.0 - Factory & Strategy Patterns

// ============= STRATEGY PATTERN: Interfaces =============

interface IPriceCalculator {
  calculate(weight: number, distance: number): number;
}

interface IDiscountCalculator {
  calculate(price: number, orderCount: number): number;
}

// ============= STRATEGY: Price Calculator Implementations =============

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

// ============= STRATEGY: Discount Calculator Implementations =============

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

// ============= Domain Models =============

class Shipment {
  constructor(public id: number, public weight: number, public distance: number, public type: string, public priceCalculator: IPriceCalculator) {}

  calculatePrice(): number {
    return this.priceCalculator.calculate(this.weight, this.distance);
  }
}

class Customer {
  constructor(public orderCount: number, public type: string, public discountCalculator: IDiscountCalculator) {}

  calculateDiscount(price: number): number {
    return this.discountCalculator.calculate(price, this.orderCount);
  }
}

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

// ============= FACTORY PATTERN: Shipment Factory =============

class ShipmentFactory {
  private standardCalculator: IPriceCalculator;
  private expressCalculator: IPriceCalculator;
  private sameDayCalculator: IPriceCalculator;

  constructor() {
    this.standardCalculator = new StandardPriceCalculator();
    this.expressCalculator = new ExpressPriceCalculator();
    this.sameDayCalculator = new SameDayPriceCalculator();
  }

  createStandard(id: number, weight: number, distance: number): Shipment {
    return new Shipment(id, weight, distance, "Standard", this.standardCalculator);
  }

  createExpress(id: number, weight: number, distance: number): Shipment {
    return new Shipment(id, weight, distance, "Express", this.expressCalculator);
  }

  createSameDay(id: number, weight: number, distance: number): Shipment {
    return new Shipment(id, weight, distance, "Same Day", this.sameDayCalculator);
  }

  createByType(type: string, id: number, weight: number, distance: number): Shipment {
    if (type === "standard" || type === "std") {
      return this.createStandard(id, weight, distance);
    } else if (type === "express" || type === "exp") {
      return this.createExpress(id, weight, distance);
    } else if (type === "sameday" || type === "sme") {
      return this.createSameDay(id, weight, distance);
    } else {
      return this.createStandard(id, weight, distance);
    }
  }
}

// ============= FACTORY PATTERN: Customer Factory =============

class CustomerFactory {
  private premiumCalculator: IDiscountCalculator;
  private regularCalculator: IDiscountCalculator;

  constructor() {
    this.premiumCalculator = new PremiumDiscountCalculator();
    this.regularCalculator = new RegularDiscountCalculator();
  }

  createPremium(orderCount: number): Customer {
    return new Customer(orderCount, "Premium", this.premiumCalculator);
  }

  createRegular(orderCount: number): Customer {
    return new Customer(orderCount, "Regular", this.regularCalculator);
  }

  createByType(type: string, orderCount: number): Customer {
    if (type === "premium") {
      return this.createPremium(orderCount);
    } else if (type === "regular") {
      return this.createRegular(orderCount);
    } else {
      return this.createRegular(orderCount);
    }
  }
}

// ============= FACTORY PATTERN: Order Factory =============

class OrderFactory {
  constructor(private shipmentFactory: ShipmentFactory, private customerFactory: CustomerFactory) {}

  createOrder(shipmentId: number, shipmentType: string, weight: number, distance: number, customerType: string, orderCount: number): Order {
    const shipment = this.shipmentFactory.createByType(shipmentType, shipmentId, weight, distance);

    const customer = this.customerFactory.createByType(customerType, orderCount);

    return new Order(shipment, customer);
  }
}

// ============= Services =============

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
  const reportGenerator = new ReportGenerator();

  const shipmentFactory = new ShipmentFactory();
  const customerFactory = new CustomerFactory();
  const orderFactory = new OrderFactory(shipmentFactory, customerFactory);

  // Create orders using factory - much simpler!
  const order1 = orderFactory.createOrder(1, "std", 2.5, 150, "premium", 5);
  const order2 = orderFactory.createOrder(2, "exp", 1.2, 300, "regular", 2);
  const order3 = orderFactory.createOrder(3, "std", 5.0, 50, "premium", 12);
  const order4 = orderFactory.createOrder(4, "sme", 0.8, 500, "regular", 1);
  const order5 = orderFactory.createOrder(5, "exp", 3.0, 200, "premium", 8);

  orderRepository.add(order1);
  orderRepository.add(order2);
  orderRepository.add(order3);
  orderRepository.add(order4);
  orderRepository.add(order5);

  orderProcessor.processMultiple(orderRepository.getAll());
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
