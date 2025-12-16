import { Document } from './document';

const FINANCIAL_REPORT_EXTENSIONS = ['xlsx', 'xls'];

class FinancialReport extends Document {
    fiscalYear: number;
    department: string;
    constructor(name: string, size: number, extension: string, fiscalYear: number, department: string) {
        super(name, extension, size);
        this.fiscalYear = fiscalYear;
        this.department = department;
    }
}

export { FinancialReport, FINANCIAL_REPORT_EXTENSIONS };