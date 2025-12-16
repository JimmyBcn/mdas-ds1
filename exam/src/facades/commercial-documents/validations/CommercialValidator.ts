import { Document } from "../../../models/Document";
import { ValidatedResult } from "../../../models/ValidatedResult";
import { DocumentValidator } from "../../../validations/DocumentValidator";

export class CommercialValidator extends DocumentValidator {
  // Specific commercial document validation
  validate(document: Document): ValidatedResult {
    const MAX_SIZE_MB = 5; // Commercial Documents: Max 5 MB
    const ALLOWED_EXTENSIONS = [".docx", ".pdf"];
    const REQUIRED_METADATA_FIELDS = ["client", "proposalDate"];

    console.log(
      "Validation started for commercial document:",
      document.fileName
    );

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
