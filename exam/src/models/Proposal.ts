import { Document } from "./Document";

export class Proposal extends Document {
    public static readonly DOCUMENT_TYPE = "Proposal";

    constructor(fileName: string, extension: string, metadata: Record<string, string>, fileSize: number) {
        super(fileName, this.DOCUMENT_TYPE, extension, metadata, fileSize);
    }
}