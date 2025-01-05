import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch';
import axios from 'axios';
import Input from './Input';
import Button from './Button';
import { Link } from 'react-router-dom';
import Movie from './Movie';


const Omdb = () => {
  const [movie, setMovie] = useState("");
  const [movieName, setMovieName] = useState("don");
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(false);
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const apiUrl = import.meta.env.VITE_OMDB_API_URL;

  // const { apiData, loading } = useFetch(`${apiUrl}?s=${movieName}&apikey=${apiKey}`, movieName)
  // useEffect(() => {
  //   setMovies(apiData)
  // }, [apiData])

  const onChangeHandler = ({ target }) => {   //input change handler
    setMovie(target.value)
  }

  const onClickHandler = () => {    //Search button handler
    setMovieName(movie)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${apiUrl}?s=${movieName}&apikey=${apiKey}`)
        setMovies(data?.Search)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [movieName])
  console.log(movies);
  console.log(movieName);

  return (
    < section className='min-h-screen' >
      <nav className='bg-red-800 h-14 flex items-center justify-start w-screen' >
        <div className='ml-3 h-14 w-1/4 flex items-center justify-start'>
          <h1 className='text-white text-sm font-light sm:text-2xl md:text-4xl '>Movie Mania</h1>
        </div>
      </nav>
      <main className='min-h-screen flex  w-screen bg-black justify-center'>
        <section className='h-full w-full flex flex-col gap-5 items-center'>
          <div className='h-20 flex items-center justify-center gap-3 mt-10'>
            <Input type="text" placeholder="Enter a movie name" value={movie} onChangeHandler={onChangeHandler} />
            <Button enter="Search" onClickHandler={onClickHandler} />
          </div>
          <div className='h-full bg-black w-screen flex flex-wrap gap-9 justify-center items-center p-2'>
            {
              movies ? movies?.map(({ Poster, Title, Year, imdbID }) => {
                return (
                  <Link to={`/movie/${imdbID}`} key={imdbID}>
                    <Movie poster={Poster} title={Title} year={Year} />
                  </Link>
                )
              }) :
                <h1 className='text-white text-5xl font-light'> Movies not found</h1>
            }
          </div>
        </section>
      </main >
    </section >
  )
}

export default Omdb
