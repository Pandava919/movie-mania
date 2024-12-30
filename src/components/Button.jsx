import React from 'react'

const Button = ({ onClickHandler, enter }) => {
    return (
        <div onClick={onClickHandler} className='cursor-pointer rounded-md p-1.5 px-3 flex items-center justify-center active:bg-red-900 bg-red-800 w-1/4 sm:w-20' >
            <span className='text-white text-center text-sm sm:text-lg'>{enter}</span>
        </div>
    )
}

export default Button
