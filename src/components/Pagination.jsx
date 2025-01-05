import React, { useState } from 'react'
import Button from './Button'
import { BiUpArrow } from 'react-icons/bi'
import { BiDownArrow } from 'react-icons/bi'

const Pagination = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const noOfPages = 0;

    return (
        <div className='w-10 flex flex-col items-center gap-3'>
            <div className='rounded-full p-1.5 flex items-center justify-center active:bg-red-900 border-white border-2'>
                <Button enter={<BiUpArrow />} />
            </div>
            <div>
                {pageNumber}
            </div>
            <div className='rounded-full p-1.5 flex items-center justify-center active:bg-red-900 border-white border-2 '>
                <Button enter={<BiDownArrow />} />
            </div>
        </div>
    )
}

export default Pagination
