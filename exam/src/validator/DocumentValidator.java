package validator;

import document.Document;

import java.util.ArrayList;
import java.util.List;

public abstract class DocumentValidator {

    public DocumentValidator() {
    }

    public ValidationResult validate(Document document) {
        boolean valid = true;
        List<String> errors = new ArrayList<>();

        if (!validateBasicRequirements(document)) {
            valid = false;
            errors.add("Basic requirement not met: missing filename");
        }
        if (!validateSpecificRequirements(document, errors)) {
            valid = false;
        }

        return new ValidationResult(valid, errors);
    }

    private boolean validateBasicRequirements(Document document) {
        return document.hasFilename();
    }

    private boolean validateSpecificRequirements(Document document, List<String> errors) {
        if (!validateSize(document)) {
            errors.add("Specific requirement not met: invalid size");
            return false;
        }
        if (!validateExtension(document)) {
            errors.add("Specific requirement not met: invalid extension");
            return false;
        }
        if (!validateMetadata(document)) {
            errors.add("Specific requirement not met: invalid metadata");
            return false;
        }
        return true;
    }

    protected abstract boolean validateSize(Document document);

    protected abstract boolean validateExtension(Document document);

    protected abstract boolean validateMetadata(Document document);
}
