import { DocumentValidator } from "../../../validations/DocumentValidator";
import { Document } from "../../../models/Document";

export class ContractValidator extends DocumentValidator {
  // Specific contract validation
  validate(document: Document): boolean {
    const MAX_SIZE_MB = 3; // Contracts: Max 3 MB per README
    const ALLOWED_EXTENSIONS = [".pdf"];
    const REQUIRED_METADATA_FIELDS = ["author", "version"];

    console.log("Validation started for contract document:", document.fileName);

    // Validate file name
    if (!this.validateFileName(document)) {
      return false;
    }

    // Validate file size
    if (!this.validateSize(document, MAX_SIZE_MB)) {
      return false;
    }

    // Validate file extension
    if (!this.validateExtension(document, ALLOWED_EXTENSIONS)) {
      return false;
    }

    // Validate required metadata fields
    if (!this.validateMetadata(document, REQUIRED_METADATA_FIELDS)) {
      return false;
    }

    console.log("Contract document is valid.");
    return true;
  }
}
