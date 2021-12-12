import axios from 'axios'
import { format } from 'date-fns'
import React from 'react'
import Admin from '../../../components/Layouts/Admin'
import Image from 'next/image'
import Link from 'next/link'
import { tr } from 'date-fns/locale'
import buildClient from '../../../helpers/build-client'

const PatientProfile = ({ data }) => {

    return (
        <Admin title={`Hasta - ${data.firstName} ${data.lastName}`}>
            <div className="bg-gray-100">
                <div className="w-full mb-10 text-white bg-main-color">
                    <div
                        className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                        <div className="p-4 flex flex-row items-center justify-between">
                            <a href="#"
                                className="text-lg text-black font-semibold tracking-widest uppercase rounded-lg focus:outline-none focus:shadow-outline">
                                Hasta Detay</a>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto my-5 p-5">
                    <div className="md:flex no-wrap md:-mx-2 ">
                        <div className="w-full md:w-3/12 md:mx-2">
                            <div className="bg-white p-3 border-t-4 border-green-400">
                                <div className="image overflow-hidden">
                                    <Image
                                        className="h-auto w-full mx-auto"
                                        src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=170667a&w=0&h=kEAA35Eaz8k8A3qAGkuY8OZxpfvn9653gDjQwDHZGPE="
                                        alt="Picture of the patient"
                                        width={500}
                                        height={500}
                                    />
                                </div>
                                <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{data.firstName + " " + data.lastName}</h1>
                                <ul
                                    className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                    <li className="flex items-center py-3">
                                        <span>Durum</span>
                                        <span className="ml-auto"><span
                                            className="bg-green-500 py-1 px-2 rounded text-white text-sm">Aktif</span></span>
                                    </li>
                                    <li className="flex items-center py-3">
                                        <span>Eklenme Tarihi</span>
                                        <span className="ml-auto">{format(new Date(data.createdAt), 'dd MMMM, yyyy', { locale: tr })}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full md:w-9/12 mx-2 h-64">
                            <div className="bg-white p-3 shadow-sm rounded-sm">
                                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                    <span clas="text-green-500">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>
                                    <span className="tracking-wide">Hakkında</span>
                                </div>
                                <div className="text-gray-700">
                                    <div className="grid md:grid-cols-2 text-sm">
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Ad</div>
                                            <div className="px-4 py-2">{data.firstName}</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Soyad</div>
                                            <div className="px-4 py-2">{data.lastName}</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Cinsiyet</div>
                                            <div className="px-4 py-2">Kadın</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">İletişim No.</div>
                                            <div className="px-4 py-2">{data.phoneNumber}</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Current Address</div>
                                            <div className="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Permanant Address</div>
                                            <div className="px-4 py-2">Arlington Heights, IL, Illinois</div>
                                        </div>

                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Doğum Tarihi</div>
                                            <div className="px-4 py-2">{format(new Date(data.birthDate), 'dd MMMM, yyyy', { locale: tr })}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-x-4 flex">
                                    <Link href={`/patients/${data.id}/records/add`}>
                                        <a
                                            aria-label="add-record"
                                            className="w-1/2 text-blue-800 bg-gray-200 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline
                                     focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                                            Yeni Kayıt Ekle</a>
                                    </Link>
                                    <Link href={`/patients/${data.id}/records`}>
                                        <a
                                            aria-label="see-records"
                                            className="w-1/2 text-blue-800 bg-gray-200 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline
                                     focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                                            Kayıtları Gör</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Admin>
    )
}

export default PatientProfile

export async function getServerSideProps(context) {
    const { id } = context.params;
    const client = buildClient(context)
    try {
        const { data } = await client.get(`/patients/${id}`)
        return { props: { data } }
    } catch (error) {
        console.log(error.message);
        return { notFound: true }
    }
}