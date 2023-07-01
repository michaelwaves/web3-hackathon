export default function Footer() {
    return (
        <div className="w-full bg-primary-dark text-dark p-16" >
            <div className="flex flex-col md:flex-row justify-start gap-24">
                <div>
                    <h2 className="text-4xl ">TradeMint</h2>
                    <p className="">©️   2023</p>
                </div>

                <div className="flex flex-col space-y-2">
                    <h2>Solutions</h2>
                    <a href="/upload"><h3>Store</h3></a>
                    <a href="/trade"><h3>Trade</h3></a>
                </div>
                <div className="flex flex-col space-y-2">
                    <h2>Company</h2>
                    <a href="/about"><h3>About</h3></a>
                    <a href="/contact"><h3>Contact</h3></a>
                </div>

            </div>
        </div >

    )
}