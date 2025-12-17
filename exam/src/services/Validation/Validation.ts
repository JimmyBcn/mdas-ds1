import { IValidation } from "../../interfaces/IValidation";
import { Documento } from "../../models/Document/Documento";
import { FileType } from "../../models/Document/FileType";
import { ValidationFactory } from "./ValidationFactory";

export class Validation implements IValidation {

  validateDocument(documentType: FileType, document: Documento): boolean {
    const validationStrategy = ValidationFactory.create(documentType);
    return validationStrategy.Validate(document);
  }

}