import { Document } from '../models/document';

abstract class DocumentValidator {
    validate(document: Document): boolean {
        return this.validateExtension(document.extension) &&
               this.validateSize(document.size) &&
               this.validateName(document.name);
    }

    abstract validateExtension(extension: string): boolean;

    abstract validateSize(size: number): boolean;

    validateName(name: string): boolean {
        return name !== null && name !== undefined && name.trim() !== '';
    }
}

export { DocumentValidator };