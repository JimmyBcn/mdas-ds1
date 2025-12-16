import { DocumentProcessingFacade } from "./facades/DocumentProcessingFacade";
import { DocumentType } from "./models/DocumentType";

describe("DocumentProcessingFacade", () => {
  let facade: DocumentProcessingFacade;

  beforeEach(() => {
    facade = new DocumentProcessingFacade();
  });

  describe("Contract processing", () => {
    it("should process a valid contract successfully", () => {
      const result = facade.processDocument("services_contract_2024.pdf", DocumentType.Contract, { 
        author: "Mr Bean", 
        version: "1.1.1" 
      }, 1024
      );

      expect(result.isSuccess()).toBe(true);
      expect(result.getExtractedData()).toEqual({
        documentType: "Legal Contract",
        fileName: "services_contract_2024.pdf",
        author: "Mr Bean",
        version: "1.1.1",
      });
    });

    it("should fail when contract has invalid extension", () => {
      const result = facade.processDocument("contract.docx", DocumentType.Contract, {
        author: "Author", 
        version: "1.0" 
      }, 1024
      );

      expect(result.isSuccess()).toBe(false);
      expect(result.getMessages()).toContain("Invalid extension. Allowed extensions: pdf");
    });
  });

  describe("FinancialReport processing", () => {
    it("should process a valid financial report successfully", () => {
      const result = facade.processDocument("financial_report_marketing_2024.xlsx", DocumentType.FinancialReport, { 
        fiscalYear: 2024, 
        department: "marketing" 
      }, 2048
      );

      expect(result.isSuccess()).toBe(true);
      expect(result.getExtractedData()).toEqual({
        documentType: "Financial Report",
        fileName: "financial_report_marketing_2024.xlsx",
        fiscalYear: 2024,
        department: "marketing",
      });
    });

    it("should fail when financial report has invalid extension", () => {
      const result = facade.processDocument("report.pdf", DocumentType.FinancialReport, {
        fiscalYear: 2024, 
        department: "Finance" 
      }, 1024
      );

      expect(result.isSuccess()).toBe(false);
      expect(result.getMessages()).toContain("Invalid extension. Allowed extensions: xlsx, xls");
    });
  });

  describe("CommercialProposal processing", () => {
    it("should process a valid commercial proposal successfully", () => {
      const result = facade.processDocument("comercial_proposal_la_salle.docx", DocumentType.CommercialProposal, { 
        proposalDate: "2025-01-01", 
        client: "La Salle S.A." 
        }, 512
      );

      expect(result.isSuccess()).toBe(true);
      expect(result.getExtractedData()).toEqual({
        documentType: "Commercial Proposal",
        fileName: "comercial_proposal_la_salle.docx",
        proposalDate: "2025-01-01",
        client: "La Salle S.A.",
      });
    });

    it("should fail when commercial proposal has invalid extension", () => {
      const result = facade.processDocument("proposal.xlsx", DocumentType.CommercialProposal, {
        proposalDate: "2024-01-01", 
        client: "Client" 
        }, 1024
      );

      expect(result.isSuccess()).toBe(false);
      expect(result.getMessages()).toContain("Invalid extension. Allowed extensions: pdf, docx");
    });
  });

  describe("Validation errors", () => {
    it("should fail when file size exceeds limit", () => {
      const result = facade.processDocument("big_contract.pdf", DocumentType.Contract, {
        author: "Author", 
        version: "1.0" 
      }, 4 * 1024 * 1024 // 4MB exceeds 3MB limit
      );

      expect(result.isSuccess()).toBe(false);
      expect(result.getMessages()).toContain("File exceeds the maximum allowed size of 3 MB");
    });

    it("should fail when required metadata is missing", () => {
      const result = facade.processDocument("contract.pdf", DocumentType.Contract, {
        author: "", 
        version: "" 
      }, 1024
      );

      expect(result.isSuccess()).toBe(false);
      expect(result.getMessages()).toContain("Author is required for legal contracts");
      expect(result.getMessages()).toContain("Version is required for legal contracts");
    });
  });
});
