import { Document } from "./Document";
import { DocumentType } from "./Document";
import { FinancialReportMetadata } from "./FinancialReportMetadata";

export class FinancialReport extends Document {
  constructor(fileName: string, fileExtension: string, sizeInKB: number, private readonly metadata: FinancialReportMetadata) {
    super(fileName, fileExtension, sizeInKB);
  }

  getDocumentType(): DocumentType {
    return "FinancialReport";
  }

  getMetadata(): Record<string, string> {
    return {
      fiscalYear: this.metadata.fiscalYear,
      department: this.metadata.department,
    };
  }
}
