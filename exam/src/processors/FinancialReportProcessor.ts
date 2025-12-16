import { Document } from "../models/document";
import { IDocumentProcessor } from "./IDocumentProcessor";
import { ProcessResult } from "./ProcessResult";

class FinancialReportProcessor implements IDocumentProcessor {
  process(document: Document): ProcessResult {
    console.log(`Processing Financial Report: ${document.name}`);
    return new ProcessResult(true, `Financial Report ${document.name} processed successfully.`);
  }
}

export { FinancialReportProcessor };
