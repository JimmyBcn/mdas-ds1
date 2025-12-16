import { DocumentProcessingFacade } from "./facades/DocumentProcessingFacade";

function main(): void {
  const facade = new DocumentProcessingFacade();

  const contractResult = facade.processDocument("contrato_servicios_2024.pdf", "Contract", {
    author: "Juan Pérez",
    version: "2.1.0",
  });
  console.log(contractResult);
}

main();
