import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import Navbar from './Navbar';
import notFound from '../assets/no_image.jpg';
import Button from './Button';
import Loading from './Loading/Loading';


const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState();
    const [readMore, setReadMore] = useState(false);
    const apiurl = import.meta.env.VITE_OMDB_API_URL;
    const apikey = import.meta.env.VITE_OMDB_API_KEY;
    const { apiData, loading } = useFetch(`${apiurl}?apikey=${apikey}&i=${id}`, id);
    useEffect(() => {
        setMovie(apiData);
    }, [apiData]);
    console.log(movie);

    return (
        <section className='min-h-screen w-screen bg-black'>
            <div>
                <Navbar logo='MovieMania' />
            </div>
            <section className='w-screen h-screen bg-black flex justify-center items-center'>
                {movie ?
                    <div className='bg-orange-100 w-full6 h-full flex justify-between p-3 items-center gap-3 rounded-md flex-col m-6 sm:flex-col sm:h-full sm:w-full md:flex-row md:h-4/6 md:w-3/6'>
                        <div className='w-2/4 h-full  border-black flex flex-col justify-center items-center'>
                            <div className='w-full h-full flex flex-col gap-5 justify-center items-center p-2'>
                                <img src={movie?.Poster !== 'N/A' ? movie?.Poster : notFound} className=' h-5/6 w-full rounded-md' />
                                <span className='font-semibold text-2xl'>{movie?.Title}</span>
                            </div>
                        </div>
                        <hr className=' h-0 sm:h-0 md:h-full border-black border-l' />
                        <div className='h-full w-2/4 flex flex-col justify-start items-start gap-1'>
                            <div className='w-full flex gap-4 justify-start items-start'>
                                <span className='w-1/4'>Director: </span>
                                <span className='font-light w-3/4 text-black overflow-ellipsis'>{movie?.Director}</span>
                            </div>
                            <div className='w-full flex gap-4 justify-start items-start'>
                                <span className='w-1/4'>Actors: </span>
                                <span className='font-light w-3/4 text-black overflow-ellipsis'>{movie?.Actors}</span>
                            </div>
                            <div className='w-full flex gap-4 justify-start items-start'>
                                <span className='w-1/4'>Release: </span>
                                <span className=' w-3/4 font-light  text-black overflow-ellipsis'>{movie?.Released}</span>
                            </div>
                            <div className='w-full flex gap-4 justify-start items-start'>
                                <span className='w-1/4'>Language: </span>
                                <span className=' w-3/4 font-light  text-black overflow-ellipsis'>{movie?.Language}</span>
                            </div>
                            <div className='w-full flex gap-4 justify-start items-start'>
                                <span className='w-1/4'>Description: </span>
                                <span className=' w-3/4  font-light  text-black overflow-ellipsis'>{readMore ? movie?.Plot : movie?.Plot?.slice(0, 28) + '...'} <span className='text-blue-700 text-xs '><Button enter={readMore ? "Read Less" : "Read More"} onClickHandler={() => setReadMore(!readMore)} /></span></span>
                            </div>
                        </div>
                    </div> :
                    <div><Loading /></div>}
            </section>
        </section>
    )
}

export default MovieDetails
