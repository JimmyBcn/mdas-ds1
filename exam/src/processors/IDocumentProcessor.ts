import { Document } from "../models/Document";
import { ProcessResult } from "../results/ProcessResult";

export interface IDocumentProcessor {
  process(document: Document): ProcessResult;
}
