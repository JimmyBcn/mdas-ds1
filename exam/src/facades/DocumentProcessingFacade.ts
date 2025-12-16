import { DocumentFactory } from "../Factory/DocumentFactory";
import { ContractValidator } from "../validate/ContractValidator";
import { ReportValidator } from "../validate/ReportValidator";
import { ProposalValidator } from "../validate/ProposalValidator";
import { ContractProcessor } from "../processor/ContractProcessor";
import { ReportProcessor } from "../processor/ReportProcessor";
import { ProposalProcessor } from "../processor/ProposalProcessor";
import { ProcessResult } from "../ProcessResult";


export class DocumentProcessingFacade {
  processDocument(fileName: string, documentType: string, metadata: Record<string, string> = {}): ProcessResult {
    try {
      const document = DocumentFactory.create(documentType, fileName, metadata);

      switch (documentType) {
        case "Contract":
          new ContractValidator().validate(document);
          return new ContractProcessor().process(document);
        case "Report":
          new ReportValidator().validate(document);
          return new ReportProcessor().process(document);
        case "Proposal":
          new ProposalValidator().validate(document);
          return new ProposalProcessor().process(document);
        default:
          throw new Error("Tipo de documento inválido");
      }
    } catch (error: any) {
      return new ProcessResult(false, {}, [error.message]);
    }
  }
}