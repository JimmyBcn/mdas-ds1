import { Document } from "./Document";

export class Contract extends Document {
    private author: string = "";
    private version: string = "";

    constructor (filename: string, metadata: Record <string, string>) {
        super(filename, metadata);
        this.author = metadata["author"];
        this.version = metadata["version"];
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