package fileProcessing.processStrategy;

import documents.DOC_TYPE;
import fileProcessing.DocumentProcessor;

public class ProcessorFactory {
    public static DocumentProcessor create(DOC_TYPE type) {
        DocumentProcessor processor = new DocumentProcessor();
        //Extensible con la estrategia que haga falta
        switch (type) {
            case DOC_TYPE.Contract -> processor.setStrategy(new SaveStrategy());
            case DOC_TYPE.Report -> processor.setStrategy(new SendStrategy());
            case DOC_TYPE.Proposals -> processor.setStrategy(new ExtractStrategy());
        }
        return processor;
    }
}
