import { Document } from './document';

const LEGAL_CONTRACT_EXTENSIONS = ['pdf'];

class LegalContract extends Document {
    author: string;
    version: string;

    constructor(name: string, size: number, extension: string, author: string, version: string) {
        super(name, extension, size);
        this.author = author;
        this.version = version;
    }
}

export { LegalContract, LEGAL_CONTRACT_EXTENSIONS };