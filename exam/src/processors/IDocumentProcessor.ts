import { ProcessResult } from "./ProcessResult";
import { Document } from "../models/document";

interface IDocumentProcessor {
  process(document: Document): ProcessResult;
}

export { IDocumentProcessor };
