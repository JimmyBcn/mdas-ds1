import { Document } from "./Document";
import { DocumentType } from "./Document";
import { ProposalMetadata } from "./ProposalMetadata";

export class Proposal extends Document {
  constructor(fileName: string, fileExtension: string, sizeInKB: number, private readonly metadata: ProposalMetadata) {
    super(fileName, fileExtension, sizeInKB);
  }

  getDocumentType(): DocumentType {
    return "Proposal";
  }

  getMetadata(): Record<string, string> {
    return {
      proposalDate: this.metadata.proposalDate,
      client: this.metadata.client,
    };
  }
}
