import { Document } from './document';

const LEGAL_CONTRACT_ALLOWED_EXTENSIONS = ['pdf'];
const MAX_LEGAL_CONTRACT_SIZE = 3 * 1024 * 1024; // 3 MB

class LegalContract extends Document {
    author: string;
    version: string;

    constructor(name: string, size: number, extension: string, author: string, version: string) {
        super(name, extension, size);
        this.author = author;
        this.version = version;
    }
}

export { LegalContract, LEGAL_CONTRACT_ALLOWED_EXTENSIONS, MAX_LEGAL_CONTRACT_SIZE };