import { 
    IBaseDocument, Contract, FinancialReport,
     Proposal, Document,
} from "../models";


export class DocumentFactory {
    public static create(type: string, baseDocument: IBaseDocument): Document {
        switch (type) {
            case "Contract":
                return new Contract(baseDocument);
            case "FinancialReport":
                return new FinancialReport(baseDocument);
            case "Proposal":
                return new Proposal(baseDocument);
            default:
                throw new Error(`Document type ${type} not supported`);
        }
    }
}