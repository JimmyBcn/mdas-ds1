// Base abstract class for different types of documents
export abstract class Document {
  protected fileName: string;
  protected fileSize: number;
  protected extension: string;

  constructor(fileName: string, fileSize: number) {
    this.fileName = fileName;
    this.fileSize = fileSize;
    this.extension = this.extractExtension(fileName);
  }

  // Extract file extension from file name
  private extractExtension(fileName: string): string {
    const parts = fileName.split(".");
    if (parts.length < 2) {
      return "";
    }
    return parts[parts.length - 1].toLowerCase();
  }

  public getFileName(): string {
    return this.fileName;
  }

  public getFileSize(): number {
    return this.fileSize;
  }

  public getExtension(): string {
    return this.extension;
  }

  protected abstract getMaxSizeInBytes(): number;
  protected abstract getAllowedExtensions(): string[];

  public validate(): string[] {
    const errors: string[] = [];

    if (!this.fileName || this.fileName.trim() === "") {
      errors.push("Name cannot be empty");
    }

    if (this.fileSize > this.getMaxSizeInBytes()) {
      const maxSizeMB = this.getMaxSizeInBytes() / (1024 * 1024);
      errors.push(`File exceeds the maximum allowed size of ${maxSizeMB} MB`);
    }

    if (!this.getAllowedExtensions().includes(this.extension)) {
      errors.push(
        `Invalid extension. Allowed extensions: ${this.getAllowedExtensions().join(", ")}`
      );
    }

    return errors;
  }
}
