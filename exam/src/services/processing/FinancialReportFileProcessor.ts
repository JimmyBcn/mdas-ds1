import { IFileProcessor } from "../../interfaces/IFileProcessor";
import { FinancialReportFile } from "../../models/FileTypes/FinancialReportFile";
import { ProcessedResult } from "../../models/ProcessedResult";

export class FinancialReportFileProcessor implements IFileProcessor {

    processFile(file: FinancialReportFile): ProcessedResult {
        const messages: string[] = [];
        const extractedData: Record<string, any> = {};

        messages.push("Financial Report processed successfully");
        extractedData["documentType"] = "FINANCIAL_REPORT";
        extractedData["fileName"] = file.getFileName();

        return new ProcessedResult(true, extractedData, messages);
    }
}