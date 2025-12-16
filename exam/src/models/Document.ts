interface IDocument {
    fileName: string;
    documentType: string;
    metadata: Record<string, string>;
    allowedExtensions: string[];
    maxSizeInBytes: number;
    requiredMetadata: string[];
    valid: boolean;
}

abstract class Document {
    public fileName: string;
    public documentType: string;
    public metadata: Record<string, string>;
    protected allowedExtensions: string[];
    protected maxSizeInBytes: number;
    protected requiredMetadata: string[] = [];
    private valid: boolean = false;

    constructor(fileName: string, documentType: string, metadata: Record<string, string>) {
    this.fileName = fileName;
    this.documentType = documentType;
    this.metadata = metadata;
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
        return this.requiredMetadata.every(field => this.metadata[field] && this.metadata[field].length > 0);
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

export class Contract extends Document {

    constructor(fileName: string, documentType: string, metadata: Record<string, string>) {
        super(fileName, documentType, metadata);
        this.allowedExtensions = [".pdf"];
        this.maxSizeInBytes = 3 * 1024 * 1024;
        this.requiredMetadata.push("author", "version");
    }

    generateReport(): string {
        return `Contract ${this.fileName} Report !!!!`;
    }

    process(): void {
        if (!this.isValid()) {
            console.warn(`Contract ${this.fileName} can not be processed !!!!`);
            throw new Error("Document is not valid");
        }
        console.warn(`Contract ${this.fileName} processed !!!!`);
    }
}

export class FinancialReport extends Document {
    
    constructor(fileName: string, documentType: string, metadata: Record<string, string>) {
        super(fileName, documentType, metadata);
        this.allowedExtensions = [".xlsx", ".xls"];
        this.maxSizeInBytes = 4 * 1024 * 1024;
        this.requiredMetadata.push("fiscalYear", "department");
    }

    generateReport(): string {
        return `Financial Report ${this.fileName} Report !!!!`;
    }

    process(): void {
        if (!this.isValid()) {
            console.warn(`Financial Report ${this.fileName} can not be processed !!!!`);
            throw new Error("Document is not valid");
        }
        console.warn(`Financial Report ${this.fileName} processed !!!!`);
    }
}

export class Proposal extends Document {
    constructor(fileName: string, documentType: string, metadata: Record<string, string>) {
        super(fileName, documentType, metadata);
        this.allowedExtensions = [".pdf", ".docx"];
        this.maxSizeInBytes = 5 * 1024 * 1024;
        this.requiredMetadata.push("proposalDate", "client");
    }

    generateReport(): string {
        return `Proposal ${this.fileName} Report !!!!`;
    }

    process(): void {
        if (!this.isValid()) {
            console.warn(`Proposal ${this.fileName} can not be processed !!!!`);
            throw new Error("Document is not valid");
        }
        console.warn(`Proposal ${this.fileName} processed !!!!`);
    }
}