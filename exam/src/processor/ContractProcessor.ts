import { IDocumentProcessorStrategy } from "./IDocumentProcessorStrategy.ts";
import { Document } from "../documents/Document";
import { ProcessResult } from "../ProcessResult";

export class ContractProcessor implements IDocumentProcessorStrategy {
    process(document: Document): ProcessResult {
        return new ProcessResult(true, {
            documentType: "Contrato",
            fileName: document.getFileName(),
        }, ["Contrato procesado exitosamente"]);
    }
}