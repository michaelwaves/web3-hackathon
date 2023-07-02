import PatentDisplay from "../components/PatentDisplay"
import PatentDisplaySmall from "../components/PatentDisplaySmall"

export default function Buy() {
    return (
        <div className="min-h-screen h-auto">
            <h1>Choose Patent to Buy</h1>
            <div className="flex flex-row space-x-2">
                <PatentDisplaySmall title="Patent 1" number="123456"
                    filingDate="1/1/2021" issueDate="1/1/2022" abstract="This is a patent"
                    inventors={["John Doe", "Jane Doe"]}
                    image="https://www.w3schools.com/howto/img_forest.jpg"
                    onClick={() => { console.log("u bought a patent!") }}
                    buttonText="Buy" />
                <PatentDisplaySmall title="Patent 1" number="123456"
                    filingDate="1/1/2021" issueDate="1/1/2022" abstract="This is a patent"
                    inventors={["John Doe", "Jane Doe"]}
                    image="https://www.w3schools.com/howto/img_forest.jpg"
                    onClick={() => { console.log("u bought a patent!") }}
                    buttonText="Buy" />
                <PatentDisplaySmall title="Patent 1" number="123456"
                    filingDate="1/1/2021" issueDate="1/1/2022" abstract="This is a patent"
                    inventors={["John Doe", "Jane Doe"]}
                    image="https://www.w3schools.com/howto/img_forest.jpg"
                    onClick={() => { console.log("u bought a patent!") }}
                    buttonText="Buy" />

            </div>
        </div>
    )
}