import { DocumentValidator } from "./DocumentValidator";
import { Document } from "../../models/Document";

export class ContractValidator extends DocumentValidator {
    private static readonly MAX_SIZE_MB = 3;
    private static readonly ALLOWED_EXTENSION = ".pdf";
    private static readonly REQUIRED_METADATA = ["author", "version"];

    protected validateFileSize(document: Document): void {
        if (document.getFileSize() > this.MAX_SIZE_MB) {
            throw new Error(`Validation Error: Contract file exceeds ${this.MAX_SIZE_MB}MB.`);
        }
    }

    protected validateFileExtension(document: Document): void {
        if (document.getExtension() !== this.ALLOWED_EXTENSION) {
            throw new Error(`Validation Error: Contract file must be ${this.ALLOWED_EXTENSION}.`);
        }
    }

    protected validateMetadata(document: Document): void {
        for (const meta of this.REQUIRED_METADATA) {
            if (!document.getMetadata() || !document.getMetadata()[meta]) {
                throw new Error(`Validation Error: Contract file is missing required metadata field '${meta}'.`);
            }
        }
    }
}
