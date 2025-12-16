import { DocumentProcessingFacade } from "./facades/DocumentProcessingFacade";
import { DocumentType } from "./models/enum/DocumentType";

function main(): void {
  const facade = new DocumentProcessingFacade();

  const contractResult = facade.processDocument("contrato_servicios_2024.pdf", DocumentType.CONTRACT, 3, {
    author: "Juan Pérez",
    version: "2.1.0",
  });
  console.log(contractResult);
}

main();
