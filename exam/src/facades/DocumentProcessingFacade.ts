import { Document } from "../models/Document";
import { ValidatedResult } from "../models/ValidatedResult";
import { ContractValidator } from "./legal-documents/validations/ContractValidator";
import { FinancialReportValidator } from "./financial-documents/validations/FinancialValidator";
import { CommercialValidator } from "./commercial-documents/validations/CommercialValidator";

export class DocumentProcessingFacade {
  processDocument(
    fileName: string,
    documentType: string,
    metadata?: Record<string, any>
  ): ValidatedResult {
    const document: Document = {
      fileName: fileName,
      size: 0,
      metadata: metadata || {},
    };

    let validationResult: ValidatedResult;

    switch (documentType.toLowerCase()) {
      case "contract":
        const contractValidator = new ContractValidator();
        validationResult = contractValidator.validate(document);
        break;
      case "financial":
        const financialValidator = new FinancialReportValidator();
        validationResult = financialValidator.validate(document);
        break;
      case "proposal":
        const commercialValidator = new CommercialValidator();
        validationResult = commercialValidator.validate(document);
        break;
      default:
        validationResult = new ValidatedResult(false, document, [
          `Unknown document type: ${documentType}`,
        ]);
    }

    return validationResult;
  }
}
