import { IDocumentProcessorStrategy } from "./IDocumentProcessorStrategy";
import { Document } from "../documents/Document";
import { ProcessResult } from "../ProcessResult";

export class ProposalProcessor implements IDocumentProcessorStrategy {
    process(document: Document): ProcessResult {
        return new ProcessResult(true, {
            documentType: "Propuesta Comercial",
            fileName: document.getFileName(),
        }, ["Propuesta procesada exitosamente"]);
    }
}