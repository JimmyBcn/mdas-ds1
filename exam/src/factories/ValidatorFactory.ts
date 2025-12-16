import { ContractValidator } from "../strategies/validation/ContractValidator";
import { DocumentValidator } from "../strategies/validation/DocumentValidator";
import { ProposalValidator } from "../strategies/validation/ProposalValidator";
import { ReportValidator } from "../strategies/validation/ReportValidator";

export class ValidatorFactory {
    private static readonly DOCUMENT_TYPE_CONTRACT = "Contract";
    private static readonly DOCUMENT_TYPE_REPORT = "Report";
    private static readonly DOCUMENT_TYPE_PROPOSAL = "Proposal";

    static createDocumentValidator(documentType: string): DocumentValidator {
        switch (documentType) {
            case this.DOCUMENT_TYPE_CONTRACT:
                return new ContractValidator();
            case this.DOCUMENT_TYPE_REPORT:
                return new ReportValidator();
            case this.DOCUMENT_TYPE_PROPOSAL:
                return new ProposalValidator();
            default:
                throw new Error(`Unknown document type: ${documentType}`);
        }
    }
}