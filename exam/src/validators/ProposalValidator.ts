import { DocumentValidator } from "./DocumentValidator";

export class ProposalValidator extends DocumentValidator {
  constructor() {
    super(5, [".pdf", ".docx"], ["proposalDate", "client"]);
  }
}
