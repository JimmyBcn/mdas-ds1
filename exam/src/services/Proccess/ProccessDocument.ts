
import { IDocumentProcessor  } from "../../interfaces/IProcessor";
import { Documento } from "../../models/Document/Documento";
import { ProcessResult } from "../../models/ProcessResult";

export class ProcessDocument implements IDocumentProcessor  {
    process(data: Documento): ProcessResult {
        
    const messages: string[] = [];
    const extractedData: Record<string, any> = {};
    const extension = data.getExtensionFromFile();
    const size = data.getsize();
    const metadata = data.getMetadata();

    messages.push("Processing document...");
    extractedData["FileSize"] = size;
    messages.push(`File size: ${size} bytes`);
    extractedData["extension"] = extension;
    messages.push(`File extension: ${extension}`);
    extractedData["metadata"] = metadata;
    messages.push(`Metadata: ${JSON.stringify(metadata)}`);

    return new ProcessResult(true, extractedData, messages);
        
    }
}