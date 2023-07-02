import { motion } from "framer-motion"

export default function Trade() {
    return (
        <div className="flex flex-col items-center space-y-2 justify-center">
            <h1>Trade</h1>
            <div className="flex flex-col md:flex-row gap-4 ">

                <motion.button
                    href="/buy"
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                    className="w-40 h-auto text-center text-2xl font-bold justify-center rounded-xl"
                    onClick={() => { window.location.href = "/buy" }}
                >
                    Buy 🛒
                </motion.button>
                <motion.button
                    href="/buy"
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                    className="w-40 h-auto text-center text-2xl font-bold justify-center rounded-xl"
                    onClick={() => { window.location.href = "/portfolio" }}
                >
                    Sell 💰
                </motion.button>
            </div>
        </div>
    )
}