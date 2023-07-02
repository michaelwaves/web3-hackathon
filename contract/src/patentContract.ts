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
    patents: Patent[] = [{
        title: "METHOD OF FERMENTING MYCELIUM COMPOSITE MATERIAL",
        number: "US10407675B2",
        filingDate: "2017-03-31",
        issueDate: "2019-09-10",
        abstract: "A method of fermenting a mycelium composite material includes providing a mycelium composite material including a mycelium composite material substrate and a mycelium composite material mycelium, the mycelium composite material substrate including a substrate material and a substrate material nutrient, the substrate material nutrient including a substrate material nutrient carbon source and a substrate material nutrient nitrogen source, the substrate material nutrient carbon source including a substrate material nutrient carbon source carbohydrate and a substrate material nutrient carbon source protein, the substrate material nutrient nitrogen source including a substrate material nutrient nitrogen source ammonia and a substrate material nutrient nitrogen source nitrate, the mycelium composite material mycelium including a mycelium composite material mycelium carbohydrate and a mycelium composite material mycelium protein.",
        inventors: ["Eben Bayer", "Gavin McIntyre", "Chris Scully", "Stephen Foley"],
        pdf: "https://firebasestorage.googleapis.com/v0/b/trademint-aabe6.appspot.com/o/method%20of%20fermenting%20mycelium%20composite%20material.pdf?alt=media&token=87c010ca-ed9e-405c-8996-3d6c87606ee6",
        drawing: "https://firebasestorage.googleapis.com/v0/b/trademint-aabe6.appspot.com/o/composting_mycelium_drawing.png?alt=media&token=e3a7aea3-bb4a-4129-a39b-70b679f418cf"
    }];

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