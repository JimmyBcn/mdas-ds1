import { FinancialReport } from "../models/FinancialReport";
import { ProcessResult } from "../models/ProcessResult";
import { IDocumentProcessor } from "./IDocumentProcessor";

export class FinancialReportProcessor implements IDocumentProcessor {
  process(document: FinancialReport): ProcessResult {
    const messages: string[] = [];
    const extractedData: Record<string, any> = {};

    messages.push("Reporte financiero procesado exitosamente");
    extractedData["documentType"] = "Reporte Financiero";
    extractedData["fileName"] = document.getFileName();

    return new ProcessResult(true, extractedData, messages);
  }
}
