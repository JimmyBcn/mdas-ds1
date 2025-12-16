import { Document } from "../models/Document";
import { DocumentValidator } from "./DocumentValidator";

export class ProposalValidator extends DocumentValidator {
  protected MAX_SIZE_KB = 5120;
  protected VALID_EXTENSIONS = [".pdf", ".docx"];

  protected validateSpecific(document: Document): boolean {
    let isValid = true;
    const metadata = document.getMetadata();

    if (!metadata["proposalDate"]) {
      this.messages.push("La propuesta debe incluir una fecha");
      isValid = false;
    }

    if (!metadata["client"]) {
      this.messages.push("La propuesta debe especificar el cliente");
      isValid = false;
    }

    if (isValid) {
      this.messages.push("Validación de propuesta completada exitosamente");
    }

    return isValid;
  }
}
