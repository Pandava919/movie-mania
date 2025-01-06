import React from 'react'

const Button = ({ onClickHandler, enter, title }) => {
    return (
        <div onClick={onClickHandler} className='cursor-pointer' >
            <span title={title} className='text-white text-center text-sm sm:text-lg'>{enter}</span>
        </div>
    )
}

export default Button
