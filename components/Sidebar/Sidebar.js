import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Icon } from "../Icons/Icons";

export default function Sidebar() {
    const [collapseShow, setCollapseShow] = React.useState("hidden");
    const router = useRouter();

    return (
        <>
            <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-gray-200 flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
                <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                    {/* Toggler */}
                    <button
                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                        type="button"
                        onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
                    >
                        <Icon size={22} name="menu" />
                    </button>
                    {/* Brand */}
                    <Link href="/">
                        <a
                            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                        >
                            Embriyo Sınıflandırma <br /> Desktek Sistemi
                        </a>
                    </Link>
                    {/* User */}
                    <ul className="md:hidden items-center flex flex-wrap list-none">
                        <li className="inline-block relative">
                        </li>
                        <li className="inline-block relative">
                        </li>
                    </ul>
                    {/* Collapse */}
                    <div
                        className={
                            "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
                            collapseShow
                        }
                    >
                        {/* Collapse header */}
                        <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
                            <div className="flex flex-wrap">
                                <div className="w-6/12">
                                    <Link href="/">
                                        <a
                                            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                                        >
                                            Embriyo Sınıflandırma <br /> Desktek Sistemi
                                        </a>
                                    </Link>
                                </div>
                                <div className="w-6/12 flex justify-end">
                                    <button
                                        type="button"
                                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                                        onClick={() => setCollapseShow("hidden")}
                                    >
                                        X
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Form */}
                        <form className="mt-6 mb-4 md:hidden">
                            <div className="mb-3 pt-0">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="border-0 px-3 py-2 h-12 border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                                />
                            </div>
                        </form>

                        {/* Divider */}
                        <hr className="my-4 md:min-w-full" />
                        {/* Navigation */}

                        <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                            <li>
                                <Link href="/">
                                    <a
                                        className={
                                            "h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-gray-500 px-4 uppercase " +
                                            (router.pathname == "/"
                                                && "bg-gray-700 text-white hover:text-gray-200")
                                        }
                                    >
                                        Anasayfa
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/demo">
                                    <a
                                        className={
                                            "h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-gray-500 px-4 uppercase " +
                                            (router.pathname == "/demo"
                                                && "bg-gray-700 text-white hover:text-gray-200")
                                        }
                                    >
                                        Demo
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/patients">
                                    <a
                                        className={
                                            "h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-gray-500 px-4 uppercase " +
                                            (router.pathname == "/patients"
                                                && "bg-gray-700 text-white hover:text-gray-200")
                                        }
                                    >
                                        Hastalar
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/patients/add">
                                    <a
                                        className={
                                            "h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-gray-500 px-4 uppercase " +
                                            (router.pathname == "/patients/add"
                                                && "bg-gray-700 text-white hover:text-gray-200")
                                        }
                                    >
                                        Hasta Ekle
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
