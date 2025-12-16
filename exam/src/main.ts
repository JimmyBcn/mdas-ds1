import { DocumentProcessingFacade } from "./facades/DocumentProcessingFacade";

function main(): void {
  const facade = new DocumentProcessingFacade();

  const contractResult = facade.processDocument("contrato_servicios_2024.pdf", "Contract", {
    author: "Juan Pérez",
    version: "2.1.0",
    size: "1000",
  });
  const financialReport = facade.processDocument("reporte_financiero_2024.xlsx", "FinancialReport", {
    fiscalYear: "2024",
    department: "Finanzas",
    size: "1000",
  });
  const proposal = facade.processDocument("propuesta_xxxxx_2024.docx", "Proposal", {
    proposalDate: "2024-01-01",
    client: "Cliente 2024",
    size: "1000",
  });
  console.log(contractResult.generateReport());

  const contractResult2 = facade.processDocument("contrato_servicios_2024.pdf", "Contract", {
    author: "Juan Pérez",
    version: "2.1.0",
  });
  const financialReport2 = facade.processDocument("reporte_financiero_2024.xlsx", "FinancialReport", {
    fiscalYear: "2024",
    department: "Finanzas",
    size: "5000000",
  });
  const proposal2 = facade.processDocument("propuesta_xxxxx_2024.png", "Proposal", {
    proposalDate: "2024-01-01",
    client: "Cliente 2024",
    size: "1000",
  });
}

main();
