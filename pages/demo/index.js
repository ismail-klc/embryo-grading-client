import axios from 'axios'
import React, { useState } from 'react'
import ImageUpload from '../../components/ImageUpload'

function DemoPage() {
    const [image, setImage] = useState('')
    const [label, setLabel] = useState('')
    const [reviewImage, setreviewImage] = useState('')

    const handleDemoAction = async () => {
        const formData = new FormData()
        formData.append('file', image)

        const res = await axios.post(process.env.MODEL_API, formData);
        setLabel(res.data.result)
        setreviewImage(URL.createObjectURL(image))
        setImage('')
    }

    return (
        <div>
            <ImageUpload
                btnAction={handleDemoAction}
                btnText={'Predict'}
                image={image}
                setImage={setImage}
            />

            {
                label &&
                <div style={{ margin: '75px 0', textAlign: 'center' }}>
                    <h2>{label}</h2>
                    <img src={reviewImage} />
                </div>
            }
        </div>
    )
}

export default DemoPage