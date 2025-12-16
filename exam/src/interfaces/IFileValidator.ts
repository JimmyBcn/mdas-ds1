import { GenericFile } from "../models/FileTypes/GenericFile";


export interface IFileValidator {
    validate(file: GenericFile): boolean;
}