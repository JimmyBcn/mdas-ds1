import { Document } from "./Document";

export class Proposal extends Document {
    constructor(
        public readonly name: string,
        public readonly fileSize: number,
        public readonly proposalDate: Date,
        public readonly client: string,
    ){
        super(name, fileSize)
    }
}