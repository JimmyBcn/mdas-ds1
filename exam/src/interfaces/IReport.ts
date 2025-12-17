import { ProcessResult } from "../models/ProcessResult";

export interface IReport {  
    generateReport( processResult: ProcessResult): void;
}