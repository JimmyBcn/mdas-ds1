export class ProcessResult {
    constructor(
        public readonly success: boolean,
        public readonly extractedData: Record<string, any>,
        public readonly messages: string[]
    ) { }
}