import { DocumentCreatorFactory } from "../services/creator/DocumentCreatorFactory";
import { DocumentValidatorFactory } from "../services/validator/DocumentValidatorFactory";
import { DocumentProcessorFactory } from "../services/processor/DocumentProcessorFactory";
import { ProcessResult } from "../models/ProcessResult";

export class DocumentProcessingFacade {
  processDocument(fileName: string, documentType: string, metadata: Record<string, string>, fileSize: number, fileExtension: string): ProcessResult {

    const document = DocumentCreatorFactory.create(documentType, fileName, fileExtension, metadata, fileSize);

    DocumentValidatorFactory.validate(document);

    return DocumentProcessorFactory.process(document);
  }

}
