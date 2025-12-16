import { IFileProcessor } from "../../interfaces/IFileProcessor";
import { CommercialProposalFileProcessor } from "./CommercialProposalFileProcessor";
import { FinancialReportFileProcessor } from "./FinancialReportFileProcessor";
import { LegalContractFileProcessor } from "./LegalContractFileProcessor";

export class FileProcessorFactory {
    private static readonly FILE_TYPE_LEGAL_CONTRACT = 'LEGAL_CONTRACT';
    private static readonly FILE_TYPE_FINANCIAL_REPORT = 'FINANCIAL_REPORT';
    private static readonly FILE_TYPE_COMERCIAL_PROPOSAL = 'COMERCIAL_PROPOSAL';

    static createFileProcessor(fileType: string): IFileProcessor {
        switch (fileType) {
            case this.FILE_TYPE_LEGAL_CONTRACT:
                return new LegalContractFileProcessor();

            case this.FILE_TYPE_FINANCIAL_REPORT:
                return new FinancialReportFileProcessor();

            case this.FILE_TYPE_COMERCIAL_PROPOSAL:
                return new CommercialProposalFileProcessor();

            default:
                throw new Error('Invalid file type');
        }
    }
}
