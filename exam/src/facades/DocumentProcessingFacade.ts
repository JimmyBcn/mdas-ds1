import { FileValidator } from "../services/FileValidator";

export class DocumentProcessingFacade {
  processDocument(fileName: string, documentType: string, metadata?: Record<string, string>) {

    //factory para crear el documento

    // 1. Crear documento

    const file = FileFactory.createFile(fileName, documentType, metadata);

    // 2. Validar documento
    const fileValidator = FileValidator.validateFile(file);
    // 3. Procesar documento
    const processResult = FileProcessor.processFile(file);

    // 4. Retornar resultado del procesamiento
    return processResult;
  }
}
