import { Document, IBaseDocument } from "./Document";

export class FinancialReport extends Document {
    
    constructor(baseDocument: IBaseDocument) {
        super(baseDocument);
        this.allowedExtensions = ["xlsx", "xls"];
        this.maxSizeInBytes = 4 * 1024 * 1024;
        this.requiredMetadata.push("fiscalYear", "department");
    }

    generateReport(): string {
        return `Financial Report ${this.fileName} Report !!!!`;
    }

    process(): void {
        if (!this.isValid()) {
            console.warn(`Financial Report ${this.fileName} can not be processed !!!!`);
            throw new Error("Document is not valid");
        }
        console.warn(`Financial Report ${this.fileName} processed !!!!`);
    }
}