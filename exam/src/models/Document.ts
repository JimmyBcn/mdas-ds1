export abstract class Document {
  protected fileName: string;
  protected fileExtension: string;
  protected fileSizeInMB: number;
  protected metadata: Record<string, string>;

  constructor(
    fileName: string,
    fileSizeInMB: number,
    metadata: Record<string, string> = {},
    fileExtension: string
  ) {
    this.fileName = fileName;
    this.fileSizeInMB = fileSizeInMB;
    this.metadata = metadata;
    this.fileExtension = fileExtension;
  }

  public getFileName(): string {
    return this.fileName;
  }

  public getFileExtension(): string {
    return this.fileExtension;
  }

  public getFileSizeInMB(): number {
    return this.fileSizeInMB;
  }

  public getMetadata(): Record<string, string> {
    return this.metadata;
  }

  public getMetadataValue(key: string): string | undefined {
    return this.metadata[key];
  }

  public abstract getDocumentType(): string;
}
