package document;

import enums.DocumentType;

import java.util.Map;
import java.util.Scanner;

public class Document {

    private final DocumentType type;
    private final String filename;
    private final String extension;
    private final long size;
    private final DocumentMetadata metadata;

    public Document(DocumentType type, String filename, Map<String, String> metadata) {
        String[] parts = filename.split("\\.");

        this.type = type;
        this.extension = parts[parts.length - 1];
        this.filename = filename.substring(0, filename.length() - this.extension.length() - 1);
        this.metadata = new DocumentMetadata(metadata);

        // WARNING: Using Scanner for input in constructor is not a good practice for real applications.
        // This is just for demonstration purposes.
        System.out.println("Introduce document named " + filename + " size in bytes: ");
        this.size = new Scanner(System.in).nextLong();
    }

    public DocumentType getType() {
        return type;
    }

    public String getFilename() {
        return filename;
    }

    public String getExtension() {
        return extension;
    }

    public long getSize() {
        return size;
    }

    public DocumentMetadata getMetadata() {
        return metadata;
    }

    public String getMetadataAsString() {
        StringBuilder sb = new StringBuilder();
        for (Map.Entry<String, String> entry : metadata.getAllMetadata().entrySet()) {
            sb.append(entry.getKey()).append(": ").append(entry.getValue()).append("; ");
        }
        return sb.toString();
    }

    public boolean hasFilename() {
        return this.filename != null && !this.filename.isEmpty();
    }
}
