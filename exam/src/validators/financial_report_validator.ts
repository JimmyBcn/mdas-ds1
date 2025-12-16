import { FinancialReport, MAX_FINANCIAL_REPORT_SIZE, FINANCIAL_REPORT_ALLOWED_EXTENSIONS } from "../models/financial_report";
import { DocumentValidator } from './document_validator';

class FinancialReportValidator extends DocumentValidator {
    validate(financialReport: FinancialReport): boolean {
        return super.validate(financialReport) &&
               this.validateFiscalYear(financialReport.fiscalYear) &&
               this.validateDepartment(financialReport.department);
    }

    validateSize(size: number): boolean {
        return size > 0 && size <= MAX_FINANCIAL_REPORT_SIZE;
    }

    validateExtension(extension: string): boolean {
        return FINANCIAL_REPORT_ALLOWED_EXTENSIONS.includes(extension);
    }

    validateFiscalYear(fiscalYear: string): boolean {
        return fiscalYear !== null && fiscalYear !== undefined && fiscalYear.trim() !== '';
    }

    validateDepartment(department: string): boolean {
        return department !== null && department !== undefined && department.trim() !== '';
    }
}

export { FinancialReportValidator };