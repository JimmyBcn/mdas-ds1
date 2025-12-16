import { Contract } from "../models/Contract";
import { DocumentType } from "../models/enum/DocumentType";
import { FinancialReport } from "../models/FinancialReport";
import { Proposal } from "../models/Proposal";
import { DocumentProcessor } from "../services/documents/DocumentProcessor";
export class DocumentProcessingFacade {
  processDocument(fileName: string, documentType: DocumentType, fileSize: number,metadata?: Record<string, string>) {
    // 1. Crear documento
    let document = null;
    if(metadata == null){
      console.log("No hay metadata")
      return false;
    }
    switch (documentType) {
      case DocumentType.CONTRACT:
        document = new Contract(fileName, fileSize, metadata!.author, metadata!.version);

      case DocumentType.FINANCIAL_REPORT:
        document = new FinancialReport(fileName, fileSize, metadata!.fiscalYear, metadata!.department);

      case DocumentType.PROPOSAL:
        document = new Proposal(fileName, fileSize, metadata!.proposalDate, metadata!.client);

      default:
        document = new Contract(fileName, fileSize, metadata!.author, metadata!.version);
    }
    // 2. Validar documento

    let isValid = document.validateDocument()
    if(!isValid){
      console.log("Document is not Valid")
      return false
    }
    // 3. Procesar documento
    let documentProcessor = new DocumentProcessor()
    return documentProcessor.process(document, documentType)
  }
}
