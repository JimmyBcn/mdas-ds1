import { IFileProcessor } from "../../interfaces/IFileProcessor";
import { LegalContractFile } from "../../models/FileTypes/LegalContractFile";
import { ProcessedResult } from "../../models/ProcessedResult";

export class LegalContractFileProcessor implements IFileProcessor {

    processFile(file: LegalContractFile): ProcessedResult {
        const messages: string[] = [];
        const extractedData: Record<string, any> = {};

        messages.push("Legal Contract processed successfully");
        extractedData["documentType"] = "Contrato Legal";
        extractedData["fileName"] = file.getFileName();

        return new ProcessedResult(true, extractedData, messages);
    }
}