class ProcessResult  {
    success: boolean;
    message: string;

    constructor(success: boolean, message: string) {
        this.success = success;
        this.message = message;
    }
    
    // @TODO: Improve report information 
    getReport(): string {
        return this.success ? `Success: ${this.message}` : `Failure: ${this.message}`;
    }
}

export { ProcessResult };