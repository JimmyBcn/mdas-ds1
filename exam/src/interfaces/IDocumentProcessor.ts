import { Document } from "../models/Document";
import { DocumentType } from "../models/enum/DocumentType";
export interface IDocumentProcessor {
    process(document: Document, documentType: DocumentType): boolean;
}
