import { Document } from "../../models/Document";

export abstract class DocumentValidator {

    public validate(document: Document): void {
        this.validateNameLength(document);
        this.validateFileSize(document);
        this.validateFileExtension(document);
        this.validateMetadata(document);
    }

    private validateNameLength(document: Document): void {
        if (!document.getFileName() || document.getFileName().trim() === "") {
            throw new Error("Validation Error: File name cannot be empty.");
        }
        if (document.getFileSize() <= 0) {
            throw new Error("Validation Error: File size must be greater than 0.");
        }
    }

    protected abstract validateFileSize(document: Document): void;
    protected abstract validateFileExtension(document: Document): void;
    protected abstract validateMetadata(document: Document): void;
}
