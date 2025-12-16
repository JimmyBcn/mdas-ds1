import { ComercialProposalValidator } from '../validators';
import { Document } from './document';

const COMERCIAL_PROPOSAL_ALLOWED_EXTENSIONS = ['pdf', 'docx'];
const MAX_COMERCIAL_PROPOSAL_SIZE = 5 * 1024 * 1024; // 5 MB
const COMERCIAL_PROPOSAL_DOCUMENT_TYPE = 'ComercialProposal';

class ComercialProposal extends Document {
    proposalDate: string;
    clientName: string;

    private validator: ComercialProposalValidator;

    constructor(name: string, size: number, extension: string, proposalDate: string, clientName: string) {
        super(name, extension, size);
        this.proposalDate = proposalDate;
        this.clientName = clientName;
        this.validator = new ComercialProposalValidator();
    }

    validate(): boolean {
        return this.validator.validate(this);
    }
}

export { ComercialProposal, COMERCIAL_PROPOSAL_ALLOWED_EXTENSIONS, MAX_COMERCIAL_PROPOSAL_SIZE, COMERCIAL_PROPOSAL_DOCUMENT_TYPE };