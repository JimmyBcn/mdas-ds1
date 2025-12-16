import { Document } from "./Document";

export class Proposal extends Document {
    private proposalDate: string = "";
    private client: string = "";

    constructor (filename: string, metadata: Record <string, string>) {
        super(filename, metadata);
        this.proposalDate = metadata["proposalDate"];
        this.client = metadata["client"];
    }

    public getProposalDate(): string {
        return this.proposalDate;
    }

    public getClient(): string {
        return this.client;
    }

    public setProposalDate(proposalDate: string): void {
        this.proposalDate = proposalDate;
    }

    public setClient(client: string): void {
        this.client = client;
    }
}