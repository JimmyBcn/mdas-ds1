import { IValidationStrategy } from "../../interfaces/IValidationStrategy";
import { Documento } from "../../models/Document/Documento";
import { MaxFileSizes } from "./MaxFileSizes";

export class ContractValidation implements IValidationStrategy {

    Validate(document: Documento): boolean {
    
        return this.isPDF(document) && this.validateSize(document) && this.hasRequiredMetadata(document);

    }   

    private isPDF(document: Documento): boolean {
        const fileName = document.getExtensionFromFile();
        return fileName.toLowerCase() === 'pdf';
    }
    
    private validateSize(document: Documento): boolean {
        return document.getsize() <= MaxFileSizes.Contract;
    }

    private hasRequiredMetadata(document: Documento): boolean {
        const metadata = document.getMetadata();
        return metadata.hasOwnProperty('author') && metadata.hasOwnProperty('version');
    }

}


