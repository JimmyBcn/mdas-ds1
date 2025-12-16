import { IDocumentProcessor } from "../../interfaces/IDocumentProcessor";
import { FinancialReportProcessor } from "./FinancialReportProcessor";
import { ContractProcessor } from "./ContractProcessor";
import { ProposalProcessor } from "./ProposalProcessor";
import { DocumentType } from "../../models/enum/DocumentType";

export class DocumentProcessorFactory {

  static createDocumentProcessor(documentType: DocumentType): IDocumentProcessor {
    switch (documentType) {
      case DocumentType.CONTRACT:
        return new ContractProcessor();

      case DocumentType.FINANCIAL_REPORT:
        return new FinancialReportProcessor();

      case DocumentType.PROPOSAL:
        return new ProposalProcessor();

      default:
        return new ContractProcessor();
    }
  }
}
