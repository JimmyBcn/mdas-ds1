import { CommercialProposal } from "../models/CommercialProposal";
import { ProcessResult } from "../results/ProcessResult";
import { IDocumentProcessor } from "./IDocumentProcessor";

export class CommercialProposalProcessor implements IDocumentProcessor {
  // process extracts relevant information from a CommercialProposal document
  process(document: CommercialProposal): ProcessResult {
    const messages: string[] = [];
    const extractedData: Record<string, any> = {};

    messages.push("Processing commercial proposal...");

    extractedData["documentType"] = "Commercial Proposal";
    extractedData["fileName"] = document.getFileName();
    extractedData["proposalDate"] = document.getProposalDate();
    extractedData["client"] = document.getClient();

    messages.push("Commercial proposal processed successfully");

    return new ProcessResult(true, extractedData, messages);
  }
}
