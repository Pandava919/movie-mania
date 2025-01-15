import React from 'react'

const Navbar = ({logo}) => {
    return (
        <>
            <nav className='bg-red-800 h-14 flex items-center justify-start w-full fixed' >
                <div className='ml-3 h-14 w-1/4 flex items-center justify-start'>
                    <h1 className='text-white text-sm font-light sm:text-2xl md:text-4xl '>{logo}</h1>
                </div>
            </nav>
        </>


    )
}

export default Navbar
