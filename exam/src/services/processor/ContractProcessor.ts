import { IDocumentProcessor } from "../../interfaces/IDocumentProcessor";
import { Document } from "../../models/Document";
import { ProcessResult } from "../../models/ProcessResult";

export class ContractProcessor implements IDocumentProcessor {
    public process(document: Document): ProcessResult {
        const messages: string[] = [];
        const extractedData: Record<string, any> = {};

        messages.push("Contrato procesado exitosamente");
        extractedData["documentType"] = "Contrato Legal";
        extractedData["fileName"] = document.getFileName();

        return new ProcessResult(true, extractedData, messages);
    }
}