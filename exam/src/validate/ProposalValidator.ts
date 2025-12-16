import { DocumentValidator } from "./DocumentValidator";
import { Document } from "../documents/Document";

const MAX_CONTRACT_SIZE_MB = 4;
const ALLOWED_CONTRACT_EXTENSIONS = ["xlsx", "xls"];

export class ContractValidator extends DocumentValidator {
    protected validateSpecific(document: Document): void {
        this.validateSizeMB(document.getSizeMB());

        this.validateExtension(document.getExtension());

        this.validateMetadata(document.getMetadata());
    }

    private validateSizeMB(sizeMB: number): void {
        if (sizeMB > MAX_CONTRACT_SIZE_MB) {
            throw new Error("Propuesta: tamaño máximo 4MB");
        }
    }

    private validateExtension(extension: string): void {
        if (!ALLOWED_CONTRACT_EXTENSIONS.includes(extension)) {
            throw new Error("Propuesta: solo se permiten archivos XLSX y XLS");
        }
    }

    private validateMetadata(metadata?: Record<string, string>): void {
        if (!metadata?.fiscalYear || !metadata?.department) {
            throw new Error("Propuesta: metadatos fiscalYear y department son obligatorios");
        }
    }
}