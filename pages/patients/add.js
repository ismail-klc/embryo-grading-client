import React from 'react'
import Admin from '../../components/Layouts/Admin'

const AddPatient = () => {
    return (
        <Admin>
            <h2 className="uppercase text-lg text-center">Yeni Hasta Ekle</h2>
            <div className="flex justify-center items-center w-full mb-10 ">
                <div className="w-full rounded shadow-2xl p-8 my-4 mx-20 bg-gray-200">
                    <form action="/" method="post">
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 font-bold text-lg text-gray-900" >Ad</label>
                            <input className="border py-2 px-3 text-grey-800" type="text" name="first_name" id="first_name" />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 font-bold text-lg text-gray-900" >Soyad</label>
                            <input className="border py-2 px-3 text-grey-800" type="text" name="last_name" id="last_name" />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 font-bold text-lg text-gray-900" >Email</label>
                            <input className="border py-2 px-3 text-grey-800" type="email" name="email" id="email" />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 font-bold text-lg text-gray-900" >Telefon</label>
                            <input className="border py-2 px-3 text-grey-800" type="password" name="password" id="password" />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 font-bold text-lg text-gray-900" >Doğum Tarihi</label>
                            <input className="border py-2 px-3 text-grey-800" type="password" name="password" id="password" />
                        </div>
                        <button className="block bg-gray-800 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">
                            Hasta Ekle
                        </button>
                    </form>
                </div>
            </div>
        </Admin>
    )
}

export default AddPatient
