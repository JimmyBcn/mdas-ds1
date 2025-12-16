import { LegalContractValidator } from '../validators';
import { Document } from './document';

const LEGAL_CONTRACT_ALLOWED_EXTENSIONS = ['pdf'];
const MAX_LEGAL_CONTRACT_SIZE = 3 * 1024 * 1024; // 3 MB
const LEGAL_CONTRACT_DOCUMENT_TYPE = 'LegalContract';

class LegalContract extends Document {
    author: string;
    version: string;

    private validator: LegalContractValidator;

    constructor(name: string, size: number, extension: string, author: string, version: string) {
        super(name, extension, size);
        this.author = author;
        this.version = version;
        this.validator = new LegalContractValidator();
    }

    validate(): boolean {
        return this.validator.validate(this);
    }
}

export { LegalContract, LEGAL_CONTRACT_ALLOWED_EXTENSIONS, MAX_LEGAL_CONTRACT_SIZE, LEGAL_CONTRACT_DOCUMENT_TYPE };