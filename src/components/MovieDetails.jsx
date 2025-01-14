import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import Navbar from './Navbar';

const MovieDetails = () => {
    const { id } = useParams()
    const [movie,setMovie] = useState();
    const apiurl = import.meta.env.VITE_OMDB_API_URL;
    const apikey = import.meta.env.VITE_OMDB_API_KEY;
    const { apiData, loading } = useFetch(`${apiurl}?apikey=${apikey}&i=${id}`, id);
    useEffect(()=>{
        setMovie(apiData);
    },[apiData])
    console.log(movie);
    
    

    return (
        <section className='min-h-screen w-screen bg-black'>
            <div>
                <Navbar logo='MovieMania' />
            </div>
            <section className='w-screen h-full bg-black'>
                <div>
                    <div>
                        
                    </div>
                </div>
                <div>

                </div>
            </section>
        </section>
    )
}

export default MovieDetails
