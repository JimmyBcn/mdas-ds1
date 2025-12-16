import { Document } from "./Document";

export class ValidatedResult {
  constructor(
    public readonly isValid: boolean,
    public readonly document: Document,
    public readonly errors: string[] = []
  ) {}

  hasErrors(): boolean {
    return !this.isValid || this.errors.length > 0;
  }

  getErrorMessage(): string {
    return this.errors.join("; ");
  }

  getReport(): string {
    if (this.isValid) {
      return `Validation passed for '${this.document.fileName}'`;
    }
    return `Validation failed for '${
      this.document.fileName
    }': ${this.getErrorMessage()}`;
  }
}
