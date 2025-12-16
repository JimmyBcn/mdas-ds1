import { Document } from "../../../models/Document";
import { DocumentValidator } from "../../../validations/DocumentValidator";
import { ValidatedResult } from "../../../models/ValidatedResult";

export class FinancialReportValidator extends DocumentValidator {
  // Specific financial report validation
  validate(document: Document): ValidatedResult {
    this.errors = [];

    const MAX_SIZE_MB = 4;
    const ALLOWED_EXTENSIONS = [".xls", ".xlsx"];
    const REQUIRED_METADATA_FIELDS = ["fiscalYear", "department"];

    console.log(
      "Validation started for financial report document:",
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
