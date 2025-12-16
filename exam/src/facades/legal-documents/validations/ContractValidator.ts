import { DocumentValidator } from "../../../validations/DocumentValidator";
import { Document } from "../../../models/Document";

export class ContractValidator extends DocumentValidator {
  // Specific contract validation
  validate(document: Document): boolean {
    const MAX_SIZE_MB = 10;
    const ALLOWED_EXTENSIONS = [".pdf"];
    const REQUIRED_METADATA_FIELDS = ["id", "author", "version", "size"];

    // Validate file name
    if (!this.validateFileName(document)) {
      return false;
    }

    // Validate file size
    const fileSize = document.metadata["size"] || 0;
    if (!this.validateSize(document, MAX_SIZE_MB)) {
      return false;
    }

    // Validate file extension
    if (!this.validateExtension(document, ALLOWED_EXTENSIONS)) {
      return false;
    }

    // Validate required metadata fields
    for (const field of REQUIRED_METADATA_FIELDS) {
      if (!(field in document.metadata)) {
        console.log(`Missing required metadata field: ${field}`);
        return false;
      }
    }

    return true;
  }
}
