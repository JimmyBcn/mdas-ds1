package processor;

import document.Document;

public interface ProcessingStrategy {
    ProcessingResult process(Document document);
}
