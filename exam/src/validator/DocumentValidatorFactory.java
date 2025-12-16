package validator;

import enums.DocumentType;
import validator.documentValidators.*;

public class DocumentValidatorFactory {

    public static DocumentValidator getDocumentValidator(DocumentType type) {

        return switch (type) {
            case CONTRACT -> new ContractValidator();
            case FINANCIAL_REPORT -> new FinancialReportValidator();
            case PROPOSAL -> new ProposalValidator();
        };
    }
}
