import { IDocumentProcessor } from "../../interfaces/IDocumentProcessor";
import { FinancialReport } from "../../models/FinancialReport";
import { ProcessResult } from "../../models/ProcessResult";

export class FinancialReportProcessor implements IDocumentProcessor {
    public process(document: FinancialReport): ProcessResult {
        const messages: string[] = [];
        const extractedData: Record<string, any> = {};

        messages.push("Reporte procesado exitosamente");
        extractedData["documentType"] = "Reporte Financiero";
        extractedData["fileName"] = document.getFileName();

        return new ProcessResult(true, extractedData, messages);
    }
}
