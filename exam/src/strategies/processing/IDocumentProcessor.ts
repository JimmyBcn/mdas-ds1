import { Document } from "../../objects/Document";
import { ProcessResult } from "./ProcessResult";

export interface IDocumentProcessor {
    process(document: Document): ProcessResult;
}