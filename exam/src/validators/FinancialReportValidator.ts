import { Document } from "../models/Document";
import { DocumentValidator } from "./DocumentValidator";

export class FinancialReportValidator extends DocumentValidator {
  protected MAX_SIZE_KB = 4096;
  protected VALID_EXTENSIONS = [".xlsx", ".xls"];

  protected validateSpecific(document: Document): boolean {
    let isValid = true;
    const metadata = document.getMetadata();

    if (!metadata["fiscalYear"]) {
      this.messages.push("El reporte financiero debe indicar el año fiscal");
      isValid = false;
    }

    if (!metadata["department"]) {
      this.messages.push("El reporte financiero debe indicar el departamento");
      isValid = false;
    }

    if (isValid) {
      this.messages.push("Validación de reporte financiero completada exitosamente");
    }

    return isValid;
  }
}
