import {Document} from './Document';

export class Report extends Document {
    constructor(fileName: string, sizeMB: number, metadata: Record<string, string>) {
        super(fileName, sizeMB, metadata);
    }
}