import React, { useState } from 'react'
import Admin from '../../components/Layouts/Admin'
import { Icon } from '../../components/Icons/Icons'
import ChangePassword from '../../components/Profile/ChangePassword'

function Profile() {
    const [screen, setScreen] = useState("password")

    return (
        <Admin title={"Profil"}>
            <div className="flex flex-col space-y-4 md:px-10 mx-auto w-full mb-20">
                {/* left */}
                <div className='border-2 md:w-72 max-w-full bg-gray-200 rounded-md'>
                    <div className='uppercase px-4 py-2'>
                        Ayarlar
                    </div>

                    <ul className='flex flex-col px-4 mt-5'>
                        {/* <li className='mb-5'>
                            <button className='flex space-x-2' onClick={() => setScreen("profile")}>
                                <Icon size={24} name="profile" />
                                <span>Profil</span>
                            </button>
                        </li> */}

                        <li className='mb-5'>
                            <button className='flex space-x-2' onClick={() => setScreen("password")}>
                                <Icon size={24} name="key" />
                                <span>Şifre Değiştir</span>
                            </button>
                        </li>

                    </ul>

                </div>

                {/* right */}
                <div className='border-2 flex-1 bg-gray-200 rounded-md pt-10'>
                    {screen === "password" && <ChangePassword />}
                </div>
            </div>
        </Admin>
    )
}

export default Profile
