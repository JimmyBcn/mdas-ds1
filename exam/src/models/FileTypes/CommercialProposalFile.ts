import { GenericFile } from "./GenericFile";

export class CommercialProposalFile extends GenericFile {
    constructor(fileName: string, documentType: string, size: number, extension: string, metadata: Record<string, string>) {
        super(fileName, documentType, size, extension, metadata);
    }
}