export class ValidationRules {
    constructor(public maxBytes: number, public allowedExtensions: string[],
        public requiredMetadata: string[], public requireName: boolean) { }
}