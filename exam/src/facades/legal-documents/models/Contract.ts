export class Contract {
  constructor(
    public readonly id: number,
    public readonly author: string,
    public readonly version: number,
    public readonly size: number
  ) {}

  private getId(): number {
    return this.id;
  }
  private getAuthor(): string {
    return this.author;
  }
  private getVersion(): number {
    return this.id;
  }
  private getSize(): number {
    return this.size;
  }
}
