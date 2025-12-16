function getDocumentExtension( filename: string ): string {

    const parts = filename.split( '.' );
    return parts.length > 1 ? parts.pop()!.toLowerCase() : '';
}

export abstract class GeneralDocument {

    public readonly fileExtension: string;

    constructor(
        public readonly filename: string,
        public readonly fileSize: number,
        public readonly documentType: string,
        public readonly metadata: Record<string, any> = {}
    ){
        if ( !filename || filename.trim() === '' )
        {
            throw new Error( 'Filename cannot be empty.');
        }

        this.fileExtension = getDocumentExtension( filename );
    } 
}