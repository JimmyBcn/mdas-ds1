export class ValidationResult {
  private isValid: boolean;
  private errors: string[];

  constructor(isValid: boolean = true, errors: string[] = []) {
    this.isValid = isValid;
    this.errors = errors;
  }

  public getIsValid(): boolean {
    return this.isValid;
  }

  public getErrors(): string[] {
    return this.errors;
  }

  public addError(error: string): void {
    this.isValid = false;
    this.errors.push(error);
  }
}
