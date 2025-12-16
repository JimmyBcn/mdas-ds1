export class Order {
  constructor(
    public readonly id: number,
    public readonly shippingType: string,
    public readonly quantity: number,
    public readonly unitPrice: number,
    public readonly taxType: string,
    public readonly customerType: string,
    public readonly orderCount: number
  ) {}

  calculateSubtotal(): number {
    return this.quantity * this.unitPrice;
  }
}
