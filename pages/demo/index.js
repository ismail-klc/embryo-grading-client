import axios from 'axios'
import React, { useState } from 'react'
import ImageUpload from '../../components/ImageUpload'
import Admin from '../../components/Layouts/Admin'
import Image from 'next/image'

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
        <Admin title="Demo">
            <ImageUpload
                btnAction={handleDemoAction}
                btnText={'Tahmin Et'}
                image={image}
                setImage={setImage}
            />

            {
                label &&
                <div style={{ margin: '75px 0', textAlign: 'center' }}>
                    <h2>{label}</h2>
                    <Image
                        className="fileUploadImage"
                        src={reviewImage}
                        alt="your image"
                        width={500}
                        height={500}
                    />
                </div>
            }
        </Admin>
    )
}

export default DemoPage
