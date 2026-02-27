import documents.DOC_TYPE;
import fileProcessing.DocumentProcessorManager;
import fileProcessing.Result;

void main() {
    DocumentProcessorManager docManager = new DocumentProcessorManager();

    Result processResult = docManager.processDocument(
            "contrato_servicios_2024.pdf",
            DOC_TYPE.Contract,
            new HashMap<>() {{
                put("author", "Juan Pérez");
                put("version", "2.1.0");
                put("size", "2.67");
            }}
    );

    if (processResult.didItPass()) {
        System.out.println("Processing of file passed without any errors!");
    } else {
        System.out.println("Processing of file failed with " + processResult.getErrorNumber() + " errors!");
    }
    System.out.println("Showing report:\n" + processResult.getReport() + "\n-----------------------------------------\n");
}
