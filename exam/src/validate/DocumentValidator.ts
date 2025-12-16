import { Document } from "../documents/Document";


export abstract class DocumentValidator {
    validate(document: Document): void {
        this.validateBase(document);
        
        this.validateSpecific(document);
    }


    protected validateBase(document: Document): void {
        this.validateFileName(document.getFileName());

        this.validateEmptySize(document.getSizeMB());
    }

    private validateFileName(fileName: string): void {
        if (!fileName || fileName.trim() === "") {
            throw new Error("El nombre del archivo no puede estar vacío");
        }
    }

    private validateEmptySize(sizeMB: number): void {
        if (sizeMB <= 0) {
            throw new Error("El tamaño del archivo debe ser mayor a 0");
        }
    }

    protected abstract validateSpecific(document: Document): void;
}