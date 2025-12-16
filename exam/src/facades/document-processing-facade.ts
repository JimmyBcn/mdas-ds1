import { ProcessResult } from "/process-result";
import { GeneralDocument } from "/general-document";

// DOCUMENT TYPE
const TYPE_CONTRACT = "Contract";
const TYPE_REPORT = "FinancialReport";
const TYPE_PROPOSAL = "Proposal";

// EXTENSIONS
const EXTENSION_PDF = "pdf";
const EXTENSION_DOCX = "docx";
const EXTENSION_XLSX = "xlsx";
const EXTENSION_XLS = "xls";

// MAX MB SIZE
const MAX_SIZE_CONTRACT = 3;
const MAX_SIZE_REPORT = 4;
const MAX_SIZE_PROPOSAL = 5;

// METADATA KEYS
const META_AUTHOR = "author";
const META_VERSION = "version";
const META_FISCAL_YEAR = "fiscalYear";
const META_DEPARTMENT = "department";
const META_PROPOSAL_DATE = "proposalDate";
const META_CLIENT = "client";

export class DocumentProcessingFacade {

    private validate( document: GeneralDocument ): ProcessResult {

        const messages: string[] = [];
        const type = document.documentType;
        const metadata = document.metadata;

        // validation rules
        switch ( type ) {
            case TYPE_CONTRACT:
                if ( document.fileSize > MAX_SIZE_CONTRACT ) messages.push( `too big it ha sto be max ${MAX_SIZE_CONTRACT} MB.`);
                if ( document.fileExtension !== EXTENSION_PDF ) messages.push( `can only use this type of dodcument:.${ EXTENSION_PDF }.` );
                if ( !metadata[ META_AUTHOR ] || !metadata[ META_VERSION ] ) messages.push( `requiers:'${META_AUTHOR}' and '${ META_VERSION }'.` );
                break;
                
            case TYPE_REPORT:
                if ( document.fileSize > MAX_SIZE_REPORT ) messages.push( `too big it has to be max ${MAX_SIZE_REPORT} MB.` );
                if ( ![ EXTENSION_XLSX, EXTENSION_XLS ].includes( document.fileExtension ) ) messages.push( `can only use this type of document: .${ EXTENSION_XLSX } or .${ EXTENSION_XLS }.` );
                if ( !metadata[ META_FISCAL_YEAR ] || !metadata[ META_DEPARTMENT ] ) messages.push( `requiers'${ META_FISCAL_YEAR }' and '${ META_DEPARTMENT }'.` );
                break;
                
            case TYPE_PROPOSAL:
                if ( document.fileSize > MAX_SIZE_PROPOSAL ) messages.push( `too big it has to be max ${ MAX_SIZE_PROPOSAL } MB.` );
                if ( ![ EXTENSION_PDF, EXTENSION_DOCX ].includes( document.fileExtension ) ) messages.push(`can only use this type of document:.${ EXTENSION_PDF } or .${ EXTENSION_DOCX }.`);
                if ( !metadata[ META_PROPOSAL_DATE ] || !metadata[META_CLIENT ] ) messages.push( `requiers '${ META_PROPOSAL_DATE }' and '${ META_CLIENT }'.` );
                break;
                
            default:
                messages.push(` '${type}' unknowwn type of document...`);
        }

        if ( messages.length > 0 ) {
            return new ProcessResult( false, { documentType: type }, messages ); // failure
        }
        
        return new ProcessResult( true, { documentType: type }, [ "Validation successful!" ] ); ;
    }

    private process( document: GeneralDocument ): ProcessResult {

        const type = document.documentType;
        const extractedData: Record<string, any> = {};
        const messages: string[] = [];

        switch ( type ) {
            case TYPE_CONTRACT:
                extractedData[ META_AUTHOR ] = document.metadata[ META_AUTHOR ];
                extractedData[ META_VERSION ] = document.metadata[ META_VERSION ];
                messages.push( "contract data registrated successfully." );
                break;
            case TYPE_REPORT:
                extractedData[ META_FISCAL_YEAR ] = document.metadata[ META_FISCAL_YEAR ];
                extractedData[ META_DEPARTMENT ] = document.metadata[ META_DEPARTMENT ];
                messages.push(" finance report data registered successfully." );
                break;
            case TYPE_PROPOSAL:
                extractedData[ META_CLIENT ] = document.metadata[ META_CLIENT ];
                extractedData[ META_PROPOSAL_DATE ] = document.metadata[ META_PROPOSAL_DATE ];
                messages.push( "type proposal data registered successfully." );
                break;
        }

        return new ProcessResult( true, extractedData, messages );
    }
    
    public processDocument( fileName: string, documentType: string, metadata: Record<string, string> = {} ): ProcessResult {

        let fileSize = 3.2; // Dummy file size for this example
        let document: GeneralDocument;
        
        try {
            document = new GeneralDocument( fileName, fileSize, documentType, metadata );
        } catch ( data: any ) {
            return new ProcessResult( false, { documentType: documentType }, [ data.message ] );
        }
        
        const validationResult = this.validate( document );
        
        if ( !validationResult.isSuccess() ) {
            return validationResult;
        }
        
        return this.process( document );
    }
}

