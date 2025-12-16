import { Document } from "./Document";

export class Contract extends Document {
    constructor(
        public readonly name: string,
        public readonly fileSize: number,
        public readonly author: string,
        public readonly version: string,
    ){
        super(name, fileSize)
    }
}
