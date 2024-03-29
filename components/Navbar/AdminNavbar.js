import React from "react";
import UserDropdown from "../Dropdown/UserDropdown";
import Navigation from "./Navigation";

export default function Navbar() {
    return (
        <>
            {/* Navbar */}
            <nav className="absolute top-0 left-0 w-full z-10 md:bg-blue-900 md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
                <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 ">
                    <Navigation />
                    {/* Form */}
                    <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
                        <div className="relative flex w-full flex-wrap items-stretch">
                            <span className="z-10 h-full leading-snug font-normal  text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                                <i className="fas fa-search"></i>
                            </span>
                            <input
                                type="text"
                                placeholder="Search here..."
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-6"
                            />
                        </div>
                    </form>
                    {/* User */}
                    <div className="flex-col md:flex-row list-none items-center hidden md:flex">
                        <UserDropdown />
                    </div>
                </div>
            </nav>
            {/* End Navbar */}
        </>
    );
}
