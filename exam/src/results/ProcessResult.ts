  // ProcessResult represents the output of processing a document
export class ProcessResult {
  private success: boolean;
  private extractedData: Record<string, any>;
  private messages: string[];

  constructor(success: boolean, extractedData: Record<string, any>, messages: string[]) {
    this.success = success;
    this.extractedData = extractedData;
    this.messages = messages;
  }

  public isSuccess(): boolean {
    return this.success;
  }

  public getExtractedData(): Record<string, any> {
    return this.extractedData;
  }

  public getMessages(): string[] {
    return this.messages;
  }

  // getReport generates a formatted report of the processing result
  public getReport(): string {
    const lines: string[] = [];

    lines.push("=== Document Processing Report ===");
    lines.push(`Status: ${this.success ? "SUCCESS" : "FAILED"}`);
    lines.push("");

    if (Object.keys(this.extractedData).length > 0) {
      lines.push("Extracted Data:");
      for (const [key, value] of Object.entries(this.extractedData)) {
        lines.push(`  - ${key}: ${value}`);
      }
      lines.push("");
    }

    if (this.messages.length > 0) {
      lines.push("Messages:");
      for (const message of this.messages) {
        lines.push(`  - ${message}`);
      }
    }

    return lines.join("\n");
  }
}
