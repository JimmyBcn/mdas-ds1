package fileProcessing.processStrategy;

import documents.Document;
import fileProcessing.Result;

public class SendStrategy implements ProcessingStrategy {
    @Override
    public Result process(Document document) {
        Result result = new Result(0, "");

        result.appendLineReport("Sending file to all admins...");
        result.appendLineReport("File processed successfully!");

        return result;
    }
}
