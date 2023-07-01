
import PatentDisplay from "../components/PatentDisplay"
import { useState } from "react"
export default function Sell() {
    const [price, setPrice] = useState(0)
    return (
        <div className="flex flex-col items-center justify-center">
            <h1>Choose Patent to Sell</h1>
            <div className="flex flex-row space-y-2">
                <PatentDisplay title="Patent 1" number="123456"
                    filingDate="1/1/2021" issueDate="1/1/2022" abstract="This is a patent"
                    inventors={["John Doe", "Jane Doe"]}
                    image="https://www.w3schools.com/howto/img_forest.jpg"
                    onClick={() => { console.log("u sold a patent!") }}
                    buttonText="Sell" />
            </div>
        </div>
    )
}