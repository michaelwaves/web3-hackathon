import { motion, AnimatePresence } from "framer-motion"
import SolutionsComponent from "./SolutionsComponent"

const expansionVariants = {
    open: {
        clipPath: "inset(0% 0% 0% 0% round 10px)",
        transition: {
            type: "spring",
            bounce: 0,
            duration: 0.7,
            delayChildren: 0.3,
            staggerChildren: 0.05
        }
    },
    closed: {
        clipPath: "inset(10% 50% 90% 50% round 10px)",
        transition: {
            type: "spring",
            bounce: 0,
            duration: 0.3
        }

    }
}

const solutionsData = [
    {
        title: "Store",
        text: "Upload patents to the chain",
        href: "/upload"
    },
    {
        title: "Trade",
        text: "Securely buy and sell patents",
        href: "/marketplace"
    }

]

const solutions = solutionsData.map((solution) => {
    return (
        <SolutionsComponent title={solution.title} href={solution.href} text={solution.text} />
    )
})
export default function SolutionsMenu({ isSolutionsOpen }) {
    return (
        <AnimatePresence>
            <motion.div className="flex flex-col md:flex-row gap-4 p-6 m-2 relative bg-white w-full"
                initial={false}
                animate={isSolutionsOpen ? "open" : "closed"}
                variants={expansionVariants}
            >
                {solutions}
            </motion.div>
        </AnimatePresence>

    )

}