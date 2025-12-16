import { GenericFile } from "../../models/FileTypes/GenericFile";
import { IFileValidator } from "../../interfaces/IFileValidator";
import { ValidationRules } from "./ValidationRules";

export class BaseFileValidator implements IFileValidator {

    private rules!: ValidationRules;

    constructor() { }

    validate(file: GenericFile): boolean {
        if (!this.rules) {
            throw new Error("Validation rules not set");
        }
        return this.validateFileSize(file.getSize()) &&
            this.validateFileExtension(file.getExtension()) &&
            this.validateFileNameIsNotEmpty(file.getFileName()) &&
            this.validateMetadata(file.getMetadata());
    }

    setValidationRules(rules: ValidationRules) {
        this.rules = rules;
    }

    private validateFileSize(size: number) {
        return size <= this.rules.maxBytes;
    }
    private validateFileExtension(ext: string) {
        return this.rules.allowedExtensions.includes(ext);
    }
    private validateFileNameIsNotEmpty(name: string) {
        return this.rules.requireName ? name.trim().length > 0 : true;
    }
    private validateMetadata(metadata: Record<string, string>) {
        return this.rules.requiredMetadata.every(key => metadata[key] !== undefined);
    }
}