import { Documento } from "../models/Document/Documento";
import { FileType } from "../models/Document/FileType";
import { ProcessResult } from "../models/ProcessResult";
import { ProcessDocument } from "../services/Proccess/ProccessDocument";
import { Validation } from "../services/Validation/Validation";
import { Report } from "../utils/Report";

export class DocumentProcessingFacade {

  private validationService = new Validation();
  private processorService = new ProcessDocument();
  private report = new Report();
  private result: ProcessResult = new ProcessResult( true,
  { message: "OK" },
  ["Proceso completado"]
  );


  processDocument(fileName: string, documentType: FileType, metadata?: Record<string, any>) {
    // 1. Crear documento
    // 2. Validar documento
    // 3. Procesar documento
    // 4. Retornar resultado del procesamiento

    var documento = new Documento(fileName, documentType , metadata || {}); 
    this.result = this.processorService.process(documento);
    const isValid = this.validationService.validateDocument(documentType, documento);
    if (!isValid) {
      this.result.messages.push("Documento inválido...");
    }
    return this.result;
  }

  getReport() {
     this.report.generateReport(this.result);
    return "Reporte de procesamiento de documento";
  }
}
