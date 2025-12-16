class ProcessResult{
    public validate: boolean
    public extractedData: Record<string, any>
    public messages: string[] = [];

    constructor(validate: boolean, extractedData: Record<string, any>, messages: string[]){
        this.validate = validate
        this.extractedData = extractedData
        this.messages = messages
    }

    public getResultString(): string {
        return `Validation result: ${this.validate}\nExtracted data: ${JSON.stringify(this.extractedData)}\nMessages: ${this.messages.join(', ')}`;
    }

}

interface IDocumentType{
    fileName: string
    documentType: string
    metadata: Record<string, string>

    getFileName(): string
    getFileSize(): number

    getStrategy(): IDocumentProcessor

}

class Contract implements IDocumentType{
    strategy: IDocumentProcessor
    fileName: string
    documentType: string
    metadata: Record<string, string>

    constructor(fileName: string, documentType: string, metadata: Record<string, string>, strategy: IDocumentProcessor){
        this.fileName = fileName
        this.documentType = documentType
        this.metadata = metadata 
        this.strategy = strategy
    }

    public getStrategy(): IDocumentProcessor{
        return this.strategy
    }

    public getFileSize(): number{
        return EXAMPLE_FILE_SIZE;
    }

    public getFileName(): string{
        return this.fileName
    }
}

class FinancialReport implements IDocumentType{
    strategy: IDocumentProcessor
    fileName: string
    documentType: string
    metadata: Record<string, string>

    constructor(fileName: string, documentType: string, metadata: Record<string, string>, strategy: IDocumentProcessor){
        this.fileName = fileName
        this.documentType = documentType
        this.metadata = metadata 
        this.strategy = strategy
    }

    public getFileSize(): number{
        return EXAMPLE_FILE_SIZE;
    }

    public getFileName(): string{
        return this.fileName
    }

    public getStrategy(): IDocumentProcessor{
        return this.strategy
    }
}

class Proposal implements IDocumentType{
    strategy: IDocumentProcessor
    fileName: string
    documentType: string
    metadata: Record<string, string>

    constructor(fileName: string, documentType: string, metadata: Record<string, string>, strategy: IDocumentProcessor){
        this.fileName = fileName
        this.documentType = documentType
        this.metadata = metadata 
        this.strategy = strategy
    }

    public getFileSize(): number{
        return EXAMPLE_FILE_SIZE;
    }

    public getFileName(): string{
        return this.fileName
    }

    public getStrategy(): IDocumentProcessor{
        return this.strategy
    }
}