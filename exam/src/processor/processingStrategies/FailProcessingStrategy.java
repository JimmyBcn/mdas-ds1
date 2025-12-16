package processor.processingStrategies;

import document.Document;
import processor.ProcessingResult;
import processor.ProcessingStrategy;

import java.util.List;

// WARNING: This class is intentionally left blank to demonstrate a failing processing strategy.
// This strategy should not be used in production as it does not provide any processing functionality.
public class FailProcessingStrategy implements ProcessingStrategy {

    @Override
    public ProcessingResult process(Document document) {
        return new ProcessingResult(
                false,
                List.of("Processing failed: No processing strategy implemented."),
                null
        );
    }
}
