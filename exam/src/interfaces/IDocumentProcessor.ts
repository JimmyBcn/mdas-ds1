
import { ProcessResult } from "../models/ProcessResult";

export interface IDocumentProcessor {
    process(document: Document): ProcessResult;
}