import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';

const MovieDetails = () => {
    const { id } = useParams()
    console.log(id);
    const apiurl = import.meta.env.VITE_OMDB_API_URL;
    const apikey = import.meta.env.VITE_OMDB_API_KEY;
    const { apiData, loading } = useFetch(`${apiurl}?apikey=${apikey}&i=${id}`)
    console.log(apiData);

    return (
        <div>

        </div>
    )
}

export default MovieDetails
