export class GenericFile {

    private fileName: string;
    private documentType: string;
    private size: number;
    private extension: string;
    private metadata: Record<string, string>;

    constructor(fileName: string, documentType: string, size: number, extension: string, metadata: Record<string, string>) {
        this.fileName = fileName;
        this.documentType = documentType;
        this.size = size;
        this.extension = extension;
        this.metadata = metadata;
    }

    getFileName(): string {
        return this.fileName;
    }

    getDocumentType(): string {
        return this.documentType;
    }

    getSize(): number {
        return this.size;
    }

    getExtension(): string {
        return this.extension;
    }

    getMetadata(): Record<string, string> {
        return this.metadata;
    }
}