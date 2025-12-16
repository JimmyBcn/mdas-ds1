import { IDocumentProcessor } from "../processors/IDocumentProcessor";
import { DocumentType } from "../models/DocumentType";
import { ContractProcessor } from "../processors/ContractProcessor";
import { FinancialReportProcessor } from "../processors/FinancialReportProcessor";
import { CommercialProposalProcessor } from "../processors/CommercialProposalProcessor";

export class ProcessorFactory {
  createProcessor(type: DocumentType): IDocumentProcessor {
    switch (type) {
      case DocumentType.Contract:
        return new ContractProcessor();

      case DocumentType.FinancialReport:
        return new FinancialReportProcessor();

      case DocumentType.CommercialProposal:
        return new CommercialProposalProcessor();

      default:
        throw new Error(`Unknown document type: ${type}`);
    }
  }
}
