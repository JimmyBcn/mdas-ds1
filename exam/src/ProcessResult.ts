export class ProcessResult {
    constructor(private success: boolean, private data: Record<string, any>, private messages: string[]) { }

    getReport(): string {
        return `Resultado: ${this.success}\n` +
            `Datos: ${JSON.stringify(this.data)}\n` +
            `Mensajes: ${this.messages.join(", ")}`;
    }
}