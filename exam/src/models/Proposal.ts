import { Document } from "./Document";

export class Proposal extends Document {
  public getDocumentType(): string {
    return "Proposal";
  }
}