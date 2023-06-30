interface Main {
    number: string;
    title: {
        english: string;
        french: string;
    }
    status: string;
}

interface BibliographicInfo {
    internationalPatentClassification: string;
    inventors: string[];
    owners: string[];
    applicants: string[];
    agent: string;
    associateAgent: string | null;
    issuedDate: Date;
    pctFilingDate: Date;
    openToPublicInspectionDate: Date;
    examinationRequestedDate: Date;
    availabilityOfLicense: string;
    languageOfFiling: string;
    pctFilingNumber: string;
    internationalPublicationNumber: string;
    nationalEntryDate: Date;
    patentCooperationTreaty: boolean;
}

interface Abstracts {
    english: string;
    french: string;
}

interface AdministrativeStatus {
    forecastedIssueDate?: Date;
    pctFilingDate?: Date;
    pctPublicationDate?: Date;
    nationalEntryDate?: Date;
    examinationRequestedDate?: Date;
    issuedDate?: Date;
    deemedExpiredDate?: Date;
}
interface OwnersOnRecord {
    currentOwners: string[];
    pastOwners: string[];
}

export interface Patent {
    main: Main;
    abstracts?: Abstracts;
    bibliographic?: BibliographicInfo;
    claims?: string[];
    description?: string;
    administrativeStatus?: AdministrativeStatus;
    owners?: OwnersOnRecord;
    documents?: {
        representativeDrawing?: string,
        coverPage?: string,
        claims?: string,
        drawings?: string
    }
}