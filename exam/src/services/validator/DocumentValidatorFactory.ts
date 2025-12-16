import { Document } from "../../models/Document";
import { ContractValidator } from "../validator/ContractValidator";
import { FinancialReportValidator } from "../validator/FinancialReportValidator";
import { ProposalValidator } from "../validator/ProposalValidator";
import { DocumentValidator } from "../validator/DocumentValidator";

export class DocumentValidatorFactory {
    private static readonly DOCUMENT_TYPE_CONTRACT = "Contrato Legal";
    private static readonly DOCUMENT_TYPE_FINANCIAL_REPORT = "Reporte Financiero";
    private static readonly DOCUMENT_TYPE_PROPOSAL = "Propuesta";

    static validate(document: Document): DocumentValidator {
        switch (document.getDocumentType()) {
            case this.DOCUMENT_TYPE_CONTRACT:
                return new ContractValidator().validate(document);
            case this.DOCUMENT_TYPE_FINANCIAL_REPORT:
                return new FinancialReportValidator().validate(document);
            case this.DOCUMENT_TYPE_PROPOSAL:
                return new ProposalValidator().validate(document);
            default:
                throw new Error("This file type is not supported");
        }
    }
}