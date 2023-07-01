import PatentDisplay from "../components/PatentDisplay"

export default function Buy() {
    return (
        <div>
            <h1>Choose Patent to Buy</h1>
            <div className="flex flex-col space-y-2">
                <PatentDisplay title="Patent 1" number="123456"
                    filingDate="1/1/2021" issueDate="1/1/2022" abstract="This is a patent"
                    inventors={["John Doe", "Jane Doe"]}
                    image="https://www.w3schools.com/howto/img_forest.jpg"
                    onClick={() => { console.log("u bought a patent!") }} />
            </div>
        </div>
    )
}