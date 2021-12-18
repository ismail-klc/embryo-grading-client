import Router from 'next/router';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import useRequest from '../../hooks/use-request';
import Errors from '../Errors';

function ChangePassword() {
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirm, setConfirm] = useState("")

    const { doRequest, errors } = useRequest({
        url: `${process.env.API}/doctors/change-password`,
        method: 'post',
        body: {
            oldPassword, newPassword, confirm
        },
        onSuccess: () => {
            Router.push('/')
            toast.success("Şifre değiştirme işlemi başarılı");
        }
    });

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(oldPassword, newPassword, confirm);
        await doRequest();
    };

    return (
        <form onSubmit={submitHandler} className='sm:w-1/2 w-full mx-auto'>
            <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="oldPassword"
                value={oldPassword}
                onChange={e => setOldPassword(e.target.value)}
                placeholder="Eski Şifreniz"
            />
            <input
                type="password"
                className="block border border-grey-light  w-full p-3 rounded mb-4"
                name="newPassword"
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                placeholder="Yeni Şifreniz"
            />
            <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="confirm"
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
                placeholder="Şifre Tekrar"
            />
            {
                errors && <Errors msg={errors} />
            }
            <button type='submit'
                className='rounded-md my-5 w-full p-2 bg-blue-600 text-white'>Şifreni Değiştir</button>
            
        </form>
    )
}

export default ChangePassword
