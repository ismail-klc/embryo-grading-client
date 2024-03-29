import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import Errors from "../../components/Errors";
import Admin from '../../components/Layouts/Admin'
import useRequest from "../../hooks/use-request";
import Router from 'next/router';
import { toast } from 'react-toastify';

const AddPatient = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [tcNo, setTcNo] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [birthDate, setBirthDate] = useState(new Date());
    const { doRequest, errors } = useRequest({
        url: `${process.env.API}/patients`,
        method: 'post',
        body: {
            firstName, lastName, tcNo, phoneNumber, birthDate
        },
        onSuccess: () => {
            Router.push('/patients')
            toast("Hasta başarıyla kayıt edildi");
        }
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        doRequest();
    }

    return (
        <Admin title={"Hasta Ekle"}>
            <h2 className="uppercase text-lg text-center">Yeni Hasta Ekle</h2>
            <div className="flex justify-center items-center w-full mb-10 ">
                <div className="w-full rounded shadow-2xl p-8 my-4 mx-20 bg-gray-200">
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="first_name" className="mb-2 font-bold text-lg text-gray-900" >Ad</label>
                            <input
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)}
                                className="border py-2 px-3 text-grey-800" type="text" name="first_name" id="first_name" />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="last_name" className="mb-2 font-bold text-lg text-gray-900" >Soyad</label>
                            <input
                                value={lastName}
                                onChange={e => setLastName(e.target.value)}
                                className="border py-2 px-3 text-grey-800" type="text" name="last_name" id="last_name" />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="tcNo" className="mb-2 font-bold text-lg text-gray-900" >TC No</label>
                            <input
                                value={tcNo}
                                onChange={e => setTcNo(e.target.value)}
                                className="border py-2 px-3 text-grey-800" type="text" name="tcNo" id="tcNo" />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="phone" className="mb-2 font-bold text-lg text-gray-900" >Telefon</label>
                            <input
                                value={phoneNumber}
                                onChange={e => setPhoneNumber(e.target.value)}
                                className="border py-2 px-3 text-grey-800" type="text" name="phone" id="phone" />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="birthDate" className="mb-2 font-bold text-lg text-gray-900" >Doğum Tarihi</label>
                            <DatePicker name="birthDate" id="birthDate" className="border py-2 px-3 text-grey-800"
                                selected={birthDate} onChange={(date) => setBirthDate(date)} />
                        </div>
                        <button
                            aria-label="add-patient"
                            className="block bg-gray-800 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">
                            Hasta Ekle
                        </button>
                        {errors && <Errors msg={errors} />}
                    </form>
                </div>
            </div>
        </Admin>
    )
}

export default AddPatient