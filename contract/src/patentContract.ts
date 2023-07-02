import { NearBindgen, near, call, view } from 'near-sdk-js';

interface Patent {
    title: string,
    number: string,
    abstract: string,
    inventors: string[],
    filingDate: string,
    issueDate: string,
    pdf: string,//link to firebase storage for pdf, minting tbd
    drawing: string,//link to firebase storage for pdf, minting tbd
}

@NearBindgen({})
class PatentMarketplace {
    patents: Patent[] = [];

    @view({}) // This method is read-only and can be called for free
    get_patents(): Patent[] {
        return this.patents
    }

    @call({}) // This method changes the state, for which it cost gas
    add_patent({ patent }: { patent: Patent }): void {
        near.log(`Adding patent ${patent.number}`);
        this.patents.push(patent);
    }

    @call({}) // This method changes the state, for which it cost gas
    remove_patent({ patent }: { patent: Patent }): void {
        near.log(`Removing patent ${patent.number}`);
        this.patents = this.patents.filter((pat: Patent) => {
            return pat.number !== patent.number
        });
    }

    @call({}) // This method changes the state, for which it cost gas
    edit_patent({ patent }: { patent: Patent }): void {
        near.log(`Saving patent ${patent.number}`);
        this.patents = this.patents.map((pat: Patent, index: number) => {
            return pat.number === patent.number ? patent : pat
        });
    }
}