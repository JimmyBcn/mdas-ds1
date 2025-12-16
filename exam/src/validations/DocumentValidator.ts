import { Document } from "../models/Document";

export abstract class DocumentValidator {
  // Common validation: file size
  protected validateSize(document: Document, maxSizeMB: number): boolean {
    if (document.size > maxSizeMB) {
      console.log(
        `File size ${document.size}MB exceeds maximum allowed size of ${maxSizeMB}MB.`
      );
      return false;
    }
    console.log(
      `File size ${document.size}MB is within the allowed limit of ${maxSizeMB}MB.`
    );
    return true;
  }

  // Common validation: file extension
  protected validateExtension(
    document: Document,
    allowedExtensions: string[]
  ): boolean {
    const extension = document.fileName
      .substring(document.fileName.lastIndexOf("."))
      .toLowerCase();

    if (!allowedExtensions.includes(extension)) {
      console.log(
        `File extension '${extension}' is not allowed. Allowed extensions: ${allowedExtensions.join(
          ", "
        )}`
      );
      return false;
    }

    console.log(`File extension '${extension}' is valid.`);
    return true;
  }

  // Common validation: file name not empty
  protected validateFileName(document: Document): boolean {
    if (document.fileName === null || document.fileName.trim().length === 0) {
      console.log("File name is empty or null.");
      return false;
    }
    return true;
  }

  // Common validation: required metadata fields
  protected validateMetadata(
    document: Document,
    requiredFields: string[]
  ): boolean {
    for (const field of requiredFields) {
      if (
        !document.metadata[field] ||
        document.metadata[field].toString().trim().length === 0
      ) {
        console.log(`Required metadata field '${field}' is missing or empty.`);
        return false;
      }
    }
    console.log("All required metadata fields are present.");
    return true;
  }

  // Abstract method - each document type implements its own specific validation
  abstract validate(document: Document): boolean;
}
