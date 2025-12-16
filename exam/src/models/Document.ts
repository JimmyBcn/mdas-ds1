export interface IBaseDocument {
    fileName: string;
    metadata: Record<string, string>;
}

export abstract class Document {
    public fileName: string;
    public metadata: Record<string, string>;
    protected allowedExtensions: string[] = [];
    protected maxSizeInBytes: number = 0;
    protected requiredMetadata: string[] = [];
    private valid: boolean = false;

    constructor(baseDocument: IBaseDocument) {
    this.fileName = baseDocument.fileName;
    this.metadata = baseDocument.metadata;
    // size is always required for validation
    this.requiredMetadata.push('size');
    }

    public isValid(): boolean {
        return this.valid;
    }

    private isAllowedExtension(): boolean {
        const extension = this.fileName.split(".").pop() || "";
        return this.allowedExtensions.indexOf(extension) !== -1;
    }

    private hasRequiredMetadata(): boolean {
        return this.requiredMetadata.every((field) => {
            return this.metadata[field] && this.metadata[field].length > 0
        });
    }

    private isWithinMaxSize(): boolean {
        return Number(this.metadata.size || 0) <= this.maxSizeInBytes;
    }

    public validate(): void {
        if (!this.isAllowedExtension()) {
            throw new Error("Invalid file extension");
        }
        if (!this.hasRequiredMetadata()) {
            throw new Error("Required metadata is missing");
        }
        if (!this.isWithinMaxSize()) {
            throw new Error("Document size is too large");
        }
        this.valid = true;
    }

    abstract process(): void;
    abstract generateReport(): string;
}
