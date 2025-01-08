import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import Navbar from './Navbar';

const MovieDetails = () => {
    const { id } = useParams()
    console.log(id);
    const apiurl = import.meta.env.VITE_OMDB_API_URL;
    const apikey = import.meta.env.VITE_OMDB_API_KEY;
    const { apiData, loading } = useFetch(`${apiurl}?apikey=${apikey}&i=${id}`, id);

    return (
        <section className='min-h-screen w-screen bg-black'>
            <div>
                <Navbar logo='MovieMania' />
            </div>
            <section>

            </section>
        </section>
    )
}

export default MovieDetails
