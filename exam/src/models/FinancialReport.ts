import { Document } from "./Document";

export class FinancialReport extends Document {
    constructor(
        public readonly name: string,
        public readonly fileSize: number,
        public readonly fiscalYear: number,
        public readonly department: string,
    ){
        super(name, fileSize)
    }
}