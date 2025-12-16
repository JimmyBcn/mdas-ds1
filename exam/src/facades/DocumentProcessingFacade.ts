import { DocumentFactory } from "../factories/DocumentFactory";
import { ProcessorFactory } from "../factories/ProcessorFactory";
import { ValidatorFactory } from "../factories/ValidatorFactory";
import { IDocumentProcessor } from "../strategies/processing/IDocumentProcessor";
import { ProcessResult } from "../strategies/processing/ProcessResult";

export class DocumentProcessingFacade {
  processDocument(fileName: string, documentType: string, metadata?: Record<string, string>): ProcessResult {
    // 1. Crear documento
    const document = DocumentFactory.createDocument(documentType, fileName, metadata);
    const processor = ProcessorFactory.createDocumentProcessor(documentType);
    const validator = ValidatorFactory.createDocumentValidator(documentType);
    
    // 2. Validar documento
    validator.
    // 3. Procesar documento
    // 4. Retornar resultado del procesamiento
    return processor.process(document);
  }
}
