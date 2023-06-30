import { Patent } from "./patentInterface";

const patent: Patent = {
    main: {
        number: "CA 2613497",
        title: {
            english: "EFFICIENT PRODUCTION OF HYDROGEN",
            french: "PRODUCTION EFFICACE D'HYDROGENE"
        },
        status: "Deemed expired"
    },

    //example biliographic info
    bibliographic: {
        internationalPatentClassification: "C01B 3/00 (2006.01)",
        inventors: ["GRIMES, PATRICK G. (United States of America)"],
        owners: ["GRDC, LLC (United States of America)"],
        applicants: ["GRDC, LLC (United States of America)"],
        agent: "OSLER, HOSKIN & HARCOURT LLP",
        associateAgent: null,
        issuedDate: new Date("2013-01-22"),
        pctFilingDate: new Date("2006-06-23"),
        openToPublicInspectionDate: new Date("2007-01-04"),
        examinationRequestedDate: new Date("2007-12-21"),
        availabilityOfLicense: "N/A",
        languageOfFiling: "English",
        pctFilingNumber: "PCT/US2006/024646",
        internationalPublicationNumber: "WO2007/002504",
        nationalEntryDate: new Date("2007-12-21"),
        patentCooperationTreaty: true,
    }
}