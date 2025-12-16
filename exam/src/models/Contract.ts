import { Document } from "./Document";

export class Contract extends Document {
    public static readonly DOCUMENT_TYPE = "Contract";

    constructor(fileName: string, extension: string, metadata: Record<string, string>, fileSize: number) {
        super(fileName, this.DOCUMENT_TYPE, extension, metadata, fileSize);
    }
}