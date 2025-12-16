import { GenericFile } from "../models/GenericFile";

export interface IFileValidator {
    validate(size: number, fileExtension: string, fileName: string, metadata: Record<string, string>): boolean;
}