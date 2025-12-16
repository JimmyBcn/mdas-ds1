import { DocumentFactory, Document } from "../models/Document";

export class DocumentProcessingFacade {
  processDocument(fileName: string, documentType: string, metadata: Record<string, string>): Document {
    // 1. Crear documento
    // 2. Validar documento
    // 3. Procesar documento
    // 4. Retornar resultado del procesamiento

    const document = DocumentFactory.create(documentType, { fileName, metadata });
    document.validate();
    document.process();
    return document;
  }
}
