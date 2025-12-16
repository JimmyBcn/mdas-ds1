import { ComercialProposal, MAX_COMERCIAL_PROPOSAL_SIZE, COMERCIAL_PROPOSAL_ALLOWED_EXTENSIONS } from '../models/comercial_proposal';
import { DocumentValidator } from './document_validator';

class ComercialProposalValidator extends DocumentValidator {
    validate(comercialProposal: ComercialProposal): boolean {
        return super.validate(comercialProposal) &&
               this.validateProposalDate(comercialProposal.proposalDate) &&
               this.validateClientName(comercialProposal.clientName);
    }

    validateSize(size: number): boolean {
        return size > 0 && size <= MAX_COMERCIAL_PROPOSAL_SIZE;
    }

    validateExtension(extension: string): boolean {
        return COMERCIAL_PROPOSAL_ALLOWED_EXTENSIONS.includes(extension);
    }

    validateProposalDate(proposalDate: string): boolean {
        return proposalDate !== null && proposalDate !== undefined && proposalDate.trim() !== '';
    }

    validateClientName(clientName: string): boolean {
        return clientName !== null && clientName !== undefined && clientName.trim() !== '';
    }
}

export { ComercialProposalValidator };