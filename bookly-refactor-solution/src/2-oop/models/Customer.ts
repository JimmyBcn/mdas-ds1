export class Customer {
  constructor(
    public readonly type: string,
    public readonly orderCount: number
  ) {}

  isPremium(): boolean {
    return this.type === 'premium';
  }

  isRegular(): boolean {
    return this.type === 'regular';
  }
}
