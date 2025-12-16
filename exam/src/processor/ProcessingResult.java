package processor;

import java.util.List;
import java.util.Map;

public class ProcessingResult {

    private final boolean success;
    private final List<String> messages;
    private final Map<String, Object> extractedData;

    public ProcessingResult(boolean success, List<String> messages, Map<String, Object> extractedData) {
        this.success = success;
        this.messages = messages;
        this.extractedData = extractedData;
    }

    public boolean hasSucceeded() {
        return success;
    }

    public List<String> getMessages() {
        return messages;
    }

    public Map<String, Object> getExtractedData() {
        return extractedData;
    }

    public String getReport() {
        StringBuilder report = new StringBuilder();

        report.append("Processing ").append(success ? "succeeded" : "failed").append(".\n");

        report.append("Messages:\n");
        for (String message : messages) {
            report.append("- ").append(message).append("\n");
        }

        if (success) {
            report.append("Extracted Data:\n");
            for (Map.Entry<String, Object> entry : extractedData.entrySet()) {
                report.append(entry.getKey()).append(": ").append(entry.getValue()).append("\n");
            }
        }

        return report.toString();
    }
}
