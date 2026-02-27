package fileProcessing.processStrategy;

import documents.Document;
import fileProcessing.Result;

public class ExtractStrategy implements ProcessingStrategy {
    @Override
    public Result process(Document document) {
        Result result = new Result(0, "");

        result.appendLineReport("Extracting information...");
        result.appendLineReport("File processed successfully!");

        return result;
    }
}
