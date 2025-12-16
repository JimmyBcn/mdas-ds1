class FinancialReportFactory{
        public createDocument(fileName: string, type: string, metadata: Record<string, string>){
            switch(type){
                case "FinancialReport":
                    const financialstrategy: IDocumentProcessor = new FinancialReportProcessor
                    return new FinancialReport(fileName, type, metadata, financialstrategy)
                case "Proposal":
                    let proposalstrategy: IDocumentProcessor = new ProposalProcessor
                    return new Proposal(fileName, type, metadata, proposalstrategy)
                case "Contract":
                    let contractstrategy: IDocumentProcessor = new ContractProcessor
                    return new Contract(fileName, type, metadata, contractstrategy)
                default:
                    let contract2strategy: IDocumentProcessor = new ContractProcessor
                    return new Contract(fileName, type, metadata, contract2strategy)
        }
    }
}