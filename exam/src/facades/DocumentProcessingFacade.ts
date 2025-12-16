import { DocumentFactory } from "../factories/DocumentFactory";
import { DocumentProcessorFactory } from "../factories/DocumentProcessorFactory";


export class DocumentProcessingFacade {
  processDocument(fileName: string, documentType: string, metadata?: Record<string, string>) {
    // 1. Crear documento
    const document = DocumentFactory.createDocument(documentType, fileName, metadata);
    // 2. Validar documento
    document.validate();
    // 3. Procesar documento
    const processResult = DocumentProcessorFactory.getProcessor(documentType).process(document);
    // 4. Retornar resultado del procesamiento
    return processResult;
  }
}
