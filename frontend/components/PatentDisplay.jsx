import { AnimatePresence, motion } from 'framer-motion'
import Modal from './Modal'
import { useState } from 'react'

const expand = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>

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
                <button className="bg-[#cccccc] p-2 rounded-t-lg w-full text-black"
                    onClick={() => { setShowModal(true) }}

                >
                    <p className="font-bold">Show Abstract</p>
                </button>
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