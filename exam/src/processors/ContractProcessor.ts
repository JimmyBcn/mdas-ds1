import { IDocumentProcessor } from "../interfaces";
import { Document } from "../models";
import { DocumentProcessor } from "./DocumentProcessor";

export class ContractProcessor extends DocumentProcessor implements IDocumentProcessor {
  processDocument(document: Document): boolean {
    this.process(document);
    console.log(`Processing contract: ${document.getFileName()}`);
    console.log(`Author: ${document.getMetadataValue("author")}`);
    console.log(`Version: ${document.getMetadataValue("version")}`);

    return true;
  }
}