import React from 'react'

const Errors = ({msg}) => {
    return (
        <div className="mt-4 justify-center items-center">
            {
                msg.map((err, index) => (
                    <div className="bg-red-400 px-2 py-2" key={index}>{err}</div>
                ))
            }
        </div>
    )
}

export default Errors
