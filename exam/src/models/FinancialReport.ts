import { Document } from "./Document";

export class FinancialReport extends Document {
  private static readonly MAX_SIZE_BYTES = 4 * 1024 * 1024; // 4 MB

  private fiscalYear: number;
  private department: string;

  constructor(fileName: string, fileSize: number, fiscalYear: number, department: string) {
    super(fileName, fileSize);
    this.fiscalYear = fiscalYear;
    this.department = department;
  }

  public getFiscalYear(): number {
    return this.fiscalYear;
  }

  public getDepartment(): string {
    return this.department;
  }

  protected getMaxSizeInBytes(): number {
    return FinancialReport.MAX_SIZE_BYTES;
  }

  protected getAllowedExtensions(): string[] {
    return ["xlsx", "xls"];
  }

  public validate(): string[] {
    const errors = super.validate();

    if (!this.fiscalYear || this.fiscalYear <= 0) {
      errors.push("Fiscal year is required for financial reports");
    }

    if (!this.department || this.department.trim() === "") {
      errors.push("Department is required for financial reports");
    }

    return errors;
  }
}
