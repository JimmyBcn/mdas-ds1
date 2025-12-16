import { DocumentProcessingFacade } from "./facades/DocumentProcessingFacade";
import { ValidationException } from "./exceptions/ValidationException";

function main(): void {
  const facade = new DocumentProcessingFacade();

  try {
    const contractResult = facade.processDocument("contrato_servicios_2024.pdf", "Contract", {
      author: "Juan Pérez",
      version: "2.1.0",
    });
    console.log(contractResult.getReport());
  } catch (error) {
    console.log(handleError(error));
  }

  try {
    const invalidResult = facade.processDocument("documento_invalido.pdf", "Contract", {});
    console.log(invalidResult.getReport());
  } catch (error) {
    console.log(handleError(error));
  }
}

function handleError(error: unknown): string {
  if (error instanceof ValidationException) {
    let report = `❌ FALLO\n`;
    report += `\nMensajes:\n`;
    report += `  • ${error.message}\n`;
    error.getValidationMessages().forEach((msg) => (report += `  • ${msg}\n`));

    return report;
  }

  let report = `❌ ERROR\n`;
  report += `\nMensajes:\n`;
  report += `  • ${error}\n`;

  return report;
}

main();
