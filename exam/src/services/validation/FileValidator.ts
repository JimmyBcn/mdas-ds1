import { IFileValidator } from "../../interfaces/IFileValidator";
import { FileValidatorFactory } from "./FileValidatorFactory";
import { GenericFile } from "../../models/GenericFile";

export class FileValidator implements IFileValidator {

    validate(file: GenericFile): boolean {
        const validator = FileValidatorFactory.createFileValidator(file.getDocumentType());
        return validator.validate(file.getSize(), file.getExtension(), file.getFileName(), file.getMetadata());
    }
}