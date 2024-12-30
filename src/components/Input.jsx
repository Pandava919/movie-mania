import React from 'react'

const Input = ({ type, value, placeholder, onChangeHandler }) => {
    return (
        <>
            <input type={type} value={value} placeholder={placeholder} onChange={onChangeHandler} className='p-1 border-none outline-none rounded-sm w-3/4 sm:w-60 px-2 py-1.5' />
        </>
    )
}

export default Input
