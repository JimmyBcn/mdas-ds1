import { Document } from "../../objects/Document";

export abstract class DocumentValidator {
    protected readonly DOCUMENT_MIN_SIZE = 0;
    protected readonly DOCUMENT_MIN_NAME_LENGTH = 0;

    public validateSize(size: number): boolean {
        return size > this.DOCUMENT_MIN_SIZE;
    }

    public validateExtension(extension: string): boolean {
        return extension.length > this.DOCUMENT_MIN_NAME_LENGTH && extension.charAt(0) == '.';
    }

    public validateFileName(filename: string): boolean {
        return filename.length > this.DOCUMENT_MIN_NAME_LENGTH;
    }

    public abstract validateMetadata(metadata: Record<string,string>): boolean;
}