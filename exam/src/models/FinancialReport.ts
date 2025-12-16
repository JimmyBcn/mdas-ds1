import { Document } from "./Document";

export class FinancialReport extends Document {
  public getDocumentType(): string {
    return "Financial Report";
  }
}
