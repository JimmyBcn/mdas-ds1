import { GenericFile } from "../models/FileTypes/GenericFile";
import { ProcessedResult } from "../models/ProcessedResult";


export interface IFileProcessor {
    processFile(file: GenericFile): ProcessedResult;
}