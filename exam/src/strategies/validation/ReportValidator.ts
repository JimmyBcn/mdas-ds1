import { DocumentValidator } from "./DocumentValidator";

export class ReportValidator extends DocumentValidator {
    private readonly REPORT_MAX_SIZE = 4;
    private readonly REPORT_EXCEL_SHORT_EXTENSION = '.xls';
    private readonly REPORT_EXCEL_LONG_EXTENSION = '.xlsx';
    private readonly REPORT_MIN_FISCAL_YEAR = 0;
    
    public validateSize(size: number): boolean {
        return super.validateSize(size) && size <= this.REPORT_MAX_SIZE;
    }

    public validateExtension(extension: string): boolean {
        return extension == this.REPORT_EXCEL_SHORT_EXTENSION || extension == this.REPORT_EXCEL_LONG_EXTENSION;
    }

    public validateMetadata(metadata: Record<string, string>): boolean {
        if (metadata["fiscalYear"] == undefined) {
            return false;
        }

        if (metadata["department"] == undefined) {
            return false;
        }

        const fiscalYear = Number.parseInt(metadata["fiscalYear"]);
        return fiscalYear > this.REPORT_MIN_FISCAL_YEAR && metadata["department"].length > this.DOCUMENT_MIN_NAME_LENGTH;
    }
}