import { IDocumentProcessorStrategy } from "./IDocumentProcessorStrategy";
import { Document } from "../documents/Document";
import { ProcessResult } from "../ProcessResult";

export class ReportProcessor implements IDocumentProcessorStrategy {
    process(document: Document): ProcessResult {
        return new ProcessResult(true, {
            documentType: "Report",
            fileName: document.getFileName(),
        }, ["Report procesado correctamente"]);
    }
}