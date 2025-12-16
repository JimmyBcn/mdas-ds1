import { ProcessResult } from "../../models/ProcessResult";
import { Document } from "../../models/Document";
import { ContractProcessor } from "./ContractProcessor";
import { FinancialReportProcessor } from "./FinancialReportProcessor";
import { ProposalProcessor } from "./ProposalProcessor";

export class DocumentProcessorFactory {
    private static readonly DOCUMENT_TYPE_CONTRACT = "Contrato Legal";
    private static readonly DOCUMENT_TYPE_FINANCIAL_REPORT = "Reporte Financiero";
    private static readonly DOCUMENT_TYPE_PROPOSAL = "Propuesta";

    static process(document: Document): ProcessResult {
        switch (document.getDocumentType()) {
            case this.DOCUMENT_TYPE_CONTRACT:
                return new ContractProcessor().process(document);
            case this.DOCUMENT_TYPE_FINANCIAL_REPORT:
                return new FinancialReportProcessor().process(document);
            case this.DOCUMENT_TYPE_PROPOSAL:
                return new ProposalProcessor().process(document);
            default:
                throw new Error("No processor found for type: " + document.getDocumentType());
        }
    }
} 