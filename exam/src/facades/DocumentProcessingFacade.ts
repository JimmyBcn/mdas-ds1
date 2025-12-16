import { DocumentFactory } from "../factories/DocumentFactory";
import { DocumentType } from "../models/DocumentType";
import { ProcessorFactory } from "../factories/ProcessorFactory";
import { ProcessResult } from "../results/ProcessResult";

export class DocumentProcessingFacade {
  private documentFactory: DocumentFactory;
  private processorFactory: ProcessorFactory;

  constructor() {
    this.documentFactory = new DocumentFactory();
    this.processorFactory = new ProcessorFactory();
  }
  // processDocument processes a document based on its type and metadata
  processDocument(fileName: string, documentType: DocumentType, metadata: Record<string, any>, fileSize: number): ProcessResult {
    try {
      // 1. Create document with factory
      const document = this.documentFactory.createDocument(fileName, fileSize, documentType, metadata);

      // 2. Validate document independently of which type it is
      const validationErrors = document.validate();
      if (validationErrors.length > 0) {
        return new ProcessResult(false, {}, validationErrors);
      }

      // 3. Process document with appropriate processor
      const processor = this.processorFactory.createProcessor(documentType);
      const result = processor.process(document);

      // 4. Return processing result
      return result;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
      return new ProcessResult(false, {}, [errorMessage]);
    }
  }
}
