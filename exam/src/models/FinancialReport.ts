import { Document } from "./Document";
import { Extension } from "./enum/Extension";

export class FinancialReport extends Document {
    public readonly maxFileSize: number = 4
    constructor(
        public readonly name: string,
        public readonly fileSize: number,
        public readonly fiscalYear: string,
        public readonly department: string,
    ){
        super(name, fileSize)
    }

        validateDocument(): boolean {
        let metadataIsValid = this.fiscalYear != null && this.fiscalYear != "" && this.department != null && this.department != ""
            return super.validateName() && 
                    super.validateExtension(Extension.XLS) &&
                    super.validateExtension(Extension.XLSX) &&
                    super.validateSize(this.maxFileSize) &&
                    metadataIsValid; 
        }
}