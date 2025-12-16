import { Document } from "./Document";
import { DocumentType } from "./Document";
import { ContractMetadata } from "./ContractMetadata";

export class Contract extends Document {
  constructor(fileName: string, fileExtension: string, sizeInKB: number, private readonly metadata: ContractMetadata) {
    super(fileName, fileExtension, sizeInKB);
  }

  getDocumentType(): DocumentType {
    return "Contract";
  }

  getMetadata(): Record<string, string> {
    return {
      author: this.metadata.author,
      version: this.metadata.version,
    };
  }
}
