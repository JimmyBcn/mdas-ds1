import { Document } from "../models";

export interface IDocumentProcessor {
  processDocument(document: Document): boolean;
}