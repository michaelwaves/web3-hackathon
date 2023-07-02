import { useState } from "react"
export default function Remove({ wallet, contractId }) {
    const [patentNumber, setPatentNumber] = useState("")
    const [removeSuccess, setRemoveSuccess] = useState(false)
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            wallet.callMethod({
                method: 'remove_patent_by_number',
                args: {
                    number: patentNumber,
                }
                , contractId
            }).then((result) => { setRemoveSuccess(true) })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h2>Remove patent by inputing number</h2>
            <div className="flex-col-center">
                <label>
                    Patent Number:
                </label>
                <input type="text" name="name" value={patentNumber} onChange={(e) => setPatentNumber(e.target.value)} />

                <button
                    onClick={(e) => handleSubmit(e)}>Submit</button>
                {removeSuccess ? <div>Patent successfully removed!</div> : <div></div>}
            </div>
        </div>
    )
}