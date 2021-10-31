import React, { useRef, useState } from 'react'

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
        props.setImage("")
    }

    return (
        <div className="fileUpload">
                <button className="fileUploadBtn" type="button" onClick={onButtonClick}>Add Image</button>
                {
                    !imgPath &&
                    <div className="imageUploadWrap">
                        <input
                        value={props.image}
                        className="fileUploadInput" ref={inputFile} type='file' onChange={readURL} accept="image/*" />
                        <div className="dragText">
                            <h3>Drag and drop a file or select add Image</h3>
                        </div>
                    </div>
                }
                {
                    imgPath &&
                    <div className="fileUploadContent">
                        <img className="fileUploadImage" src={imgPath} alt="your image" />
                        <div className="imageTitleWrap">
                            <button type="button" onClick={removeUpload} className="removeImage">Remove &nbsp;
                                <span className="imageTitle">Uploaded Image</span>
                            </button>
                            <button onClick={props.btnAction} type="button" className="removeImage">{props.btnText} &nbsp;
                                <span className="imageTitle">Uploaded Image</span>
                            </button>
                        </div>
                    </div>
                }
            </div>
    )
}

export default ImageUpload
