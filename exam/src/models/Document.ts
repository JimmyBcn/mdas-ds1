export abstract class Document {
    private readonly fileName: string;
    private readonly documentType: string;
    private readonly extension: string;
    private readonly metadata: Record<string, string>;
    private readonly fileSize: number;

    constructor(fileName: string, documentType: string, extension: string, metadata: Record<string, string>, fileSize: number) {
        this.fileName = fileName;
        this.documentType = documentType;
        this.extension = extension;
        this.metadata = metadata;
        this.fileSize = fileSize;
    }

    public getFileName(): string {
        return this.fileName;
    }

    public getDocumentType(): string {
        return this.documentType;
    }

    public getExtension(): string {
        return this.extension;
    }

    public getMetadata(): Record<string, string> {
        return this.metadata;
    }

    public getFileSize(): number {
        return this.fileSize;
    }

}