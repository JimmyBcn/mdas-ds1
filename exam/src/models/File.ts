export class File {

    private readonly fileName: string;
    private readonly documentType: string;
    private readonly metadata: Record<string, string>;

    constructor(fileName: string, documentType: string, metadata: Record<string, string>) {
        this.fileName = fileName;
        this.documentType = documentType;
        this.metadata = metadata;
    }

    getFileName(): string {
        return this.fileName;
    }

    getDocumentType(): string {
        return this.documentType;
    }

    getMetadata(): Record<string, string> {
        return this.metadata;
    }

    getMetadataValue(key: string): string {
        return this.metadata[key];
    }
}