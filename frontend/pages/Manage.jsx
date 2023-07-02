import PatentDisplay from "../components/PatentDisplay"
import PatentDisplaySmall from "../components/PatentDisplaySmall"
import { useState, useEffect } from "react"
export default function Manage({ wallet, contractId }) {
    const [valueFromBlockchain, setValueFromBlockchain] = useState();
    const [uiPleaseWait, setUiPleaseWait] = useState(true);

    useEffect(() => {
        getPatents()
            .then(setValueFromBlockchain)
            .catch(alert)
            .finally(() => {
                setUiPleaseWait(false);
            });
    }
        , []);
    useEffect(() => {
        console.log("valueFromBlockchain", valueFromBlockchain);
    }, [valueFromBlockchain]);

    function getPatents() {
        // use the wallet to query the contract's greeting
        return wallet.viewMethod({ method: 'get_patents', contractId })
    }

    const PatentComponents = valueFromBlockchain && valueFromBlockchain.map((patent, index) => {
        return (
            <PatentDisplay title={patent.title}
                number={patent.number}
                abstract={patent.abstract}
                filingDate={patent.filingDate}
                issueDate={patent.issueDate}
                inventors={patent.inventors}
                image={patent.drawing}
                buttonText={"View Patent"}
                onClick={() => window.open(patent.pdf)}
            />
        )
    });

    return (
        <div className="min-h-screen h-auto">
            <h1>My Portfolio</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {!uiPleaseWait && PatentComponents || "Loading..."}
            </div>
        </div>
    )
}