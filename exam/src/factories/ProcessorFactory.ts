import { IDocumentProcessor } from "../strategies/processing/IDocumentProcessor";
import { ContractProcessor } from "../strategies/processing/ContractProcessor";
import { ReportProcessor } from "../strategies/processing/ReportProcessor";
import { ProposalProcessor } from "../strategies/processing/ProposalProcessor";

export class ProcessorFactory {
    private static readonly DOCUMENT_TYPE_CONTRACT = "Contract";
    private static readonly DOCUMENT_TYPE_REPORT = "Report";
    private static readonly DOCUMENT_TYPE_PROPOSAL = "Proposal";

    static createDocumentProcessor(documentType: string): IDocumentProcessor {
        switch (documentType) {
            case this.DOCUMENT_TYPE_CONTRACT:
                return new ContractProcessor();
            case this.DOCUMENT_TYPE_REPORT:
                return new ReportProcessor();
            case this.DOCUMENT_TYPE_PROPOSAL:
                return new ProposalProcessor();
            default:
                throw new Error(`Unknown document type: ${documentType}`);
        }
    }
}