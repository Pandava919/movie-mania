import React from 'react';
import notFound from '../assets/no_image.jpg';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick'

const Movie = ({ poster, title, year }) => {

    return (
        <div className=' h-60 sm:h-60 hover:-translate-y-2 duration-300 w-60 flex flex-col items-center rounded-lg bg-red-700 '>
            <img src={poster !== 'N/A' ? poster : notFound} className='h-40 w-48 m-2 rounded-md' />
            <h2 className='w-48 text-ellipsis flex items-center justify-center'> <span className='text-white truncate text-sm font-light'>{title}</span></h2>
            <h4 className='text-white font-light'>{year}</h4>
        </div>
    )
}

export default React.memo(Movie)
