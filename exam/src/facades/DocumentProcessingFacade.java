package facades;

import document.Document;
import enums.DocumentType;
import processor.ProcessingResult;
import processor.ProcessingStrategy;
import processor.ProcessingStrategyFactory;
import validator.DocumentValidator;
import validator.DocumentValidatorFactory;
import validator.ValidationResult;

import java.util.Map;

public class DocumentProcessingFacade {

    public ProcessingResult processDocument(String filename, DocumentType type, Map<String, String> metadata) {
        // 1. Create document
        Document document = new Document(type, filename, metadata);

        // 2. Validate document
        DocumentValidator validator = DocumentValidatorFactory.getDocumentValidator(type);
        ValidationResult validation = validator.validate(document);

        if (!validation.isValid()) {
            return new ProcessingResult(false, validation.getErrors(), null);
        }

        // 3. Process document
        ProcessingStrategy strategy = ProcessingStrategyFactory.getStrategy(type);
        ProcessingResult result = strategy.process(document);

        if (!result.hasSucceeded()) {
            return new ProcessingResult(false, result.getMessages(), null);
        }

        return result;
    }
}
