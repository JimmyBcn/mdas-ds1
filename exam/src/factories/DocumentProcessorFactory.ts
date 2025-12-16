import { COMERCIAL_PROPOSAL_DOCUMENT_TYPE } from "../models/comercial_proposal";
import { FINANCIAL_REPORT_DOCUMENT_TYPE } from "../models/financial_report";
import { LEGAL_CONTRACT_DOCUMENT_TYPE } from "../models/legal_contract";
import { ComercialProposalProcessor } from "../processors/ComercialProposalProcessor";
import { FinancialReportProcessor } from "../processors/FinancialReportProcessor";
import { IDocumentProcessor } from "../processors/IDocumentProcessor";
import { LegalContractProcessor } from "../processors/LegalContractProcessor";


class DocumentProcessorFactory {
    static getProcessor(documentType: string): IDocumentProcessor {
        switch (documentType) {
            case FINANCIAL_REPORT_DOCUMENT_TYPE:
                return new FinancialReportProcessor();
            case LEGAL_CONTRACT_DOCUMENT_TYPE:
                return new LegalContractProcessor();
            case COMERCIAL_PROPOSAL_DOCUMENT_TYPE:
                return new ComercialProposalProcessor();
            default:
                throw new Error("Tipo de documento no permitido");
        }
    }
}

export { DocumentProcessorFactory };