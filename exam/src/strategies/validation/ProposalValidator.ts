import { DocumentValidator } from "./DocumentValidator";

export class ProposalValidator extends DocumentValidator {
    // max 5MB in size
    // extensions: .pdf & .docx
    // requires metadata: proposalDate & client
}