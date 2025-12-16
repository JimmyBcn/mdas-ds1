import { DocumentValidator } from "./DocumentValidator";

export class FinancialReportValidator extends DocumentValidator {
  constructor() {
    super(4, [".xlsx", ".xls"], ["fiscalYear", "department"]);
  }
}