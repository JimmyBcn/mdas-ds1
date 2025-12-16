import { Proposal } from "../models/Proposal";
import { ProcessResult } from "../models/ProcessResult";
import { IDocumentProcessor } from "./IDocumentProcessor";

export class ProposalProcessor implements IDocumentProcessor {
  process(document: Proposal): ProcessResult {
    const messages: string[] = [];
    const extractedData: Record<string, any> = {};

    messages.push("Propuesta procesada exitosamente");
    extractedData["documentType"] = "Propuesta Comercial";
    extractedData["fileName"] = document.getFileName();

    return new ProcessResult(true, extractedData, messages);
  }
}
