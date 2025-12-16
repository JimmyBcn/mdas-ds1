import { Document } from "../documents/Document";
import { ProcessResult } from "../ProcessResult";

export interface IDocumentProcessorStrategy {
    process(document: Document): ProcessResult;
}