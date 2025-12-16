import { DocumentProcessingFacade } from "./facades/DocumentProcessingFacade";
import { DocumentType } from "./models/DocumentType";

function main(): void {
  const facade = new DocumentProcessingFacade();

  // Contract Document
  const contractResult = facade.processDocument("services_contract_2024.pdf", DocumentType.Contract, {
    author: "Mr Bean",
    version: "1.1.1",
  }, 1024);

  console.log(contractResult.getReport());

  // Financial Report Document
  const financialReportResult = facade.processDocument("financial_report_marketing_2024.xlsx", DocumentType.FinancialReport, {
    fiscalYear: 2024,
    department: "marketing",
  }, 2048);

  console.log(financialReportResult.getReport());

  // Commercial Proposal Document
  const commercialProposalResult = facade.processDocument("comercial_proposal_la_salle.docx", DocumentType.CommercialProposal, {
    proposalDate: "2025-01-01",
    client: "La Salle S.A.",
  }, 512);

  console.log(commercialProposalResult.getReport());
}

main();
