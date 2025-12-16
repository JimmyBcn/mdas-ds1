import { Contract } from "../objects/Contract";
import { Document } from "../objects/Document";
import { Proposal } from "../objects/Proposal";
import { Report } from "../objects/Report";

export class DocumentFactory {
    private static readonly DOCUMENT_TYPE_CONTRACT = "Contract";
    private static readonly DOCUMENT_TYPE_REPORT = "Report";
    private static readonly DOCUMENT_TYPE_PROPOSAL = "Proposal";

    static createDocument(documentType: string, fileName: string, metadata?: Record<string, string>): Document {
        if (metadata == undefined) {
            throw new Error("Metadata should contain at least the document size.");
        }

        switch (documentType) {
            case this.DOCUMENT_TYPE_CONTRACT:
                return new Contract(fileName, metadata);
            case this.DOCUMENT_TYPE_REPORT:
                return new Report(fileName, metadata);
            case this.DOCUMENT_TYPE_PROPOSAL:
                return new Proposal(fileName, metadata);
            default:
                throw new Error(`Unknown document type: ${documentType}`);
        }
    }
}