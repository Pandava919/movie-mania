import React, { useState } from 'react'
import Button from './Button'
import { BiUpArrow } from 'react-icons/bi'
import { BiDownArrow } from 'react-icons/bi'

const Pagination = ({ results, currentPageNumber, setCurrentPageNumber }) => {
    const noOfPages = Math.ceil(results / 10);
    //! previous page hanlder
    const onPreviousPageHandler = () => noOfPages > 1 && currentPageNumber > 1 ? setCurrentPageNumber((prev) => prev - 1) : setCurrentPageNumber(1);
    //! next page handler
    const onNextPageHandler = () => currentPageNumber < noOfPages ? setCurrentPageNumber((prev) => prev + 1) : setCurrentPageNumber(noOfPages);
    return (
        <div className='w-10 flex flex-col items-center gap-3'>
            <div className='rounded-full p-1.5 flex items-center justify-center active:bg-red-900 border-white border-2'>
                <Button enter={<BiUpArrow />} onClickHandler={onPreviousPageHandler} title="Previous" />
            </div>
            <div>
                {currentPageNumber}
            </div>
            <div className='rounded-full p-1.5 flex items-center justify-center active:bg-red-900 border-white border-2 '>
                <Button enter={<BiDownArrow />} onClickHandler={onNextPageHandler} title="Next" />
            </div>
        </div>
    )
}

export default Pagination
