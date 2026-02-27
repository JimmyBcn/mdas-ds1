package fileProcessing.processStrategy;

import documents.Document;
import fileProcessing.Result;

public interface ProcessingStrategy {
    Result process(Document document);
}
