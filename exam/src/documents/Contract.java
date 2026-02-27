package documents;

import java.util.HashMap;

public class Contract extends Document {

    public Contract(String filename, HashMap<String, String> metadata) {
        super(filename, metadata);
    }

    @Override
    public boolean acceptedSize() {
        return Float.parseFloat(this.metadata.get("size")) < 3.00;
    }

    @Override
    public boolean acceptedExtensions() {
        return this.filename.toLowerCase().endsWith(".pdf");
    }

    @Override
    public boolean hasRequiredMetadata() {
        return this.metadata.containsKey("author") && this.metadata.containsKey("version");
    }

    @Override
    public boolean isValid() {
        return super.isValid() && acceptedSize() && acceptedExtensions() && hasRequiredMetadata();
    }
}
