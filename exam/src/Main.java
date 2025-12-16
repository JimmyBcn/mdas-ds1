import enums.DocumentType;
import facades.DocumentProcessingFacade;
import processor.ProcessingResult;

import java.util.Map;

public class Main {
    public static void main(String[] args) {
        DocumentProcessingFacade facade = new DocumentProcessingFacade();

        ProcessingResult result = facade.processDocument(
                "contrato_servicios_2024.pdf",
                DocumentType.CONTRACT, Map.of(
                        "author", "Juan Perez",
                        "version", "2.1.0"
                )
        );

        System.out.println(result.getReport());
    }
}