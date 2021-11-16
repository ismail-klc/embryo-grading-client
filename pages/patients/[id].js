import React from 'react'
import Admin from '../../components/Layouts/Admin'

const PatientProfile = () => {
    return (
        <Admin>
            <div class="bg-gray-100">
                <div class="w-full mb-10 text-white bg-main-color">
                    <div
                        class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                        <div class="p-4 flex flex-row items-center justify-between">
                            <a href="#"
                                class="text-lg text-black font-semibold tracking-widest uppercase rounded-lg focus:outline-none focus:shadow-outline">
                                Hasta Detay</a>
                            <button class="md:hidden rounded-lg focus:outline-none focus:shadow-outline" >
                                <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                                    <path x-show="!open" fill-rule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                        clip-rule="evenodd"></path>
                                    <path x-show="open" fill-rule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="container mx-auto my-5 p-5">
                    <div class="md:flex no-wrap md:-mx-2 ">
                        <div class="w-full md:w-3/12 md:mx-2">
                            <div class="bg-white p-3 border-t-4 border-green-400">
                                <div class="image overflow-hidden">
                                    <img class="h-auto w-full mx-auto"
                                        src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=170667a&w=0&h=kEAA35Eaz8k8A3qAGkuY8OZxpfvn9653gDjQwDHZGPE="
                                        alt="" />
                                </div>
                                <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">Hasta 1</h1>
                                <h3 class="text-gray-600 font-lg text-semibold leading-6">hasta1@gmail.com</h3>
                                <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit.
                                    Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
                                <ul
                                    class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                    <li class="flex items-center py-3">
                                        <span>Durum</span>
                                        <span class="ml-auto"><span
                                            class="bg-green-500 py-1 px-2 rounded text-white text-sm">Aktif</span></span>
                                    </li>
                                    <li class="flex items-center py-3">
                                        <span>Eklenme Tarihi</span>
                                        <span class="ml-auto">Kasım 07, 2016</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="w-full md:w-9/12 mx-2 h-64">
                            <div class="bg-white p-3 shadow-sm rounded-sm">
                                <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                    <span clas="text-green-500">
                                        <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>
                                    <span class="tracking-wide">Hakkında</span>
                                </div>
                                <div class="text-gray-700">
                                    <div class="grid md:grid-cols-2 text-sm">
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">Ad</div>
                                            <div class="px-4 py-2">Jane</div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">Soyad</div>
                                            <div class="px-4 py-2">Doe</div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">Cinsiyet</div>
                                            <div class="px-4 py-2">Female</div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">İletişim No.</div>
                                            <div class="px-4 py-2">+11 998001001</div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">Current Address</div>
                                            <div class="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">Permanant Address</div>
                                            <div class="px-4 py-2">Arlington Heights, IL, Illinois</div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">Email</div>
                                            <div class="px-4 py-2">
                                                <a class="text-blue-800" href="mailto:jane@example.com">jane@example.com</a>
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">Doğum Tarihi</div>
                                            <div class="px-4 py-2">Şubat 06, 1994</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-x-4 flex">
                                    <button
                                        class="w-1/2 text-blue-800 bg-gray-200 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline
                                     focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                                        Yeni Kayıt Ekle</button>
                                    <button
                                        class="w-1/2 text-blue-800 bg-gray-200 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline
                                     focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                                        Kayıtları Gör</button>
                                </div>
                            </div>

                            <div class="my-4"></div>

                            {/* <div class="bg-white p-3 shadow-sm rounded-sm">

                                <div class="grid grid-cols-2">
                                    <div>
                                        <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                            <span clas="text-green-500">
                                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                            </span>
                                            <span class="tracking-wide">Experience</span>
                                        </div>
                                        <ul class="list-inside space-y-2">
                                            <li>
                                                <div class="text-teal-600">Owner at Her Company Inc.</div>
                                                <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                            </li>
                                            <li>
                                                <div class="text-teal-600">Owner at Her Company Inc.</div>
                                                <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                            </li>
                                            <li>
                                                <div class="text-teal-600">Owner at Her Company Inc.</div>
                                                <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                            </li>
                                            <li>
                                                <div class="text-teal-600">Owner at Her Company Inc.</div>
                                                <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                            <span clas="text-green-500">
                                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                                    <path fill="#fff"
                                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                                </svg>
                                            </span>
                                            <span class="tracking-wide">Education</span>
                                        </div>
                                        <ul class="list-inside space-y-2">
                                            <li>
                                                <div class="text-teal-600">Masters Degree in Oxford</div>
                                                <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                            </li>
                                            <li>
                                                <div class="text-teal-600">Bachelors Degreen in LPU</div>
                                                <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </Admin>
    )
}

export default PatientProfile
