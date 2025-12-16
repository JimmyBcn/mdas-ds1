package validator.documentValidators;

import document.Document;
import validator.DocumentValidator;

public class ContractValidator extends DocumentValidator {

    public ContractValidator() {
        super();
    }

    @Override
    protected boolean validateSize(Document document) {
        return document.getSize() <= 3;
    }

    @Override
    protected boolean validateExtension(Document document) {
        return isPdf(document);
    }

    private boolean isPdf(Document document) {
        return document.getExtension().equals("pdf");
    }

    @Override
    protected boolean validateMetadata(Document document) {
        if (!metadataContainsAuthor(document)) return false;
        if (!metadataContainsVersion(document)) return false;
        return true;
    }

    private boolean metadataContainsAuthor(Document document) {
        return document.getMetadata().containsKey("author");
    }

    private boolean metadataContainsVersion(Document document) {
        return document.getMetadata().containsKey("version");
    }
}
