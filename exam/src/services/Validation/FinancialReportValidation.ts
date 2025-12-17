import { IValidationStrategy } from "../../interfaces/IValidationStrategy";
import { Documento } from "../../models/Document/Documento";
import { MaxFileSizes } from "./MaxFileSizes";


export class FinancialReportValidation implements IValidationStrategy {

    Validate(document: Documento): boolean {

        return this.isExcel(document) && this.validateSize(document) && this.hasRequiredMetadata(document);

    }

    private isExcel(document: Documento): boolean {
        const fileName = document.getExtensionFromFile();
        return fileName.toLowerCase().endsWith('xlsx') || fileName.toLowerCase().endsWith('xls');
    }

    private validateSize(document: Documento): boolean {
        return document.getsize() <= MaxFileSizes.FinancialReport;
    }

    private hasRequiredMetadata(document: Documento): boolean {
        const metadata = document.getMetadata();
        return metadata.hasOwnProperty('fiscalYear') && metadata.hasOwnProperty('department');
    }

}
