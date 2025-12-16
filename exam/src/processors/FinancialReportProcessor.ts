import { IDocumentProcessor } from "../interfaces";
import { Document } from "../models";
import { DocumentProcessor } from "./DocumentProcessor";

export class FinancialReportProcessor extends DocumentProcessor implements IDocumentProcessor {
  processDocument(document: Document): boolean {
    this.process(document);
    console.log(`Processing financial report: ${document.getFileName()}`);
    console.log(`Fiscal Year: ${document.getMetadataValue("fiscalYear")}`);
    console.log(`Department: ${document.getMetadataValue("department")}`);
    
    return true;
  }
}
