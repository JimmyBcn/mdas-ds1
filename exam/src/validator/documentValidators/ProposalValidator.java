package validator.documentValidators;

import document.Document;
import validator.DocumentValidator;

public class ProposalValidator extends DocumentValidator {

    public ProposalValidator() {
        super();
    }
    
    @Override
    protected boolean validateSize(Document document) {
        return document.getSize() <= 5;
    }

    @Override
    protected boolean validateExtension(Document document) {
        if (isDocx(document)) return true;
        if (isPdf(document)) return true;
        return false;
    }
    
    private boolean isDocx(Document document) {
        return document.getExtension().equals("docx");
    }
    
    private boolean isPdf(Document document) {
        return document.getExtension().equals("pdf");
    }

    @Override
    protected boolean validateMetadata(Document document) {
        if (!metadataContainsProposalDate(document)) return false;
        if (!metadataContainsClient(document)) return false;
        return true;
    }

    private boolean metadataContainsProposalDate(Document document) {
        return document.getMetadata().containsKey("proposalDate");
    }

    private boolean metadataContainsClient(Document document) {
        return document.getMetadata().containsKey("client");
    }
}
