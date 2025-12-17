import { Documento } from "../models/Document/Documento";
import { FileType } from "../models/Document/FileType";

export interface IValidation{
    validateDocument(documentType: FileType, document: Documento): boolean;
}