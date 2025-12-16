import { Document } from "./Document";

export class Contract extends Document {
  private static readonly MAX_SIZE_BYTES = 3 * 1024 * 1024; // 3 MB

  private author: string;
  private version: string;
  
  constructor(fileName: string, fileSize: number, author: string, version: string) {
    super(fileName, fileSize);
    this.author = author;
    this.version = version;
  }

  public getAuthor(): string {
    return this.author;
  }

  public getVersion(): string {
    return this.version;
  }

  protected getMaxSizeInBytes(): number {
    return Contract.MAX_SIZE_BYTES;
  }

  protected getAllowedExtensions(): string[] {
    return ["pdf"];
  }

  public validate(): string[] {
    const errors = super.validate();

    if (!this.author || this.author.trim() === "") {
      errors.push("Author is required for legal contracts");
    }

    if (!this.version || this.version.trim() === "") {
      errors.push("Version is required for legal contracts");
    }

    return errors;
  }
}
