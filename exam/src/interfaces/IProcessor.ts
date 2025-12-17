import { Documento } from "../models/Document/Documento";
import { ProcessResult } from "../models/ProcessResult";

export interface IDocumentProcessor  {
    process(data: Documento): ProcessResult;
}