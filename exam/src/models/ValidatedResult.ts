import { Document } from "./Document";

export class ValidatedResult {
  constructor(
    public readonly isValid: boolean,
    public readonly document: Document,
    public readonly errors: string[] = []
  ) {}

  // Combines all error messages into one string
  getErrorMessage(): string {
    return this.errors.join("; ");
  }

  // Generates a readable report
  getReport(): string {
    if (this.isValid) {
      return `✓ Validation passed for '${this.document.fileName}'`;
    }
    return `✗ Validation failed for '${
      this.document.fileName
    }': ${this.getErrorMessage()}`;
  }
}
