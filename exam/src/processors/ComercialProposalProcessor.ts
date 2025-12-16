import { Document } from "../models/document";
import { IDocumentProcessor } from "./IDocumentProcessor";
import { ProcessResult } from "./ProcessResult";

class ComercialProposalProcessor implements IDocumentProcessor {
  process(document: Document): ProcessResult {
    console.log(`Processing Comercial Proposal: ${document.name}`);
    return new ProcessResult(true, `Comercial Proposal ${document.name} processed successfully.`);
  }
}

export { ComercialProposalProcessor };