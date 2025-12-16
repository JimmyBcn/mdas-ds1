import { DocumentFactory, ProcessorFactory, ValidatorFactory } from "../factories";
import { IDocumentProcessor } from "../interfaces";

export class DocumentProcessingFacade {
  processDocument(fileName: string, documentType: string, metadata?: Record<string, string>) {
    try {
      // 1. Crear documento
      const document = DocumentFactory.createDocument(fileName, documentType, metadata);

      // 2. Validar documento
      const validator = ValidatorFactory.createValidator(documentType);
      const validationResult = validator.validate(document);

      // 3. Procesar documento
      if (!validationResult.getIsValid()) {
        throw new Error(`Document validation failed`);
      } else {
        const processor: IDocumentProcessor = ProcessorFactory.createProcessor(documentType);
        const processResult = processor.processDocument(document);
      }
      // 4. Retornar resultado del procesamiento
      
    } catch (error) {
      throw new Error(`Error al procesar documento`);
    }
  }
}
