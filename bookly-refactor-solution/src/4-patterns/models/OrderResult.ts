export class OrderResult {
  constructor(
    public readonly id: number,
    public readonly subtotal: number,
    public readonly tax: number,
    public readonly shipping: number,
    public readonly discount: number,
    public readonly total: number,
    public readonly type: string
  ) {}

  static create(
    id: number,
    subtotal: number,
    tax: number,
    shipping: number,
    discount: number,
    type: string
  ): OrderResult {
    const total = subtotal + tax + shipping - discount;
    return new OrderResult(id, subtotal, tax, shipping, discount, total, type);
  }
}
