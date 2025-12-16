import { IFileProcessor } from "../../interfaces/IFileProcessor";
import { FileProcessorFactory } from "./FileProcessorFactory";
import { ProcessedResult } from "../../models/ProcessedResult";
import { GenericFile } from "../../models/FileTypes/GenericFile";

export class FileProcessor implements IFileProcessor {

    processFile(file: GenericFile): ProcessedResult {
        const processor = FileProcessorFactory.createFileProcessor(file.getDocumentType());
        return processor.processFile(file);
    }
}