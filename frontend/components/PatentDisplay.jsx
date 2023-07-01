export default function PatentDisplay({ title, number, filingDate, issueDate, abstract, inventors, image, onClick }) {
    const inventorComponents = inventors.map((inventor, index) => {
        return (
            <h3 key={index}>{inventor}</h3>
        )
    })
    return (
        <div>
            <div className="flex flex-col space-y-2">
                <h2>{title}</h2>
                <h3>{number}</h3>
                <img src={image} alt="" />
                {inventorComponents}
                <h3>{filingDate}</h3>
                <h3>{issueDate}</h3>
                <div className="bg-[#cccccc] p-2 rounded-lg">
                    <h3>{abstract}</h3>
                </div>
            </div>
            <button onClick={onClick}>Buy</button>
        </div>
    )
}