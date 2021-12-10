import axios from 'axios';
import React from 'react'
import Admin from '../../../../components/Layouts/Admin'
import ImageCard from '../../../../components/Cards/ImageCard'

const PatientRecords = ({ data }) => {
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

export async function getServerSideProps(context) {
    const { id } = context.params;
    try {
        const { data } = await axios.get(`${process.env.API}/patients/${id}/records`,
            {
                headers: context.req.headers,
                withCredentials: true
            });
        return { props: { data } }
    } catch (error) {
        console.log(error);
        return { notFound: true }
    }
}