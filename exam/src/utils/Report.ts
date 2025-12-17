import { IReport } from "../interfaces/IReport";
import { ProcessResult } from "../models/ProcessResult";


export class Report implements IReport {  
    generateReport(processResult: ProcessResult): void {
        const messages = processResult?.messages || [];
        console.log(messages);
    }
}