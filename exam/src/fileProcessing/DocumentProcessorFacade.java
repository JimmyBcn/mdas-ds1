package fileProcessing;

import documents.DOC_TYPE;

import java.util.HashMap;

public interface DocumentProcessorFacade {
    Result processDocument(String filename, DOC_TYPE type, HashMap<String, String> metadata);
}
