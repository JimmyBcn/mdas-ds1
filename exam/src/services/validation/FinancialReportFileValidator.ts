import { BaseFileValidator } from "./BaseValidator";
import { ValidationRules } from "./ValidationRules";

export class FinancialReportFileValidator extends BaseFileValidator {
    private readonly MAX_FILE_SIZE = 5 * 1024 * 1024;
    private readonly ALLOWED_FILE_EXTENSIONS = ['pdf', 'docx'];
    private readonly REQUIRED_METADATA = ['proposalDate', 'client'];

    constructor() {
        super();
        const validationRules = new ValidationRules(this.MAX_FILE_SIZE, this.ALLOWED_FILE_EXTENSIONS, this.REQUIRED_METADATA, true);
        this.setValidationRules(validationRules);
    }
}