
export class FileValidatorFactory {
    private static readonly FILE_TYPE_LEGAL_CONTRACT = 'LEGAL_CONTRACT';
    private static readonly FILE_TYPE_FINANCIAL_REPORT = 'FINANCIAL_REPORT';
    private static readonly FILE_TYPE_COMERCIAL_PROPOSAL = 'COMERCIAL_PROPOSAL';

    static createFileValidator(fileType: string): IFileValidator {
        switch (fileType) {
            case this.FILE_TYPE_LEGAL_CONTRACT:
                return new LegalContractFileValidator();

            case this.FILE_TYPE_FINANCIAL_REPORT:
                return new FinancialReportFileValidator();

            case this.FILE_TYPE_COMERCIAL_PROPOSAL:
                return new CommercialProposalFileValidator();

            default:
                throw new Error('Invalid file type');
        }
    }
}
