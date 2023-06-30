import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from "react"
import SolutionsMenu from "./SolutionsMenu"
export default function Header({ wallet, isSignedIn}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
    const toggleSolutionMenu = () => {
        setIsSolutionsOpen(!isSolutionsOpen)
        console.log(isSolutionsOpen)
    }
    const expansionVariants = {
        open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
                type: "spring",
                bounce: 0,
                duration: 0.5,
            }
        },
        closed: {
            clipPath: "inset(0% 50% 100% 50% round 10px)",
            transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3
            }

        }
    }
    return (
        <div className="w-full h-8 p-4 justify-between items-center lg:flex-row">
            <div className="h-full flex flex-row items-center justify-between p-2">
                <a href="/" className="">
                    <h2 className="text-4xl">TradeMint</h2>
                </a>
                <div className="sm:flex flex-row gap-2 hidden">
                    <a href="/about" className="nav-element">About</a>
                    <button className="nav-element" onClick={toggleSolutionMenu}>Start Now</button>
                    <a href="/contact" className="nav-element">Contact</a>
                </div>

                <motion.button
                    animate={isMenuOpen ? "open" : "closed"}
                    className='absolute top-0 right-0 p-4 sm:hidden z-20'
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    variants={{
                        open: { rotate: 180 },
                        closed: { rotate: 0 }
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ originY: 0.55 }}
                >
                    <svg width="40" height="40" viewBox="0 0 20 20">
                        <path d="M0 7 L 20 7 L 10 16" />
                    </svg>
                </motion.button>

                <motion.div
                    initial={false}
                    animate={isMenuOpen ? "open" : "closed"}
                    variants={expansionVariants}
                    className="flex flex-col space-y-2 w-full h-full items-center justify-center sm:hidden fixed top-0 left-0 bg-primary-light">

                    <Link href="/about" className="nav-element text-3xl">About</Link>
                    <button className="nav-element text-3xl" onClick={toggleSolutionMenu}>Start Now</button>
                    <Link href="/contact" className="nav-element text-3xl">Contact</Link>
                </motion.div>

                <div className='sm:block hidden'>
                    {!isSignedIn ?
                    <button onClick={()=>wallet.signIn()}>
                        sign in
                    </button>:
                    <button onClick={()=>wallet.signOut()}>
                        sign out
                        </button>
                        }
                </div>
            </div>
            <SolutionsMenu isSolutionsOpen={isSolutionsOpen} />

        </div>
    )
}