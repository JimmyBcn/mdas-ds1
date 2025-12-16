import { Document } from "./Document";

export class Contract extends Document {
  public getDocumentType(): string {
    return "Contract";
  }
}
