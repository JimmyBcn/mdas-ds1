import {Document} from '../documents/Document';
import {Contract} from '../documents/Contract';
import {Report} from '../documents/Report';
import {Proposal} from '../documents/Proposal';

export class DocumentFactory {
    static create(type: string, fileName: string, metadata: Record<string, string>): Document {
        
        const size = 2; //Pongo un tamaño fijo para simplificar, simulan MB

        switch (type) {
            case "Contract":
                return new Contract(fileName, size, metadata);
            case "FinancialReport":
                return new Report(fileName, size, metadata);
            case "Proposal":
                return new Proposal(fileName, size, metadata);
            default:
                throw new Error("Tipo de documento no soportado");
        }
    }
}