import { Document } from './document';

const COMERCIAL_PROPOSAL_EXTENSIONS = ['pdf', 'docx'];

class ComercialProposal extends Document {
    proposalDate: string;
    clientName: string;

    constructor(name: string, size: number, extension: string, proposalDate: string, clientName: string) {
        super(name, extension, size);
        this.proposalDate = proposalDate;
        this.clientName = clientName;
    }
}

export { ComercialProposal, COMERCIAL_PROPOSAL_EXTENSIONS };