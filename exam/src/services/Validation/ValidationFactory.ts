import { IValidationStrategy } from "../../interfaces/IValidationStrategy";
import { ComercialProposalValidation } from "./ComercialProposalValidation";
import { ContractValidation } from "./ContractValidation";
import { FinancialReportValidation } from "./FinancialReportValidation";
import { FileType } from "../../models/Document/FileType";

export class ValidationFactory 
{
    static create(documentType: FileType): IValidationStrategy {
        switch (documentType) {
            case FileType.ContratoLegal:
                return new ContractValidation();
            case FileType.PropuestaComercial:
                return new ComercialProposalValidation();
            case FileType.ReporteFinanciero:
                return new FinancialReportValidation();
            default:
                throw new Error("Invalid document type");
        }
    }
}