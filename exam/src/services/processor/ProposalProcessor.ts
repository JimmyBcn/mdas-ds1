import { IDocumentProcessor } from "../../interfaces/IDocumentProcessor";
import { Proposal } from "../../models/Proposal";
import { ProcessResult } from "../../models/ProcessResult";

export class ProposalProcessor implements IDocumentProcessor {
    public process(document: Proposal): ProcessResult {
        const messages: string[] = [];
        const extractedData: Record<string, any> = {};

        messages.push("Propuesta procesada exitosamente");
        extractedData["documentType"] = "Propuesta";
        extractedData["fileName"] = document.getFileName();

        return new ProcessResult(true, extractedData, messages);
    }
}