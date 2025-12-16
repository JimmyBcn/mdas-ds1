import { IDocumentProcessor } from "../../interfaces/IDocumentProcessor";
import { Document } from "../../models/Document";
import { DocumentType } from "../../models/enum/DocumentType";
export class ContractProcessor implements IDocumentProcessor{
      
    process(document: Document, documentType: DocumentType): boolean {
        console.log("Processing Contract...")
        return true;
    }
}