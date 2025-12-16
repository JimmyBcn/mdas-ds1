import { Document } from "../models/document";
import { IDocumentProcessor } from "./IDocumentProcessor";
import { ProcessResult } from "./ProcessResult";

class LegalContractProcessor implements IDocumentProcessor {
  process(document: Document): ProcessResult {
    console.log(`Processing Legal Contract: ${document.name}`);
    return new ProcessResult(true, `Legal Contract ${document.name} processed successfully.`);
  }
}

export { LegalContractProcessor };