package documents;

import java.util.HashMap;

public class Report extends Document {

    public Report(String filename, HashMap<String, String> metadata) {
        super(filename, metadata);
    }

    @Override
    public boolean acceptedSize() {
        return Float.parseFloat(this.metadata.get("size")) < 4.00;
    }

    @Override
    public boolean acceptedExtensions() {
        return this.filename.toLowerCase().endsWith(".xlsx") ||  this.filename.toLowerCase().endsWith(".xls");
    }

    @Override
    public boolean hasRequiredMetadata() {
        return this.metadata.containsKey("fiscalYear") && this.metadata.containsKey("department");
    }

    @Override
    public boolean isValid() {
        return super.isValid() && acceptedSize() && acceptedExtensions() && hasRequiredMetadata();
    }
}
