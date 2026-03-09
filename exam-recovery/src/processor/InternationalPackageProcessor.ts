import { ExpressPackage } from "../packages/ExpressPackage";
import { InternationalPackage } from "../packages/InternationalPackage";
import { ProcessResult } from "./ProcessResult";

export class InternationalPackageProcessor implements IPackageProcessor {
  process(pkg: InternationalPackage): ProcessResult {
    const messages: string[] = [];
    const extractedData: string[] = [];

    messages.push("Paquete internacional procesado exitosamente");
    extractedData.push("Paquete Internacional");
    extractedData.push(pkg.getTrackingCode());
    return new ProcessResult(true, extractedData, messages);
  }
}