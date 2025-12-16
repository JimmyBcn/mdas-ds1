import { Document } from './document';

const FINANCIAL_REPORT_ALLOWED_EXTENSIONS = ['xlsx', 'xls'];
const MAX_FINANCIAL_REPORT_SIZE = 4 * 1024 * 1024; // 4 MB

class FinancialReport extends Document {
    fiscalYear: string;
    department: string;

    constructor(name: string, size: number, extension: string, fiscalYear: string, department: string) {
        super(name, extension, size);
        this.fiscalYear = fiscalYear;
        this.department = department;
    }
}

export { FinancialReport, FINANCIAL_REPORT_ALLOWED_EXTENSIONS, MAX_FINANCIAL_REPORT_SIZE };