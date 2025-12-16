package processor;

import enums.DocumentType;
import processor.processingStrategies.*;

public class ProcessingStrategyFactory {

    // WARNING: Strategies have been associated arbitrarily for demonstration purposes.
    // In a real application, the association should be based on actual requirements.
    public static ProcessingStrategy getStrategy(DocumentType type) {

        return switch (type) {
            case CONTRACT -> new PropertiesProcessingStrategy();
            case FINANCIAL_REPORT -> new MetadataProcessingStrategy();
            case PROPOSAL -> new JsonProcessingStrategy();
        };
    }
}
