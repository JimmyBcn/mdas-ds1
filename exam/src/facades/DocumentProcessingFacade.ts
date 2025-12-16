
export class DocumentProcessingFacade {

  processDocument(fileName: string, documentType: string, metadata: Record<string, string>) {
    
    // 1. Crear documento
    const document = new FinancialReportFactory().createDocument(fileName, documentType, metadata) 
    const processorEngine = new ProcessorEngine(document.strategy)

    // 2./3. Validar documento & Processar
    const processResult = processorEngine.process(document)

    // 4. Retornar resultado del procesamiento\
    console.log(`${processResult.getResultString}`)
  }
}