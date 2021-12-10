import React, { useCallback, useState } from 'react'
import Admin from '../../../../components/Layouts/Admin'
import { useDropzone } from "react-dropzone";
import axios from 'axios';
import Router from 'next/router';

const AddRecord = ({ data }) => {
    const [images, setImages] = useState([])
    const [previews, setPreviews] = useState([])

    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
        acceptedFiles.forEach(file => {
            setImages(prevState => [...prevState, file])
            setPreviews(prevState => [...prevState, URL.createObjectURL(file)])
            
            // const reader = new FileReader()
            // reader.onload = () => {
            //     setImages(prevState => [...prevState, reader.result])
            // }
            // reader.readAsDataURL(file)
        })
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: 'image/*'
    })

    const handleUpload = async () => {
        const formData = new FormData()

        for (let i = 0; i < images.length; i++) {
            const form = new FormData()
            form.append('file', images[i])
            const res = await axios.post(process.env.MODEL_API, form);
            formData.append(res.data.result, images[i])
        }
        axios
            .post(`${process.env.API}/patients/${data.id}/records`, formData, { withCredentials: true })
            .then(res => Router.push(`/patients/${data.id}`))
            .catch(err => console.log(err))
    }

    return (
        <Admin title={"Yeni Kayıt Ekle"}>
            <div className='border-2 border-gray-600 border-dotted w-full h-80 bg-green-50 flex flex-1 items-center justify-center'
                {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? "Drag active" : "Resimleri sürükleyip bırakın veya seçmek için tıklayın"}
            </div>
            {
                images.length > 0 &&
                <button
                className='py-2 px-4 my-4 font-semibold rounded-lg shadow-md text-white bg-blue-400 hover:bg-blue-700'
                onClick={handleUpload}>Resimleri Yükle</button>
            }
            {
                previews.length > 0 &&
                <div className='flex'>
                    {previews.map((image, i) =>
                        <img className='h-32 w-32 object-cover mr-4 bg-gray-100' key={i} src={image} />
                    )}
                </div>
            }
        </Admin>
    )
}

export default AddRecord

export async function getServerSideProps(context) {
    const { id } = context.params;
    try {
        const { data } = await axios.get(`${process.env.API}/patients/${id}`,
            {
                headers: context.req.headers,
                withCredentials: true
            });
        return { props: { data } }
    } catch (error) {
        return { notFound: true }
    }
}