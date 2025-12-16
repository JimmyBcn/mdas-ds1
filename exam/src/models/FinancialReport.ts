import { Document } from "./Document";

export class FinancialReport extends Document {
    public static readonly DOCUMENT_TYPE = "FinancialReport";

    constructor(fileName: string, extension: string, metadata: Record<string, string>, fileSize: number) {
        super(fileName, this.DOCUMENT_TYPE, extension, metadata, fileSize);
    }
}
