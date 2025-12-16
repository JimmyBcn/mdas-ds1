import { Document, Contract, FinancialReport, Proposal } from "../models";

export class DocumentFactory {
  public static readonly CONTRACT_DEFAULT_FILE_SIZE_MB = 2;
  public static readonly FINANCIAL_REPORT_DEFAULT_FILE_SIZE_MB = 3;
  public static readonly PROPOSAL_DEFAULT_FILE_SIZE_MB = 4.5;

  public static readonly EXTENSION_PDF = ".pdf";
  public static readonly EXTENSION_XLSX = ".xlsx";
  public static readonly EXTENSION_DOCX = ".docx";

  public static createDocument(fileName: string, documentType: string, metadata: Record<string, string> = {}): Document {
    switch (documentType) {
      case "Contract":
        return new Contract(fileName, this.CONTRACT_DEFAULT_FILE_SIZE_MB, metadata, this.EXTENSION_PDF);

      case "FinancialReport":
        return new FinancialReport(fileName, this.FINANCIAL_REPORT_DEFAULT_FILE_SIZE_MB, metadata, this.EXTENSION_XLSX);

      case "Proposal":
        return new Proposal(fileName, this.PROPOSAL_DEFAULT_FILE_SIZE_MB, metadata, this.EXTENSION_DOCX);

      default:
        throw new Error(`Document type not supported: ${documentType}`);
    }
  }
}
