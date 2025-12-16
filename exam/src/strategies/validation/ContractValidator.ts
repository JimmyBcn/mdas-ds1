import { DocumentValidator } from "./DocumentValidator";

export class ContractValidator extends DocumentValidator {
    private readonly CONTRACT_MAX_SIZE = 3;
    private readonly CONTRACT_PDF_EXTENSION = '.pdf';
    
    public validateSize(size: number): boolean {
        return super.validateSize(size) && size <= this.CONTRACT_MAX_SIZE;
    }

    public validateExtension(extension: string): boolean {
        return extension == this.CONTRACT_PDF_EXTENSION;
    }

    public validateMetadata(author?: string, version?: string): boolean {
        if (author == undefined) {
            return false;
        }

        if (version == undefined) {
            return false;
        }

        return author.length > this.DOCUMENT_MIN_NAME_LENGTH && version.length > this.DOCUMENT_MIN_NAME_LENGTH;
    }
}