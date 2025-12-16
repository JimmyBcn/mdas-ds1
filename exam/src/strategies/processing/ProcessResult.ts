export class ProcessResult {
    private isSuccessful: boolean;
    private extractedData: Record<string, any>;
    private messages: string[];

    constructor(isSuccessful: boolean, extractedData: Record<string, any>, messages: string[]) {
        this.isSuccessful = isSuccessful;
        this.extractedData = extractedData;
        this.messages = messages;
    }

    // getReport??
}