import { Document } from "../models/Document";
import { ValidationResult } from "./ValidationResult";

export abstract class DocumentValidator {
  protected maxSizeInMB: number;
  protected allowedExtensions: string[];
  protected requiredMetadataKeys: string[];

  constructor(
    maxSizeInMB: number,
    allowedExtensions: string[],
    requiredMetadataKeys: string[]
  ) {
    this.maxSizeInMB = maxSizeInMB;
    this.allowedExtensions = allowedExtensions;
    this.requiredMetadataKeys = requiredMetadataKeys;
  }

  public validate(document: Document): ValidationResult {
    const result = new ValidationResult();

    this.validateFileSize(document, result);
    this.validateFileExtension(document, result);
    this.validateMetadata(document, result);

    return result;
  }

  private validateFileSize(document: Document, result: ValidationResult): void {
    if (document.getFileSizeInMB() > this.maxSizeInMB) {
      result.addError(`File size (${document.getFileSizeInMB()} MB) exceeds the maximum allowed (${this.maxSizeInMB} MB).`);
    }
  }

  private validateFileExtension(document: Document, result: ValidationResult): void {
    const extension = document.getFileExtension().toLowerCase();
    if (!this.allowedExtensions.includes(extension)) {
      result.addError(`The extension ${extension} is not allowed.`);
    }
  }

  private validateMetadata(document: Document, result: ValidationResult): void {
    const metadata = document.getMetadata();
    for (const key of this.requiredMetadataKeys) {
      if (!metadata[key]) {
        result.addError(`The required metadata '${key}' is not present or is empty.`);
      }
    }
  }
}
