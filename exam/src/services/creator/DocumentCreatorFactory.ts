import { Contract } from "../../models/Contract";
import { FinancialReport } from "../../models/FinancialReport";
import { Proposal } from "../../models/Proposal";
import { Document } from "../../models/Document";

export class DocumentCreatorFactory {

    private static readonly DOCUMENT_TYPE_CONTRACT = "Contrato Legal";
    private static readonly DOCUMENT_TYPE_FINANCIAL_REPORT = "Reporte Financiero";
    private static readonly DOCUMENT_TYPE_PROPOSAL = "Propuesta";

    static create(type: string, fileName: string, extension: string, metadata: Record<string, string>, fileSize: number): Document {
        switch (type) {
            case this.DOCUMENT_TYPE_CONTRACT:
                return new Contract(fileName, extension, metadata, fileSize);
            case this.DOCUMENT_TYPE_FINANCIAL_REPORT:
                return new FinancialReport(fileName, extension, metadata, fileSize);
            case this.DOCUMENT_TYPE_PROPOSAL:
                return new Proposal(fileName, extension, metadata, fileSize);
            default:
                throw new Error("Unknown document type: " + type);
        }
    }
}