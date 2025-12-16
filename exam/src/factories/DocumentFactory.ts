import { COMERCIAL_PROPOSAL_DOCUMENT_TYPE, ComercialProposal } from "../models/comercial_proposal";
import { FINANCIAL_REPORT_DOCUMENT_TYPE, FinancialReport } from "../models/financial_report";
import { LEGAL_CONTRACT_DOCUMENT_TYPE, LegalContract } from "../models/legal_contract";

class DocumentFactory {
    static createDocument(
    documentType: string,
    fileName: string,
    metadata?: Record<string, string>
    ): ComercialProposal | LegalContract | FinancialReport {
        switch (documentType) {
            case COMERCIAL_PROPOSAL_DOCUMENT_TYPE:
                return new ComercialProposal(
                    fileName,
                    parseInt(metadata?.size || '0'),
                    fileName.split('.').pop() || '',
                    metadata?.proposalDate || '',
                    metadata?.clientName || ''
                );
            case LEGAL_CONTRACT_DOCUMENT_TYPE:
                return new LegalContract(
                    fileName,
                    parseInt(metadata?.size || '0'),
                    fileName.split('.').pop() || '',
                    metadata?.author || '',
                    metadata?.version || ''
                );
            case FINANCIAL_REPORT_DOCUMENT_TYPE:
                return new FinancialReport(
                    fileName,
                    parseInt(metadata?.size || '0'),
                    fileName.split('.').pop() || '',
                    metadata?.fiscalYear || '',
                    metadata?.department || ''
                );
            default:
                // @TODO: Crear custom Error para tipo de documento no permitido
                throw new Error("Tipo de documento no permitido");
        }
    }
}

export { DocumentFactory };