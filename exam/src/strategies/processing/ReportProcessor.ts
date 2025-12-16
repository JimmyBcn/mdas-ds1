import { Document } from "../../objects/Document";
import { IDocumentProcessor } from "./IDocumentProcessor";
import { ProcessResult } from "./ProcessResult";

export class ReportProcessor implements IDocumentProcessor {
    process(document: Document): ProcessResult {
        const messages: string[] = [];
        const extractedData: Record<string, any> = {};

        messages.push("Successfully processed document.");
        extractedData["documentType"] = "Financial Report";
        extractedData["fileName"] = document.getFileName();

        return new ProcessResult(true, extractedData, messages);
    }
}