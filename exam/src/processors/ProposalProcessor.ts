import { IDocumentProcessor } from "../interfaces";
import { Document } from "../models";
import { DocumentProcessor } from "./DocumentProcessor";

export class ProposalProcessor extends DocumentProcessor implements IDocumentProcessor {
  processDocument(document: Document): boolean {
    this.process(document);
    console.log(`Processing proposal: ${document.getFileName()}`);
    console.log(`Proposal Date: ${document.getMetadataValue("proposalDate")}`);
    console.log(`Client: ${document.getMetadataValue("client")}`);
    
    return true;
  }
}
