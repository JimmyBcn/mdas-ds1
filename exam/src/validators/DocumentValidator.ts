import { Document } from "../models/Document";

export abstract class DocumentValidator {
  protected messages: string[] = [];
  protected MAX_SIZE_KB = 5120;
  protected VALID_EXTENSIONS: string[] = [];

  validate(document: Document): boolean {
    this.messages = [];

    const baseValidation = this.validateBase(document);
    const specificValidation = this.validateSpecific(document);

    return baseValidation && specificValidation;
  }

  protected validateBase(document: Document): boolean {
    let isValid = true;

    if (document.getSizeInKB() > this.MAX_SIZE_KB) {
      this.messages.push(`Archivo demasiado grande: ${document.getSizeInKB()}KB (máximo: ${this.MAX_SIZE_KB}KB)`);
      isValid = false;
    }

    if (this.VALID_EXTENSIONS.length > 0 && !this.VALID_EXTENSIONS.includes(document.getFileExtension())) {
      this.messages.push(`Extensión no válida: ${document.getFileExtension()} (permitidas: ${this.VALID_EXTENSIONS.join(", ")})`);
      isValid = false;
    }

    if (!document.getFileName() || document.getFileName().trim() === "") {
      this.messages.push("El nombre del archivo no puede estar vacío");
      isValid = false;
    }

    return isValid;
  }

  protected abstract validateSpecific(document: Document): boolean;

  getValidationMessages(): string[] {
    return [...this.messages];
  }
}
