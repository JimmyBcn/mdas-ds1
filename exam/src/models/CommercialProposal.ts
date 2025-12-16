import { Document } from "./Document";

export class CommercialProposal extends Document {
  private static readonly MAX_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB

  private proposalDate: string;
  private client: string;

  constructor(fileName: string, fileSize: number, proposalDate: string, client: string) {
    super(fileName, fileSize);
    this.proposalDate = proposalDate;
    this.client = client;
  }

  public getProposalDate(): string {
    return this.proposalDate;
  }

  public getClient(): string {
    return this.client;
  }

  protected getMaxSizeInBytes(): number {
    return CommercialProposal.MAX_SIZE_BYTES;
  }

  protected getAllowedExtensions(): string[] {
    return ["pdf", "docx"];
  }

  // validate checks the basic document information and checks for required metadata specific to CommercialProposal
  public validate(): string[] {
    const errors = super.validate();

    if (!this.proposalDate || this.proposalDate.trim() === "") {
      errors.push("Proposal date is required for commercial proposals");
    }

    if (!this.client || this.client.trim() === "") {
      errors.push("Client is required for commercial proposals");
    }

    return errors;
  }
}
