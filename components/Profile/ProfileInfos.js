import React from 'react'

function ProfileInfos({ data }) {

    return (
        <div className='px-4 space-y-2 pb-5'>
            <h2 className='text-lg'>Profil Bilgileri</h2>
            <div>
                <label>Ad: </label>
                <input value={data.firstName} disabled />
            </div>
            <div>
                <label>Soyad: </label>
                <input value={data.lastName} disabled />
            </div>
            <div>
                <label>Email: </label>
                <input value={data.email} disabled />
            </div>
        </div>
    )
}

export default ProfileInfos
