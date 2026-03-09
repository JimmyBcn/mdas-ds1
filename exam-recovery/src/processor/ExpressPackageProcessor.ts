import { ExpressPackage } from "../packages/ExpressPackage";
import { ProcessResult } from "./ProcessResult";

export class ExpressPackageProcessor implements IPackageProcessor {
  process(pkg: ExpressPackage): ProcessResult {
    const messages: string[] = [];
    const extractedData: string[] = [];

    messages.push("Paquete express procesado exitosamente");
    extractedData.push("Paquete Express");
    extractedData.push(pkg.getTrackingCode());
    return new ProcessResult(true, extractedData, messages);
  }
}