import { BaseFileValidator } from "./BaseValidator";
import { ValidationRules } from "./ValidationRules";

export class LegalContractFileValidator extends BaseFileValidator {
    private readonly MAX_FILE_SIZE = 3 * 1024 * 1024;
    private readonly ALLOWED_FILE_EXTENSIONS = ['pdf'];
    private readonly REQUIRED_METADATA = ['author', 'version'];

    constructor() {
        super();
        const validationRules = new ValidationRules(this.MAX_FILE_SIZE, this.ALLOWED_FILE_EXTENSIONS, this.REQUIRED_METADATA, true);
        this.setValidationRules(validationRules);
    }
}