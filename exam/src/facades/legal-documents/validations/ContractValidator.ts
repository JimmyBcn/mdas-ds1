import { DocumentValidator } from "../../../validations/DocumentValidator";
import { Document } from "../../../models/Document";
import { ValidatedResult } from "../../../models/ValidatedResult";

export class ContractValidator extends DocumentValidator {
  // Specific contract validation
  validate(document: Document): ValidatedResult {
    this.errors = [];

    const MAX_SIZE_MB = 3;
    const ALLOWED_EXTENSIONS = [".pdf"];
    const REQUIRED_METADATA_FIELDS = ["author", "version"];

    console.log("Validation started for contract document:", document.fileName);

    // Validate file name
    this.validateFileName(document);

    // Validate file size
    this.validateSize(document, MAX_SIZE_MB);

    // Validate file extension
    this.validateExtension(document, ALLOWED_EXTENSIONS);

    // Validate required metadata fields
    this.validateMetadata(document, REQUIRED_METADATA_FIELDS);

    if (this.errors.length > 0) {
      return new ValidatedResult(false, document, this.errors);
    }

    return new ValidatedResult(true, document);
  }
}
