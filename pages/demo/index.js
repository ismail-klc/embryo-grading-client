import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import ImageUpload from '../../components/ImageUpload'
import Admin from '../../components/Layouts/Admin'
import { toast } from 'react-toastify';

function DemoPage() {
    const [image, setImage] = useState('')
    const [label, setLabel] = useState('')
    const [reviewImage, setreviewImage] = useState('')
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        window.scrollTo({ top: 1000, behavior: 'smooth' })
    }, [loaded]);

    const handleDemoAction = async () => {
        const formData = new FormData()
        formData.append('file', image)

        try {
            const res = await toast.promise(
                axios.post(process.env.MODEL_API, formData),
                {
                    pending: 'Tahmin işlemi gerçekleştiriliyor',
                    success: 'İşlem başarılı 👌',
                    error: 'İşlem başarısız 🤯'
                }
            );

            setLabel(res.data.result)
            setreviewImage(URL.createObjectURL(image))
            setImage('')
        } catch (error) {

        }

    }

    return (
        <Admin title="Demo">
            <ImageUpload
                btnAction={handleDemoAction}
                btnText={'Tahmin Et'}
                image={image}
                setReviewImage={setreviewImage}
                setImage={setImage}
            />

            {
                label && reviewImage &&
                <div style={{ margin: '75px 0', textAlign: 'center' }}>
                    <h2 className='font-bold text-3xl'>{label}</h2>
                    <img
                        className="fileUploadImage"
                        src={reviewImage}
                        alt="your image"
                        onLoad={() => setLoaded(!loaded)}
                    />
                </div>
            }
        </Admin>
    )
}

export default DemoPage
