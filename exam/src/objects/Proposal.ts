import { Document } from "./Document";

export class Proposal extends Document {
    private proposalDate: string = "";
    private client: string = "";

    constructor (filename: string, extension: string, size: number, proposalDate: string, client: string) {
        super(filename, extension, size);
        this.proposalDate = proposalDate;
        this.client = client;
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