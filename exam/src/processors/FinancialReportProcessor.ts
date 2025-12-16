import { FinancialReport } from "../models/FinancialReport";
import { ProcessResult } from "../results/ProcessResult";
import { IDocumentProcessor } from "./IDocumentProcessor";

export class FinancialReportProcessor implements IDocumentProcessor {
  process(document: FinancialReport): ProcessResult {
    const messages: string[] = [];
    const extractedData: Record<string, any> = {};

    messages.push("Processing financial report...");

    extractedData["documentType"] = "Financial Report";
    extractedData["fileName"] = document.getFileName();
    extractedData["fiscalYear"] = document.getFiscalYear();
    extractedData["department"] = document.getDepartment();

    messages.push("Financial report processed successfully");

    return new ProcessResult(true, extractedData, messages);
  }
}
