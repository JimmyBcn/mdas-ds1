import { Document, DocumentType } from "../models/Document";
import { Contract } from "../models/Contract";
import { FinancialReport } from "../models/FinancialReport";
import { Proposal } from "../models/Proposal";

export class DocumentFactory {
  createDocument(fileName: string, documentType: DocumentType, metadata: Record<string, string>): Document {
    const extension = this.extractExtension(fileName);
    const sizeInKB = this.simulateFileSize(fileName);

    switch (documentType) {
      case "Contract":
        return new Contract(fileName, extension, sizeInKB, {
          author: metadata.author || "",
          version: metadata.version || "",
        });
      case "FinancialReport":
        return new FinancialReport(fileName, extension, sizeInKB, {
          fiscalYear: metadata.fiscalYear || "",
          department: metadata.department || "",
        });
      case "Proposal":
        return new Proposal(fileName, extension, sizeInKB, {
          proposalDate: metadata.proposalDate || "",
          client: metadata.client || "",
        });
      default:
        throw new Error(`Tipo de documento no soportado: ${documentType}`);
    }
  }

  private extractExtension(fileName: string): string {
    const lastDot = fileName.lastIndexOf(".");
    if (lastDot === -1) {
      return "";
    }
    return fileName.substring(lastDot);
  }

  private simulateFileSize(fileName: string): number {
    const baseSize = 1024;
    const variance = fileName.length * 10;
    return baseSize + variance;
  }
}
