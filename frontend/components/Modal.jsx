import Backdrop from "./Backdrop"
import { motion } from "framer-motion"

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0,
            duration: 0.7
        }
    },
    exit: {
        y: "-100vh",
        opacity: 0,
        transition: {
            type: "spring",
            bounce: 0,
            duration: 0.7
        }
    }
}

const Modal = ({ handleClose, text }) => {
    return (
        <Backdrop onClick={handleClose}>
            <motion.div className="bg-white p-16 rounded-xl w-auto h-auto flex flex-col justify-center items-center"
                onClick={(e) => e.stopPropagation()}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <h2 className="text-xl">{text}</h2>
                <button onClick={handleClose}>Close</button>
            </motion.div>
        </Backdrop>

    )
}

export default Modal