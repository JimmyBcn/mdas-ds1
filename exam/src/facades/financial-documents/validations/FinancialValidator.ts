import { Document } from "../../../models/Document";
import { DocumentValidator } from "../../../validations/DocumentValidator";

export class FinancialReportValidator extends DocumentValidator {
  // Specific financial report validation
  validate(document: Document): boolean {
    const MAX_SIZE_MB = 4;
    const ALLOWED_EXTENSIONS = [".xls", ".xlsx"];
    const REQUIRED_METADATA_FIELDS = ["fiscalYear", "department"];

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

    console.log("Financial report document is valid.");
    return true;
  }
}
