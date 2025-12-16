import { Document } from "../models/Document";
import { DocumentValidator } from "./DocumentValidator";

export class ContractValidator extends DocumentValidator {
  protected MAX_SIZE_KB = 3072;
  protected VALID_EXTENSIONS = [".pdf"];

  protected validateSpecific(document: Document): boolean {
    let isValid = true;
    const metadata = document.getMetadata();

    if (!metadata["author"]) {
      this.messages.push("El contrato debe especificar el autor");
      isValid = false;
    }

    if (!metadata["version"]) {
      this.messages.push("El contrato debe tener un número de versión");
      isValid = false;
    }

    if (isValid) {
      this.messages.push("Validación de contrato completada exitosamente");
    }

    return isValid;
  }
}
