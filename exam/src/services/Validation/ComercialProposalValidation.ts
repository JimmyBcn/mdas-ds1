import { IValidationStrategy } from "../../interfaces/IValidationStrategy";
import { Documento } from "../../models/Document/Documento";
import { MaxFileSizes } from "./MaxFileSizes";


export class ComercialProposalValidation implements IValidationStrategy {

    Validate(document: Documento): boolean {

        return  (this.isPDF(document) || this.isWord(document)) &&
         this.validateSize(document) && this.hasRequiredMetadata(document);

    }

    private validateSize(document: Documento): boolean {
        return document.getsize() <= MaxFileSizes.ComercialProposal;
    }

    private hasRequiredMetadata(document: Documento): boolean {
        const metadata = document.getMetadata();
        return metadata.hasOwnProperty('proposalDate') && metadata.hasOwnProperty('client');
    }

    private isPDF(document: Documento): boolean {
        const fileName = document.getExtensionFromFile();
        return fileName.toLowerCase().endsWith('pdf');
    }

    private isWord(document: Documento): boolean {
        const fileName = document.getExtensionFromFile();
        return fileName.toLowerCase().endsWith('docx');
    }   
    
}
