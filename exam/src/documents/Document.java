package documents;

import java.util.HashMap;

public abstract class Document {
    //Protected! Fuera de la clase no se necesitan. En caso contrario hacer un getter y ya :)
    protected String filename;
    protected HashMap<String, String> metadata;

    public Document(String filename, HashMap<String, String> metadata) {
        this.filename = filename;
        this.metadata = metadata;
    }

    public abstract boolean acceptedSize();
    public abstract boolean acceptedExtensions();
    public abstract boolean hasRequiredMetadata();

    private boolean fileNotEmpty() {
        if (this.metadata.containsKey("size")) {
            return true;
        }
        return false;
    }

    public boolean isValid() {
        return !filename.isEmpty() && this.fileNotEmpty();
    }
}
