import { DocumentValidator } from "./DocumentValidator";
import { Document } from "../../models/Document";

export class ProposalValidator extends DocumentValidator {
    private static readonly MAX_SIZE_MB = 5;
    private static readonly ALLOWED_EXTENSIONS = [".pdf", ".docx"];
    private static readonly REQUIRED_METADATA = ["proposalDate", "client"];

    protected validateFileSize(document: Document): void {
        if (document.getFileSize() > this.MAX_SIZE_MB * 1024 * 1024) {
            throw new Error(`Validation Error: Proposal file size exceeds ${this.MAX_SIZE_MB}MB.`);
        }
    }

    protected validateFileExtension(document: Document): void {
        if (!this.ALLOWED_EXTENSIONS.includes(document.getExtension())) {
            throw new Error(`Validation Error: Invalid extension. Allowed: ${this.ALLOWED_EXTENSIONS.join(", ")}`);
        }
    }

    protected validateMetadata(document: Document): void {
        for (const meta of this.REQUIRED_METADATA) {
            if (!document.getMetadata() || !document.getMetadata()[meta]) {
                throw new Error(`Validation Error: Missing required metadata field '${meta}'.`);
            }
        }
    }
}
