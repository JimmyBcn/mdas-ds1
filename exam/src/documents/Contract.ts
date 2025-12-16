import {Document} from './Document';

export class Contract extends Document {
    constructor(fileName: string, sizeMB: number, metadata: Record<string, string>) {
        super(fileName, sizeMB, metadata);
    }
}