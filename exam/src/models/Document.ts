import { ValidatorFactory } from "../factories/ValidatorFactory";

export type DocumentType = "Contract" | "FinancialReport" | "Proposal";

export abstract class Document {
  private validationMessages: string[] = [];
  private static validatorFactory = new ValidatorFactory();

  constructor(private readonly fileName: string, private readonly fileExtension: string, private readonly sizeInKB: number) {}

  getFileName(): string {
    return this.fileName;
  }

  getFileExtension(): string {
    return this.fileExtension;
  }

  getSizeInKB(): number {
    return this.sizeInKB;
  }

  abstract getDocumentType(): DocumentType;

  abstract getMetadata(): Record<string, string>;

  getValidationMessages(): string[] {
    return [...this.validationMessages];
  }

  isValid(): boolean {
    const validator = Document.validatorFactory.createValidator(this.getDocumentType());
    const isValid = validator.validate(this);
    this.validationMessages = validator.getValidationMessages();
    return isValid;
  }
}
