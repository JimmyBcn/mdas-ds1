import { Document, IBaseDocument } from "./Document";

export class Contract extends Document {

    constructor(baseDocument: IBaseDocument) {
        super(baseDocument);
        this.allowedExtensions = ["pdf"];
        this.maxSizeInBytes = 3 * 1024 * 1024;
        this.requiredMetadata.push("author", "version");
    }

    generateReport(): string {
        return `Contract ${this.fileName} Report !!!!`;
    }

    process(): void {
        if (!this.isValid()) {
            console.warn(`Contract ${this.fileName} can not be processed !!!!`);
            throw new Error("Document is not valid");
        }
        console.warn(`Contract ${this.fileName} processed !!!!`);
    }
}