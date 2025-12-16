import { Contract } from "../models/Contract";
import { ProcessResult } from "../models/ProcessResult";
import { IDocumentProcessor } from "./IDocumentProcessor";

export class ContractProcessor implements IDocumentProcessor {
  process(document: Contract): ProcessResult {
    const messages: string[] = [];
    const extractedData: Record<string, any> = {};

    messages.push("Contrato procesado exitosamente");
    extractedData["documentType"] = "Contrato Legal";
    extractedData["fileName"] = document.getFileName();

    return new ProcessResult(true, extractedData, messages);
  }
}
