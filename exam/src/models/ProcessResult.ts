export class ProcessResult {
  constructor(private readonly success: boolean, private readonly extractedData: Record<string, any>, private readonly messages: string[]) {}

  isSuccess(): boolean {
    return this.success;
  }

  getExtractedData(): Record<string, any> {
    return { ...this.extractedData };
  }

  getMessages(): string[] {
    return [...this.messages];
  }

  getReport(): string {
    const status = this.success ? "✅ ÉXITO" : "❌ FALLO";
    let report = `\n${"=".repeat(60)}\n`;
    report += `${status}\n`;
    report += `${"=".repeat(60)}\n`;

    if (this.messages.length > 0) {
      report += "\nMensajes:\n";
      this.messages.forEach((msg) => (report += `  • ${msg}\n`));
    }

    if (Object.keys(this.extractedData).length > 0) {
      report += "\nDatos extraídos:\n";
      Object.entries(this.extractedData).forEach(([key, value]) => {
        report += `  • ${key}: ${value}\n`;
      });
    }

    report += `${"=".repeat(60)}\n`;
    return report;
  }
}
