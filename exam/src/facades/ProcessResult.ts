export class ProcessResult
{
    constructor
    (
        public success: boolean,
        public extractedData: Record<string, any> = {},
        public messages: string[] = [],
    ){}

    public isSuccess(): boolean
    {
        return this.success;
    }

    private getExtractedDataReport(): string
    {
        let dataReport = `\nreport:\n`;
        
        for ( const key in this.extractedData ) {
            if (key !== "documentType" && this.extractedData[ key ]) {
                dataReport += `${key}: ${ this.extractedData[ key ] }\n`;
            }
        }
        return dataReport;
    }

    public getReport(): string
    {
        const status = this.success ? "Success" : "Failure";
        const docType = this.extractedData["documentType"] || "Unknown";

        let report = `\nreport\n`;
        report += `document: ${docType}\n`;
        report += `status:${status}\n`;
        report += `${this.messages.join("\n  - ")}\n`;

        if (this.success) 
        {
            report += this.getExtractedDataReport();
        }
        return report;
    }
}
