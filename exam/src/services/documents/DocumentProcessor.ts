import { IDocumentProcessor } from "../../interfaces/IDocumentProcessor";
import { Document } from "../../models/Document";
import { DocumentType } from "../../models/enum/DocumentType";
import { DocumentProcessorFactory } from "./DocumentProcessorFactory";
export class DocumentProcessor implements IDocumentProcessor{
      
    process(document: Document, documentType: DocumentType): boolean {
    const strategy = DocumentProcessorFactory.createDocumentProcessor(documentType);

    return strategy.process(document, documentType)
    }
}