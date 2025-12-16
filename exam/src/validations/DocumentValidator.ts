import { Document } from "../models/Document";
import { ValidatedResult } from "../models/ValidatedResult";

export abstract class DocumentValidator {
  protected errors: string[] = [];

  // File size validation
  protected validateSize(document: Document, maxSizeMB: number): boolean {
    if (document.size > maxSizeMB) {
      this.errors.push(
        `File size ${document.size}MB exceeds maximum allowed size of ${maxSizeMB}MB.`
      );
      return false;
    }
    return true;
  }

  // File extension validation
  protected validateExtension(
    document: Document,
    allowedExtensions: string[]
  ): boolean {
    const extension = document.fileName
      .substring(document.fileName.lastIndexOf("."))
      .toLowerCase();

    if (!allowedExtensions.includes(extension)) {
      this.errors.push(
        `File extension '${extension}' is not allowed. Allowed: ${allowedExtensions.join(
          ", "
        )}`
      );
      return false;
    }
    return true;
  }

  // File name validation
  protected validateFileName(document: Document): boolean {
    if (document.fileName === null || document.fileName.trim().length === 0) {
      this.errors.push("File name is empty or null.");
      return false;
    }
    return true;
  }

  // Metadata validation
  protected validateMetadata(
    document: Document,
    requiredFields: string[]
  ): boolean {
    let isValid = true;
    for (const field of requiredFields) {
      if (
        !document.metadata[field] ||
        document.metadata[field].toString().trim().length === 0
      ) {
        this.errors.push(
          `Required metadata field '${field}' is missing or empty.`
        );
        isValid = false;
      }
    }
    return isValid;
  }

  // Abstract method - returns ValidatedResult
  abstract validate(document: Document): ValidatedResult;
}
