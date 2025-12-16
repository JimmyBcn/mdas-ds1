package processor.processingStrategies;

import document.Document;
import processor.ProcessingResult;
import processor.ProcessingStrategy;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class JsonProcessingStrategy implements ProcessingStrategy {
    @Override
    public ProcessingResult process(Document document) {
        List<String> messages = new ArrayList<>();
        Map<String, Object> extractedData = new HashMap<>();

        messages.add("Contract successfully processed.");
        extractedData.put("object", new HashMap<String, Object>() {
            {
                put("type", document.getType());
                put("filename", document.getFilename());
                put("extension", document.getExtension());
                put("size", document.getSize());
                put("metadata", document.getMetadata());
            }
        });

        return new ProcessingResult(true, messages, extractedData);
    }
}
