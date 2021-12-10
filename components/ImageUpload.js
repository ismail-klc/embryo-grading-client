import React, { useRef, useState } from 'react'
import Image from 'next/image'

function ImageUpload(props) {
    const [imgPath, setImgPath] = useState("")
    const inputFile = useRef()

    const readURL = e => {
        setImgPath(URL.createObjectURL(e.target.files[0]))
        props.setImage(e.target.files[0])
    }

    const onButtonClick = () => {
        if (inputFile.current !== null) {
            inputFile.current.click();
        }
        else {
            removeUpload()
        }
    };

    const removeUpload = () => {
        setImgPath("")
        props.setReviewImage("")
    }

    return (
        <div className="fileUpload -mt-14">
            <button className="fileUploadBtn" type="button" onClick={onButtonClick}>Resim Ekle</button>
            {
                !imgPath &&
                <div className="imageUploadWrap">
                    <input
                        value={props.image}
                        className="fileUploadInput" ref={inputFile} type='file' onChange={readURL} accept="image/*" />
                    <div className="dragText">
                        <h3>Resmi sürükle bırak veya bir resim seçmek için tıkla</h3>
                    </div>
                </div>
            }
            {
                imgPath &&
                <div className="fileUploadContent">
                    <Image
                        className="fileUploadImage py-4"
                        src={imgPath}
                        alt="your image"
                        width={400}
                        height={400}
                    />
                    <div className="imageTitleWrap">
                        <button type="button" onClick={removeUpload} className="removeImage">Kaldır &nbsp;
                        </button>
                        <button onClick={props.btnAction} type="button" className="removeImage">{props.btnText} &nbsp;
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}

export default ImageUpload
