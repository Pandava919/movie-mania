import React from 'react'

const Button = ({ onClickHandler, enter }) => {
    return (
        <div onClick={onClickHandler} className='cursor-pointer' >
            <span className='text-white text-center text-sm sm:text-lg'>{enter}</span>
        </div>
    )
}

export default Button
