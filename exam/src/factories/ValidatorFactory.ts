import { DocumentValidator } from "../validators/DocumentValidator";
import { ContractValidator } from "../validators/ContractValidator";
import { FinancialReportValidator } from "../validators/FinancialReportValidator";
import { ProposalValidator } from "../validators/ProposalValidator";
import { DocumentType } from "../models/Document";

export class ValidatorFactory {
  createValidator(documentType: DocumentType): DocumentValidator {
    switch (documentType) {
      case "Contract":
        return new ContractValidator();

      case "FinancialReport":
        return new FinancialReportValidator();

      case "Proposal":
        return new ProposalValidator();

      default:
        throw new Error(`Tipo de documento no soportado: ${documentType}`);
    }
  }
}
