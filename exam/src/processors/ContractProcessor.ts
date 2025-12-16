import { Contract } from "../models/Contract";
import { ProcessResult } from "../results/ProcessResult";
import { IDocumentProcessor } from "./IDocumentProcessor";

export class ContractProcessor implements IDocumentProcessor {
  process(document: Contract): ProcessResult {
    const messages: string[] = [];
    const extractedData: Record<string, any> = {};

    messages.push("Processing legal contract...");

    extractedData["documentType"] = "Legal Contract";
    extractedData["fileName"] = document.getFileName();
    extractedData["author"] = document.getAuthor();
    extractedData["version"] = document.getVersion();

    messages.push("Contract processed successfully");

    return new ProcessResult(true, extractedData, messages);
  }
}
