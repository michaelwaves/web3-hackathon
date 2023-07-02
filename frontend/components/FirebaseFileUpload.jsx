import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { storage } from "./Firebase";
import { useState } from "react";

export default function FirebaseFileUpload({ setFileURL, fileName, text, extension }) {
    const [image, setImage] = useState(null);

    const handleFileChange = async (event) => {
        const files = event.target.files;
        const storageRef = ref(storage, `${fileName}.${extension}`)
        if (files && files[0]) {
            setImage(files[0])
            uploadBytes(storageRef, files[0]).then(() => {
                console.log("image uploaded!")
            }).then(async () => {
                const imageUrl = await getDownloadURL(storageRef)
                setFileURL(imageUrl)
                console.log(imageUrl)
            })
        }


    };
    return (
        <div className="w-full">
            <h2 className="text-2xl">{text}</h2>
            <input type="file" className="w-full" onChange={handleFileChange} />
        </div>
    )
}