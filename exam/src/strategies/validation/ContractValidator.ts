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

    public validateMetadata(metadata: Record<string, string>): boolean {
        if (metadata["author"] == undefined) {
            return false;
        }

        if (metadata["version"] == undefined) {
            return false;
        }

        return metadata["author"].length > this.DOCUMENT_MIN_NAME_LENGTH && metadata["version"].length > this.DOCUMENT_MIN_NAME_LENGTH;
    }
}