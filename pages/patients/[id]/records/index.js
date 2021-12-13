import React from 'react'
import Admin from '../../../../components/Layouts/Admin'
import ImageCard from '../../../../components/Cards/ImageCard'
import Custom404 from '../../../../components/NotFound'
import { useRouter } from 'next/router'
import useSWRImmutable from 'swr'

const PatientRecords = () => {
    const router = useRouter()
    const { id } = router.query
    
    const { data, error } = useSWRImmutable(`${process.env.API}/patients/${id}/records`)
    
    if(error) return <Custom404 />
    if(!data) return null

    return (
        <Admin title={"Hasta Kayıtları"}>
            <h2 className='text-2xl mb-4'>Hasta Kayıtları</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {
                    data[0] ? data.map((d, i) => (
                        <ImageCard image={d} key={i}/>
                    ))
                    : <div className='w-full'>Hastaya ait embriyo görüntü kaydı bulunmamaktadır.</div>
                }
            </div>
        </Admin>
    )
}

export default PatientRecords