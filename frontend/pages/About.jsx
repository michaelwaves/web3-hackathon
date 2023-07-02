import { aboutTextComponents } from "../components/AboutText"

export default function About() {
    const businessModel = `

    In terms of business model, we can charge a flat fee of 1% on every patent transaction so instead of paying thousands for a lawyer to look through a bunch of paper, you can get a seamless and secure experience through NearIP for $100 if their patent is being sold for $10k. Will $38 Billion in patents listed out of the total $3 trillion worth of US patents, that’s a total addressable market of $380 million. Capturing just 1% of that would mean annual revenues of $3.8 million.

    To conclude, NearIP revolutionizes the trillion dollar IP industry by increasing efficiency, transparency, and accessibility. By embracing blockchain technology, we empower creators, investors, and businesses to fully leverage the immense value of intellectual property.
    
    Join us in shaping the future of IP transactions with NearIP!
    
`;
    const inspiration = `

Hi, my name is William, and this is my team’s demo for the Web3 Build Hackathon!

Before demoing our product, I want to provide quick context on the inspiration. I recently had a conversation with a close friend who wanted to share their patents with the world. However, their excitement quickly turned into frustration as they discovered the exorbitant costs associated with navigating the convoluted legal landscape and finding potential buyers. Meanwhile, I found online that companies had trouble scouting relevant patents, with transactions costing thousands due to the lawyer fees involved.

This encounter ignited a fire within me—a burning determination to create a solution that would empower innovators like my friend and revolutionize the way intellectual property is transacted. That's when NearIP was born, an Intellectual Property NFT Marketplace built on Near Protocol's Blockchain Operating System.

`;
    return (
        <div className="flex flex-col justify-center items-center p-4 pt-10 pb-10">
            {/* <h2 className="text-2xl w-full">Inspiration</h2>
            <br></br>
            <div className="flex flex-col space-y-2 items-center justify-center">
                {inspiration}
            </div> */}
            <br></br>
            <h2 className="text-2xl w-full">Introducing NearIP: Revolutionizing Intellectual Property Ownership and Transactions</h2>
            <div className="flex flex-col space-y-2 items-center justify-center">
                {aboutTextComponents}
            </div>
            <h2 className="text-2xl w-full pb-10">Business Model</h2>
            <div className="flex flex-col space-y-2 items-center justify-center">
                {businessModel}
            </div>
            <br></br>
            <h2 className="text-2xl w-full pb-10">Join us in shaping the future of IP transactions with NearIP!</h2>
            <button onClick={() => { window.location.href = "/upload" }}>Mint Your First Patent!</button>
        </div>
    )
}