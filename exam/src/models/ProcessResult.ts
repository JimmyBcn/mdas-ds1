export class ProcessResult {
  constructor(
    public success: boolean,
    public data: Record<string, any>,
    public messages: string[]
  ) {}
}

