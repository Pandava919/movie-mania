import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch';
import axios from 'axios';
import Input from './Input';
import Button from './Button';


const Omdb = () => {
  const [movie, setMovie] = useState("")
  const [movieName, setMovieName] = useState();
  const [movies, setMovies] = useState();
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const apiUrl = import.meta.env.VITE_OMDB_API_URL;


  // const { apiData, loading } = useFetch(`${apiUrl}?s=${movieName}&apikey=${apiKey}`, movieName)
  // useEffect(() => {
  //   setMovies(apiData)
  // }, [apiData])

  const onChangeHandler = ({ target }) => {
    setMovieName(target.value)
  }
  const onClickHandler = () => {
    console.log("enterd");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const { data } = await axios.get(`${apiUrl}?s=${movieName}&apikey=${apiKey}`)
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
    < section className='bg-black w-100% min-h-screen '>
      <nav className='bg-red-800 h-14 flex items-center justify-start' >
        <div className='ml-4 h-14 flex items-center justify-center'>
          <h1 className='text-white text-2xl sm:text-4xl'>Movie Mania</h1>
        </div>
      </nav>
      <main className='h-screen flex items-center w-screen bg-black'>
        <section className=' h-full flex items-center  w-screen'>
          <div className=' w-screen flex items-center justify-center gap-3'>
            <Input type="text" placeholder="Enter a movie name" value={movieName} onChangeHandler={onChangeHandler} />
            <Button enter="Search" onClickHandler={onClickHandler} />
          </div>
        </section>
      </main>
    </section >
  )
}

export default Omdb
