import React from 'react'
import { format } from 'date-fns'
import { tr } from 'date-fns/locale'

const ImageCard = ({ image }) => {
    return (
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
            <img src={`http://localhost:3001/${image.url}`} className='w-full' alt={image.label}/>
            <div className='px-6 py-4'>
                <ul>
                    <li><strong>Etiket: </strong>{image.label}</li>
                    <li><strong>Eklenme Tarihi: </strong>{format(new Date(image.createdAt), 'dd MMMM, yyyy, HH:mm', { locale: tr })}</li>
                </ul>
            </div>
        </div>
    )
}

export default ImageCard
