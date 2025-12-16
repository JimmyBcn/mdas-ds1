package fileProcessing;

import documents.*;

import java.util.HashMap;

public class DocumentFactory {
    public static Document create(DOC_TYPE type, String filename, HashMap<String, String> metadata) {
        switch (type) {
            case DOC_TYPE.Contract -> {
                return new Contract(filename, metadata);
            }
            case DOC_TYPE.Report ->  {
                return new Report(filename, metadata);
            }
            // Pondria otro case del switch, pero así me ahorro la excepción innecesaria!
            default -> {
                return new Proposal(filename, metadata);
            }
        }
    }
}
