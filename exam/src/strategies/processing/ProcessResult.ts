export class ProcessResult {
    private isSuccessful: boolean;
    private extractedData: Record<string, any>;
    private messages: string[];

    constructor(isSuccessful: boolean, extractedData: Record<string, any>, messages: string[]) {
        this.isSuccessful = isSuccessful;
        this.extractedData = extractedData;
        this.messages = messages;
    }

    public getReport(): string {
        let report: string = "";

        report.concat(`Document type: ${this.extractedData["documentType"]}\n`);
        report.concat(`Document name: ${this.extractedData["fileName"]}\n`);
        report.concat(this.messages[0]);

        return report;
    }
}