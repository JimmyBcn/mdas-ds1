import { IFileValidator } from "../interfaces/IFileValidator";

export class FileValidator implements IFileValidator {

    validateFileSize(): boolean {
        return true;
    }
    validateFileExtension(file: File): boolean {
        return true;
    }
    validateFileNameIsNotEmpty(file: File): boolean {
        return true;
    }
}
