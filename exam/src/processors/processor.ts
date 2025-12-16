interface IDocumentProcessor{
    process(document: IDocumentType): ProcessResult
}

class ContractProcessor implements IDocumentProcessor{
    private itemName = "Contract"

    process(document: Contract): ProcessResult {
        const messages: string[] = [];
        const extractedData: Record<string, any> = {};
        console.log(`${this.itemName}`)
        if(document.fileName.includes(".pdf")){
            if(document.getFileSize() < 5){
                // No recuerdo como era de buscar informacion en un Record
                if(document.metadata){
                    return new ProcessResult(true, extractedData, messages)
                }
            }
        }
        return new ProcessResult(false, {}, []);
    }
}

class FinancialReportProcessor implements IDocumentProcessor{
    private itemName = "Financial Report"
    process(document: FinancialReport): ProcessResult {
        const messages: string[] = [];
        const extractedData: Record<string, any> = {};
        console.log(`${this.itemName}`)
        if(document.fileName.includes(".xls") || document.fileName.includes(".xlsx")){
            if(document.getFileSize() < 5){
                // No recuerdo como era de buscar informacion en un Record
                if(document.metadata){
                    return new ProcessResult(true, extractedData, messages)
                }
            }
        }
        return new ProcessResult(false, {}, []);
    }
}

class ProposalProcessor implements IDocumentProcessor{
    private itemName = "Proposal"
    process(document: Proposal): ProcessResult {
        const messages: string[] = [];
        const extractedData: Record<string, any> = {};
        console.log(`${this.itemName}`)
        if(document.fileName.includes(".pdf") || document.fileName.includes(".docx")){
            if(document.getFileSize() < 5){
                // No recuerdo como era de buscar informacion en un Record
                if(document.metadata){
                    return new ProcessResult(true, extractedData, messages)
                }
            }
        }
        return new ProcessResult(false, {}, []);
    }
}


class ProcessorEngine{
    private strategy: IDocumentProcessor

    constructor(strategy: IDocumentProcessor){
        this.strategy = strategy
    }

    public process(document: IDocumentType): ProcessResult{
        return this.strategy.process(document)
    }
}