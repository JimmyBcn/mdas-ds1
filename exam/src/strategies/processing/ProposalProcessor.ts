import { Document } from "../../objects/Document";
import { IDocumentProcessor } from "./IDocumentProcessor";
import { ProcessResult } from "./ProcessResult";

export class ProposalProcessor implements IDocumentProcessor {
    process(document: Document): ProcessResult {
        const messages: string[] = [];
        const extractedData: Record<string, any> = {};

        messages.push("Successfully processed document.");
        extractedData["documentType"] = "Commercial Proposal";
        extractedData["fileName"] = document.getFileName();

        return new ProcessResult(true, extractedData, messages);
    }
}