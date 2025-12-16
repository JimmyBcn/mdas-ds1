import { Document } from "./Document";

export class Contract extends Document {
    private author: string = "";
    private version: string = "";

    constructor (filename: string, extension: string, size: number, author: string, version: string) {
        super(filename, extension, size);
        this.author = author;
        this.version = version;
    }

    public getAuthor(): string {
        return this.author;
    }

    public getVersion(): string {
        return this.version;
    }

    public setAuthor(author: string): void {
        this.author = author;
    }

    public setVersion(version: string): void {
        this.version = version;
    }
}