package fileProcessing;

import documents.Document;
import fileProcessing.processStrategy.ProcessingStrategy;

public class DocumentProcessor {
    private ProcessingStrategy strategy;

    public DocumentProcessor() {}

    public void setStrategy(ProcessingStrategy strategy) {
        this.strategy = strategy;
    }

    public Result process(Document document) {
        return this.strategy.process(document);
    }
}
