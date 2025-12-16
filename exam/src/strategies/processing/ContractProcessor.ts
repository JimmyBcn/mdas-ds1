import { Document } from "../../objects/Document";
import { IDocumentProcessor } from "./IDocumentProcessor";
import { ProcessResult } from "./ProcessResult";

export class ContractProcessor implements IDocumentProcessor {
    process(document: Document): ProcessResult {
        const messages: string[] = [];
        const extractedData: Record<string, any> = {};

        messages.push("Successfully processed document.");
        extractedData["documentType"] = "Legal Contract";
        extractedData["fileName"] = document.getFileName();

        return new ProcessResult(true, extractedData, messages);
    }
}