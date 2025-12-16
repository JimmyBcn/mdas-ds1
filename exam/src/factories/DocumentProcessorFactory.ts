import { IDocumentProcessor } from "../processors/IDocumentProcessor";
import { ContractProcessor } from "../processors/ContractProcessor";
import { FinancialReportProcessor } from "../processors/FinancialReportProcessor";
import { ProposalProcessor } from "../processors/ProposalProcessor";
import { DocumentType } from "../models/Document";

export class DocumentProcessorFactory {
  createProcessor(documentType: DocumentType): IDocumentProcessor {
    switch (documentType) {
      case "Contract":
        return new ContractProcessor();

      case "FinancialReport":
        return new FinancialReportProcessor();

      case "Proposal":
        return new ProposalProcessor();

      default:
        throw new Error(`Tipo de documento no soportado: ${documentType}. ` + `Tipos válidos: Contract, FinancialReport, Proposal`);
    }
  }
}
