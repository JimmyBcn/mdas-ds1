import { IFileProcessor } from "../interfaces/IFileProcessor";

export class FileProcessor implements IFileProcessor {
    processFile(file: File): boolean {
        return true;
    }
}