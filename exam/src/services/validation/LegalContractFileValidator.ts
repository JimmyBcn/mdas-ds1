import { IFileValidator } from "../../interfaces/IFileValidator";
import { GenericFile } from "../../models/GenericFile";

export class LegalContractFileValidator implements IFileValidator {

    private readonly MAX_FILE_SIZE = 3 * 1024 * 1024; // 3 MB       
    private readonly ALLOWED_FILE_EXTENSIONS = ['pdf'];
    private readonly REQUIRED_METADATA = ['author', 'version'];

    validate(size: number, fileExtension: string, fileName: string, metadata: Record<string, string>): boolean {
        return this.validateFileSize(size) && this.validateFileExtension(fileExtension) && this.validateFileNameIsNotEmpty(fileName) && this.validateMetadata(metadata);
    }

    private validateFileSize(size: number): boolean {
        return size <= this.MAX_FILE_SIZE;
    }

    private validateFileExtension(fileExtension: string): boolean {
        return this.ALLOWED_FILE_EXTENSIONS.includes(fileExtension);
    }

    private validateFileNameIsNotEmpty(fileName: string): boolean {
        return fileName.length > 0;
    }

    private validateMetadata(metadata: Record<string, string>): boolean {
        return this.REQUIRED_METADATA.every(key => metadata[key] !== undefined);
    }
}