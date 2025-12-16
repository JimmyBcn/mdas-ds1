abstract class Document {
    name: string;
    extension: string;
    size: number;

    constructor(name: string, extension: string, size: number) {
        this.name = name;
        this.extension = extension;
        this.size = size;
    }

    abstract validate(): boolean;
}

export { Document };