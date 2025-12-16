import { Document } from "../models/Document";
import { DocumentType } from "../models/DocumentType";
import { Contract } from "../models/Contract";
import { FinancialReport } from "../models/FinancialReport";
import { CommercialProposal } from "../models/CommercialProposal";

export class DocumentFactory {
  createDocument(fileName: string, fileSize: number, type: DocumentType, metadata: Record<string, any>): Document {
    switch (type) {
      case DocumentType.Contract:
        return new Contract(fileName, fileSize, metadata.author, metadata.version);

      case DocumentType.FinancialReport:
        return new FinancialReport(fileName, fileSize, metadata.fiscalYear, metadata.department);

      case DocumentType.CommercialProposal:
        return new CommercialProposal(fileName, fileSize, metadata.proposalDate, metadata.client);

      default:
        throw new Error(`Unknown document type: ${type}`);
    }
  }
}
