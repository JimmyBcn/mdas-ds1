import { Document } from "./Document";
import { Extension } from "./enum/Extension";
export class Proposal extends Document {
    public readonly maxFileSize: number = 5
    constructor(
        public readonly name: string,
        public readonly fileSize: number,
        public readonly proposalDate: string,
        public readonly client: string,
    ){
        super(name, fileSize)
    }

    validateDocument(): boolean {
        let metadataIsValid = this.proposalDate != null && this.proposalDate != "" && this.client != null && this.client != ""
        return super.validateName() && 
                super.validateExtension(Extension.PDF) &&
                super.validateExtension(Extension.DOCX) &&
                super.validateSize(this.maxFileSize) &&
                metadataIsValid; 
        }
}