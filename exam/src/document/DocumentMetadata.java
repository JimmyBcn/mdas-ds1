package document;

import java.util.Map;
import java.util.Set;

public class DocumentMetadata {
    private final Map<String, String> metadata;

    public DocumentMetadata(Map<String, String> metadata) {
        this.metadata = metadata;
    }

    public boolean containsKey(String key) {
        return this.metadata.containsKey(key);
    }

    public String getValue(String key) {
        return this.metadata.get(key);
    }

    public void setValue(String key, String value) {
        this.metadata.put(key, value);
    }

    public Map<String, String> getAllMetadata() {
        return this.metadata;
    }
}
