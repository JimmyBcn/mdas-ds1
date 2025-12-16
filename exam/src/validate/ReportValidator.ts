import { DocumentValidator } from "./DocumentValidator";
import { Document } from "../documents/Document";

const MAX_CONTRACT_SIZE_MB = 5;
const ALLOWED_CONTRACT_EXTENSIONS = ["pdf", "docx"];

export class ContractValidator extends DocumentValidator {
    protected validateSpecific(document: Document): void {  
        this.validateSizeMB(document.getSizeMB());

        this.validateExtension(document.getExtension());

        this.validateMetadata(document.getMetadata());
    }

    private validateSizeMB(sizeMB: number): void {
        if (sizeMB > MAX_CONTRACT_SIZE_MB) {
            throw new Error("Report: tamaño máximo 5MB");
        }
    }

    private validateExtension(extension: string): void {
        if (!ALLOWED_CONTRACT_EXTENSIONS.includes(extension)) {
            throw new Error("Report: solo se permiten archivos PDF y DOCX");
        }
    }

    private validateMetadata(metadata?: Record<string, string>): void {
        if (!metadata?.proposalDate || !metadata?.client) {
            throw new Error("Report: metadatos proposalDate y client son obligatorios");
        }
    }
}