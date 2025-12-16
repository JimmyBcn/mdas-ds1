import { ContractProcessor, FinancialReportProcessor, ProposalProcessor } from "../processors";
import { IDocumentProcessor } from "../interfaces";

export class ProcessorFactory {
  public static createProcessor(documentType: string): IDocumentProcessor {
    switch (documentType) {
      case "Contract":
        return new ContractProcessor();

      case "FinancialReport":
        return new FinancialReportProcessor();

      case "Proposal":
        return new ProposalProcessor();

      default:
        throw new Error(`Unsupported document type: ${documentType}`);
    }
  }
}
