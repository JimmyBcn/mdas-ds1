package validator.documentValidators;

import document.Document;
import validator.DocumentValidator;

public class FinancialReportValidator extends DocumentValidator {

    public FinancialReportValidator() {
        super();
    }

    @Override
    protected boolean validateSize(Document document) {
        return document.getSize() <= 4;
    }

    @Override
    protected boolean validateExtension(Document document) {
        if (isXlsx(document)) return true;
        if (isXls(document)) return true;
        return false;
    }

    private boolean isXlsx(Document document) {
        return document.getExtension().equals("xlsx");
    }

    private boolean isXls(Document document) {
        return document.getExtension().equals("xls");
    }

    @Override
    protected boolean validateMetadata(Document document) {
        if (!metadataContainsFiscalYear(document)) return false;
        if (!metadataContainsDepartment(document)) return false;
        return true;
    }

    private boolean metadataContainsFiscalYear(Document document) {
        return document.getMetadata().containsKey("fiscalYear");
    }

    private boolean metadataContainsDepartment(Document document) {
        return document.getMetadata().containsKey("department");
    }
}
