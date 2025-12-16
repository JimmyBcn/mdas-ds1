import { Document } from "./Document";
import { Extension } from "./enum/Extension";

export class Contract extends Document {
    public readonly maxFileSize: number = 3
    constructor(
        public readonly name: string,
        public readonly fileSize: number,
        public readonly author: string,
        public readonly version: string,
    ){
        super(name, fileSize)
    }

    validateDocument(): boolean {
        let metadataIsValid = this.author != null && this.author != "" && this.version != null && this.version != ""
        return super.validateName() && 
                super.validateExtension(Extension.PDF) &&
                super.validateSize(this.maxFileSize) &&
                metadataIsValid; 
    }
}
