import { aboutTextComponents } from "../components/AboutText"

export default function About() {
    return (
        <div className="flex flex-col justify-center items-center p-4 pt-10 pb-10">
            <h2 className="text-2xl w-full">Introducing NearIP: Revolutionizing Intellectual Property Ownership and Transactions</h2>
            <div className="flex flex-col space-y-2 items-center justify-center">
                {aboutTextComponents}
            </div>
            <h2 className="text-2xl w-full pb-10">Join us in shaping the future of IP transactions with NearIP!</h2>
            <button onClick={() => { window.location.href = "/upload" }}>Mint Your First Patent!</button>
        </div>
    )
}