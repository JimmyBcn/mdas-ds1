import { DocumentValidator, ContractValidator, FinancialReportValidator, ProposalValidator } from "../validators";

export class ValidatorFactory {
  public static createValidator(documentType: string): DocumentValidator {
    switch (documentType) {
      case "Contract":
        return new ContractValidator();

      case "FinancialReport":
        return new FinancialReportValidator();

      case "Proposal":
        return new ProposalValidator();

      default:
        throw new Error(`Unsupported document type: ${documentType}`);
    }
  }
}
