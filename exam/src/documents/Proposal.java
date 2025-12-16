package documents;

import java.util.HashMap;

public class Proposal extends Document {

    public Proposal(String filename, HashMap<String, String> metadata) {
        super(filename, metadata);
    }

    @Override
    public boolean acceptedSize() {
        return Float.parseFloat(this.metadata.get("size")) < 5.00;
    }

    @Override
    public boolean acceptedExtensions() {
        return this.filename.toLowerCase().endsWith(".pdf") ||  this.filename.toLowerCase().endsWith(".docx");
    }

    @Override
    public boolean hasRequiredMetadata() {
        return this.metadata.containsKey("proposalDate") && this.metadata.containsKey("client");
    }

    @Override
    public boolean isValid() {
        return super.isValid() && acceptedSize() && acceptedExtensions() && hasRequiredMetadata();
    }
}
