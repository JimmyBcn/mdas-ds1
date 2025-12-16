import { LegalContract, LEGAL_CONTRACT_ALLOWED_EXTENSIONS, MAX_LEGAL_CONTRACT_SIZE } from '../models/legal_contract';
import { DocumentValidator } from './document_validator';

class LegalContractValidator extends DocumentValidator {
    validate(legalContract: LegalContract): boolean {
        return super.validate(legalContract) &&
               this.validateAuthor(legalContract.author) &&
               this.validateVersion(legalContract.version);
    }

    validateSize(size: number): boolean {
        return size > 0 && size <= MAX_LEGAL_CONTRACT_SIZE;
    }

    validateExtension(extension: string): boolean {
        return LEGAL_CONTRACT_ALLOWED_EXTENSIONS.includes(extension);
    }

    validateAuthor(author: string): boolean {
        return author !== null && author !== undefined && author.trim() !== '';
    }

    validateVersion(version: string): boolean {
        return version !== null && version !== undefined && version.trim() !== '';
    }
}

export { LegalContractValidator };