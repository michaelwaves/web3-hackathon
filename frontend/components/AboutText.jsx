const aboutText = `

Did you know that intellectual property (IP) and patents play a significant role in both the Canadian and US economies? In the United States, IP-intensive industries account for an astounding 38.2% of the nation's GDP, contributing over USD 6.6 trillion to the economy [source: U.S. Department of Commerce].

However, the current IP ecosystem is burdened by inefficiencies and limitations. Traditional methods of IP protection, licensing, and transactions are slow, costly, and prone to disputes. This hampers innovation and prevents creators from fully leveraging the value of their intellectual assets.

That's where NearIP comes in. NearIP is an Intellectual Property NFT Marketplace built on Near Protocol's Blockchain Operating System, offering a transformative solution for the IP industry. By harnessing the power of blockchain technology, NearIP brings a multitude of benefits to all stakeholders involved.

For creators, NearIP provides a secure and transparent platform to tokenize their intellectual property as Non-Fungible Tokens (NFTs). This enables them to establish verifiable ownership, protect their IP rights, and unlock new avenues for monetization. Creators can seamlessly license their IP assets to interested parties, ensuring fair compensation and streamlined transactions.

For investors, NearIP opens up a new world of investment opportunities in the IP space. Through the marketplace, they can explore a diverse range of IP assets and participate in their growth potential. The transparent nature of blockchain ensures trust and reduces the risk of fraud, providing a secure environment for IP investments.

NearIP also benefits businesses seeking to access and license IP assets. The marketplace offers a global repository of NFT-based IP assets, facilitating easy discovery and licensing negotiations. By leveraging blockchain's immutability and smart contract capabilities, NearIP enables streamlined, automated licensing agreements, reducing legal complexities and ensuring compliance.

`
export const aboutTextComponents = aboutText.split("\n").map((text) => {
    return (
        <p className="text-lg">{text}</p>
    )
}
)