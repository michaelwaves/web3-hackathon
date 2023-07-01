import { useState } from "react"
export default function Sell() {
    const [price, setPrice] = useState(0)
    return (
        <div>
            <h1>Choose Patent to Sell</h1>
            <div className="flex flex-col space-y-2">
                <a href="/upload"><h3>Patent 1</h3></a>
                <a href="/upload"><h3>Patent 2</h3></a>
                <a href="/upload"><h3>Patent 3</h3></a>
            </div>
            <h2>Price</h2>
            <input type="text" value={price} placeholder="Enter Price"
                onChange={(e) => setPrice(e.target.value)} />
        </div>
    )
}