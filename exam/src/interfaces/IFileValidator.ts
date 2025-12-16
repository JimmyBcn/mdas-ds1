export interface IFileValidator {
    validateFileSize(file: File): boolean;
    validateFileExtension(file: File): boolean;
    validateFileNameIsNotEmpty(file: File): boolean;
}