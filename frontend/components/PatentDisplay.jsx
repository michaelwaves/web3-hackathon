import { AnimatePresence, motion } from 'framer-motion'
import Modal from './Modal'
import { useState } from 'react'
export default function PatentDisplay({ title, number, filingDate, issueDate, abstract, inventors, image, onClick, buttonText }) {
    const [showModal, setShowModal] = useState(false)

    const inventorComponents = inventors.map((inventor, index) => {
        return (
            <h3 key={index}>{inventor}</h3>
        )
    })
    return (
        <div className="w-60 h-auto border-gray-800 rounded-xl py-4 border-[1px] shadow-md">
            <div className="flex flex-col space-y-2 items-center justify-center">
                <h2 className="text-2xl">{title}</h2>
                <h3 className="font-bold">Patent No. {number}</h3>
                <img src={image} alt="" />
                <div className="flex flex-row w-full px-2">
                    <div className="w-full border-r-[2px] border-gray-300 mr-2">
                        <p className="font-bold">Inventors:</p>
                    </div>
                    <div className="flex flex-col w-full">
                        {inventorComponents}
                    </div>
                </div>
                <div className="flex flex-row w-full px-2">
                    <div className="w-full border-r-[2px] border-gray-300 mr-2">
                        <h3 className="font-bold">Filing Date: </h3>
                    </div>
                    <div className="w-full">
                        {filingDate}
                    </div>
                </div>
                <div className="flex flex-row w-full px-2">
                    <div className="w-full border-r-[2px] border-gray-300 mr-2">
                        <h3 className="font-bold">Issue Date: </h3>

                    </div>
                    <div className="w-full">
                        {issueDate}
                    </div>
                </div>
                <button className="bg-[#cccccc] p-2 rounded-t-lg w-full text-black"
                    onClick={() => { setShowModal(true) }}

                >
                    <p className="font-bold">Abstract</p>
                </button>
            </div>
            <motion.button className="w-full rounded-t-none" onClick={onClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >{buttonText}</motion.button>
            <AnimatePresence>
                {showModal && <Modal handleClose={() => setShowModal(false)} text={abstract} />}
            </AnimatePresence>
        </div >
    )
}