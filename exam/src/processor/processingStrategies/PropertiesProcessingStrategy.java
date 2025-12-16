package processor.processingStrategies;

import document.Document;
import processor.ProcessingResult;
import processor.ProcessingStrategy;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class PropertiesProcessingStrategy implements ProcessingStrategy {
    @Override
    public ProcessingResult process(Document document) {
        List<String> messages = new ArrayList<>();
        Map<String, Object> extractedData = new HashMap<>();

        messages.add("Contract successfully processed.");
        extractedData.put("documentType", document.getType());
        extractedData.put("fileName", document.getFilename());
        extractedData.put("extension", document.getExtension());
        extractedData.put("fileSize", document.getSize());

        return new ProcessingResult(true, messages, extractedData);
    }
}
