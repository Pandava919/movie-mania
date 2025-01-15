import React from 'react'

const Button = ({ onClickHandler, enter, title }) => {
    return (
        <div onClick={onClickHandler} className='cursor-pointer' >
            <span title={title} className='text-center'>{enter}</span>
        </div>
    )
}

export default Button
