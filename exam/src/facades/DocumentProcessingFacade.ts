import { GenericFile } from "../models/FileTypes/GenericFile";
import { FileValidator } from "../services/validation/FileValidator";
import { FileProcessor } from "../services/processing/FileProcessor";
import { ProcessedResult } from "../models/ProcessedResult";

export class DocumentProcessingFacade {

  private fileValidator: FileValidator;
  private fileProcessor: FileProcessor;

  constructor() {
    this.fileValidator = new FileValidator();
    this.fileProcessor = new FileProcessor();
  }

  processDocument(fileName: string, documentType: string, size: number, extension: string, metadata: Record<string, string>) {

    // 1. Crear documento
    const file: GenericFile = new GenericFile(fileName, documentType, size, extension, metadata);

    // 2. Validar documento
    if (!this.fileValidator.validate(file)) {
      return new ProcessedResult(false, {}, ["File is not valid"]);
    }
    // 3. Procesar documento
    const processResult: ProcessedResult = this.fileProcessor.processFile(file);

    // 4. Retornar resultado del procesamiento
    return processResult;
  }
}
