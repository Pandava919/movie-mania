import React from 'react'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick'

const Movie = ({ poster, title, year }) => {

    return (
        <div className=' h-60 sm:h-60 hover:translate-y-2 duration-300 w-60 flex flex-col items-center rounded-lg bg-red-700 '>
            <img src={poster !== 'N/A' ? poster : "https://imgs.search.brave.com/QrrF8yctvnxGKn5UBvuEt1XL7Pv04zXmzQ0y50RN5cY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzkxLzIyLzU5/LzM2MF9GXzc5MTIy/NTkyN19jYVJQUEg5/OUQ2RDFpRm9ua0NS/bUNHemtKUGYzNlFE/dy5qcGc"} className='h-40 w-48 m-2 rounded-md' />
            <h2 className='w-48 text-ellipsis flex items-center justify-center'> <span className='text-white truncate text-sm font-light'>{title}</span></h2>
            <h4 className='text-white font-light'>{year}</h4>
        </div>
    )
}

export default React.memo(Movie)
