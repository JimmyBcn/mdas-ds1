import { Document } from "../models/Document";

export abstract class DocumentValidator {
  // File size validation
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

  // File extension validation
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

  // File name validation
  protected validateFileName(document: Document): boolean {
    if (document.fileName === null || document.fileName.trim().length === 0) {
      console.log("File name is empty or null.");
      return false;
    }
    return true;
  }

  // Metadata validation
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

  abstract validate(document: Document): boolean;
}
