import { Document, IBaseDocument } from "./Document";

export class Proposal extends Document {
    constructor(baseDocument: IBaseDocument) {
        super(baseDocument);
        this.allowedExtensions = ["pdf", "docx"];
        this.maxSizeInBytes = 5 * 1024 * 1024;
        this.requiredMetadata.push("proposalDate", "client");
    }

    generateReport(): string {
        return `Proposal ${this.fileName} Report !!!!`;
    }

    process(): void {
        if (!this.isValid()) {
            console.warn(`Proposal ${this.fileName} can not be processed !!!!`);
            throw new Error("Document is not valid");
        }
        console.warn(`Proposal ${this.fileName} processed !!!!`);
    }
}