import { IFileProcessor } from "../../interfaces/IFileProcessor";
import { CommercialProposalFile } from "../../models/FileTypes/CommercialProposalFile";
import { ProcessedResult } from "../../models/ProcessedResult";

export class CommercialProposalFileProcessor implements IFileProcessor {

    processFile(file: CommercialProposalFile): ProcessedResult {
        const messages: string[] = [];
        const extractedData: Record<string, any> = {};

        messages.push("Commercial Proposal processed successfully");
        extractedData["documentType"] = "COMERCIAL_PROPOSAL";
        extractedData["fileName"] = file.getFileName();

        return new ProcessedResult(true, extractedData, messages);
    }
}