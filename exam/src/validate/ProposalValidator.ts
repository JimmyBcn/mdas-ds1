import { DocumentValidator } from "./DocumentValidator";
import { Document } from "../documents/Document";

const MAX_PROPOSAL_SIZE_MB = 4;
const ALLOWED_PROPOSAL_EXTENSIONS = ["xlsx", "xls"];

export class ProposalValidator extends DocumentValidator {
    protected validateSpecific(document: Document): void {
        this.validateSizeMB(document.getSizeMB());

        this.validateExtension(document.getExtension());

        this.validateMetadata(document.getMetadata());
    }

    private validateSizeMB(sizeMB: number): void {
        if (sizeMB > MAX_PROPOSAL_SIZE_MB) {
            throw new Error("Propuesta: tamaño máximo 4MB");
        }
    }

    private validateExtension(extension: string): void {
        if (!ALLOWED_PROPOSAL_EXTENSIONS.includes(extension)) {
            throw new Error("Propuesta: solo se permiten archivos XLSX y XLS");
        }
    }

    private validateMetadata(metadata?: Record<string, string>): void {
        if (!metadata?.fiscalYear || !metadata?.department) {
            throw new Error("Propuesta: metadatos fiscalYear y department son obligatorios");
        }
    }
}