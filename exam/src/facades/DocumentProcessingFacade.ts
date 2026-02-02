import { Document } from "../models/Document";
import { DocumentType } from "../models/Document";
import { Contract } from "../models/Contract";
import { FinancialReport } from "../models/FinancialReport";
import { Proposal } from "../models/Proposal";
import { ProcessResult } from "../models/ProcessResult";
import { DocumentProcessorFactory } from "../factories/DocumentProcessorFactory";
import { ValidationException } from "../exceptions/ValidationException";
import { DocumentFactory } from "../factories/DocumentFactory";

export class DocumentProcessingFacade {
  private documentFactory: DocumentFactory;
  private processorFactory: DocumentProcessorFactory;

  constructor() {
    this.processorFactory = new DocumentProcessorFactory();
    this.documentFactory = new DocumentFactory();
  }

  processDocument(fileName: string, documentType: DocumentType, metadata?: Record<string, string>): ProcessResult {
    const document = this.documentFactory.createDocument(fileName, documentType, metadata || {});

    const isValid = document.isValid();

    if (!isValid) {
      throw new ValidationException(`Validación fallida para ${documentType}`, document.getValidationMessages());
    }

    const processor = this.processorFactory.createProcessor(documentType);

    const result = processor.process(document);

    const allMessages = [...document.getValidationMessages(), ...result.getMessages()];

    return new ProcessResult(result.isSuccess(), result.getExtractedData(), allMessages);
  }
}
