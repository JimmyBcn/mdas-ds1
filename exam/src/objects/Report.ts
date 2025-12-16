import { Document } from "./Document";

export class Report extends Document {
    private fiscalYear: number = 0;
    private department: string = "";

    constructor (filename: string, metadata: Record <string, string>) {
        super(filename, metadata);
        this.fiscalYear = Number.parseInt(metadata["fiscalYear"]);
        this.department = metadata["department"];
    }

    public getMetadata(): Record<string, string> {
        let metadata: Record<string,string> = {};

        metadata["fiscalYear"] = this.fiscalYear.toString();
        metadata["department"] = this.department;
        return metadata;
    }

    public getFiscalYear(): number {
        return this.fiscalYear;
    }

    public getDepartment(): string {
        return this.department;
    }

    public setFiscalYear(fiscalYear: number): void {
        this.fiscalYear = fiscalYear;
    }

    public setDepartment(department: string): void {
        this.department = department;
    }
}