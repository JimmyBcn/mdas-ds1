import { Document } from './document';

const COMERCIAL_PROPOSAL_ALLOWED_EXTENSIONS = ['pdf', 'docx'];
const MAX_COMERCIAL_PROPOSAL_SIZE = 5 * 1024 * 1024; // 5 MB

class ComercialProposal extends Document {
    proposalDate: string;
    clientName: string;

    constructor(name: string, size: number, extension: string, proposalDate: string, clientName: string) {
        super(name, extension, size);
        this.proposalDate = proposalDate;
        this.clientName = clientName;
    }
}

export { ComercialProposal, COMERCIAL_PROPOSAL_ALLOWED_EXTENSIONS, MAX_COMERCIAL_PROPOSAL_SIZE };