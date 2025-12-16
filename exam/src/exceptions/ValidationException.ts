export class ValidationException extends Error {
  constructor(message: string, private readonly validationMessages: string[]) {
    super(message);
    this.name = "ValidationException";
  }

  getValidationMessages(): string[] {
    return [...this.validationMessages];
  }
}
