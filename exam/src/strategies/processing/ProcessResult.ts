export class ProcessResult {
    private isSuccessful: boolean;
    private extractedData: Record<string, any>;
    private messages: string[];

    private readonly SUCCESS_MESSAGE = "Document processed successfully!\n";
    private readonly FAILURE_MESSAGE = "Document processing failed.\n";

    constructor(isSuccessful: boolean, extractedData: Record<string, any>, messages: string[]) {
        this.isSuccessful = isSuccessful;
        this.extractedData = extractedData;
        this.messages = messages;
    }

    public getReport(): string {
        let report: string = "";

        report.concat(this.reportSuccess());
        report.concat(this.reportExtractedData());
        report.concat(this.reportMessages());

        return report;
    }

    private reportSuccess(): string {
        if (this.isSuccessful) {
            return this.SUCCESS_MESSAGE;
        }

        return this.FAILURE_MESSAGE;
    }

    private reportExtractedData(): string {
        let report: string = "";

        for (const data in this.extractedData) {
            report.concat(data);
            report.concat("\n");
        }

        return report;
    }

    private reportMessages(): string {
        let report: string = "";

        for (const message in this.messages) {
            report.concat(message);
            report.concat("\n");
        }

        return report;
    }
}