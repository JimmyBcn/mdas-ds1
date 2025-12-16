export abstract class Document {
    constructor( protected fileName: string, protected sizeMB: number, protected metadata: Record<string, string>) { }

    getFileName(): string {
        return this.fileName;
    }

    getSizeMB(): number {
        return this.sizeMB;
    }

    getMetadata(): Record<string, string> {
        return this.metadata;
    }

    getExtension(): string {
        return this.fileName.split(".").pop() || "";
    }
}