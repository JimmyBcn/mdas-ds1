import { DocumentValidator } from "./DocumentValidator";

export class ProposalValidator extends DocumentValidator {
    private readonly PROPOSAL_MAX_SIZE = 5;
    private readonly PROPOSAL_PDF_EXTENSION = '.pdf';
    private readonly PROPOSAL_WORD_EXTENSION = '.docx';
    private readonly PROPOSAL_DATE_LENGTH = 10; // format DD/MM/YYYY
    
    public validateSize(size: number): boolean {
        return super.validateSize(size) && size <= this.PROPOSAL_MAX_SIZE;
    }

    public validateExtension(extension: string): boolean {
        return extension == this.PROPOSAL_PDF_EXTENSION || extension == this.PROPOSAL_WORD_EXTENSION;
    }

    public validateMetadata(proposalDate?: string, client?: string): boolean {
        if (proposalDate == undefined) {
            return false;
        }

        if (client == undefined) {
            return false;
        }

        return proposalDate.length > this.PROPOSAL_DATE_LENGTH && client.length > this.DOCUMENT_MIN_NAME_LENGTH;
    }
}