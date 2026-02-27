package fileProcessing;

import documents.*;
import fileProcessing.exceptions.InvalidDocumentException;
import fileProcessing.processStrategy.ProcessorFactory;

import java.util.HashMap;

public class DocumentProcessorManager implements DocumentProcessorFacade {

    //Funciones cortas, autoexplicativas, modulables...
    private DocumentProcessor createProcessor(DOC_TYPE type) {
        return ProcessorFactory.create(type);
    }

    private Document createDocument(String filename, DOC_TYPE type, HashMap<String, String> metadata) {
        return DocumentFactory.create(type, filename, metadata);
    }

    //Funcion un poco "chorra" que simula si validar un documento pudiese retornar una excepción!
    private void validateDocument(Document doc) throws InvalidDocumentException {
        if (!doc.isValid()) {
            throw new InvalidDocumentException("Document is not valid");
        }
    }

    @Override
    public Result processDocument(String filename, DOC_TYPE type, HashMap<String, String> metadata) {

        //1. Crear documento
        //Mantenemos las funciones al mismo nivel de abstracción!!!
        Document doc = createDocument(filename, type, metadata);

        //2. Validar documento
        //OJO! No se ha usado un "validador de documentos" ya que eso romperia con el principio de tell don't ask.
        //El documento ya sabe si es valido o no! Minimizamos dependencias entre objetos.
        try {
            validateDocument(doc);
        } catch (InvalidDocumentException e) {
            return new Result(1, e.getMessage());
        }

        //3. Procesar documento y retornar
        //Aquí si hay un procesador ya que el documento no puede procesarse solo
        //Necesitara de más lógica y ya tiene sentido crear una clase con esa responsabilidad!
        DocumentProcessor processor = createProcessor(type);

        return processor.process(doc);
    }
}
