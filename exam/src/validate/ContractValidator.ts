import { DocumentValidator } from "./DocumentValidator";
import { Document } from "../documents/Document";

const MAX_CONTRACT_SIZE_MB = 3;
const ALLOWED_CONTRACT_EXTENSIONS = ["pdf"];

export class ContractValidator extends DocumentValidator {
    protected validateSpecific(document: Document): void {
        this.validateSizeMB(document.getSizeMB());

        this.validateExtension(document.getExtension());

        this.validateMetadata(document.getMetadata());
    }

    private validateSizeMB(sizeMB: number): void {
        if (sizeMB > MAX_CONTRACT_SIZE_MB) {
            throw new Error("Contrato: tamaño máximo 3MB");
        }
    }

    private validateExtension(extension: string): void {
        if (!ALLOWED_CONTRACT_EXTENSIONS.includes(extension)) {
            throw new Error("Contrato: solo se permiten archivos PDF");
        }
    }

    private validateMetadata(metadata?: Record<string, string>): void {
        if (!metadata?.author || !metadata?.version) {
            throw new Error("Contrato: metadatos author y version son obligatorios");
        }
    }
}