export class ProcessResult {
    sucess: boolean;
    extractedData: string[];
    messages: string[];

    constructor(sucess: boolean, extractedData: string[], messages: string[]) {
        console.log("Creando resultado de procesamiento...");
        this.sucess = sucess;
        this.extractedData = extractedData;
        this.messages = messages;
    }

    getReport(): string {
        return `Reporte de Procesamiento:\nÉxito: ${this.sucess}\nDatos Extraídos: ${JSON.stringify(this.extractedData)}\nMensajes: ${this.messages.join(", ")}`;
    }
}