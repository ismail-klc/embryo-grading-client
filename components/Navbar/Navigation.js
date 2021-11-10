import React from 'react'
import { Icon } from '../Icons/Icons'

const Navigation = () => {
    return (
        <nav className="items-center gap-x-4 hidden lg:flex">
            <button onClick={() => window.history.back()} className="text-white w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70">
                <Icon size={22} name="prev" />
            </button>
            <button onClick={() => window.history.forward()} className="text-white w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70">
                <Icon size={22} name="next" />
            </button>
        </nav>
    )
}

export default Navigation
