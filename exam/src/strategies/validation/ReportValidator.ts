import { DocumentValidator } from "./DocumentValidator";

export class ReportValidator extends DocumentValidator {
    // max 4MB in size
    // extensions: .xlsx & .xls
    // requires metadata: fiscalYear & department
}