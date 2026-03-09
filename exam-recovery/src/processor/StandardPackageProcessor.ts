import { StandardPackage } from "../packages/StandardPackage";
import { ProcessResult } from "./ProcessResult";

export class StandardPackageProcessor implements IPackageProcessor {
  process(pkg: StandardPackage): ProcessResult {
    console.log(`Iniciando procesamiento de paquete estándar: ${pkg.ref}`);
    const messages: string[] = [];
    const extractedData: string[] = [];

    messages.push("Paquete estándar procesado exitosamente");
    extractedData.push("Paquete Estándar");
    extractedData.push(pkg.getTrackingCode());
    console.log(`Procesando paquete estándar: ${pkg.ref}`);

    return new ProcessResult(true, extractedData, messages);
  }
}