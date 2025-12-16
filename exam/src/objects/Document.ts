export abstract class Document {
    protected filename: string = "";
    protected extension: string = "";
    protected size: number = 0;

    constructor (filename: string, extension: string, size: number) {
        this.filename = filename;
        this.extension = extension;
        this.size = size;
    }

    public getFileName(): string {
        return this.filename;
    }

    public getExtension(): string {
        return this.extension;
    }

    public getSize(): number {
        return this.size;
    }

    public setFileName(filename: string): void {
        this.filename = filename;
    }

    public setExtension(extension: string): void {
        this.extension = extension;
    }

    public setSize(size: number): void {
        this.size = size;
    }
}
