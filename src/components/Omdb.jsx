import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch';
import axios from 'axios';
import Input from './Input';
import Button from './Button';
import { Link } from 'react-router-dom';
import Movie from './Movie';
import Pagination from './Pagination';
import Navbar from './Navbar';
import Loading from './Loading/Loading';


const Omdb = () => {
  const [movie, setMovie] = useState("");
  const [movieName, setMovieName] = useState("don");
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(false);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const apiUrl = import.meta.env.VITE_OMDB_API_URL;

  // const { apiData, loading } = useFetch(`${apiUrl}?s=${movieName}&apikey=${apiKey}`, movieName)
  // useEffect(() => {
  //   setMovies(apiData)
  // }, [apiData])
  //! onchange handler
  const onChangeHandler = ({ target }) => {   //input change handler
    setMovie(target.value)
  }
  //! oncliclick handler
  const onEnterHandler = (e) => {
    if (e.key === "Enter") {
      setMovieName(movie);
      setCurrentPageNumber(1);
    }
  }
  //! onclick handler
  const onClickHandler = () => {    //Search button handler
    movie ? setMovieName(movie) : alert("Enter a movie name")
    setCurrentPageNumber(1)
  }
  //! Fetching the api
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get(`${apiUrl}?s=${movieName}&apikey=${apiKey}&page=${currentPageNumber}`)
        setMovies(data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.log(error);
      }
    }
    fetchData()
  }, [movieName, currentPageNumber])

  return (
    < section className='min-h-screen w-screen bg-black' >
      <div >
        <Navbar logo='MovieMania' />
      </div>
      <main className='min-h-full flex w-full bg-black justify-center -z-0'>
        <section className='h-full w-screen flex flex-col pl-3 gap-5 items-center'>
          <div className='h-20 w-full flex items-center justify-center gap-3 mt-16'>
            <Input type="text" placeholder="Enter a movie name" value={movie} onChangeHandler={onChangeHandler} onEnterHandler={onEnterHandler} />
            <div className='rounded-md text-white text-sm sm:text-lg p-1.5 px-3 flex items-center justify-center active:bg-red-900 bg-red-800 w-1/4 sm:w-20'>
              <Button enter="Search" onClickHandler={onClickHandler} />
            </div>
          </div>
          <section className=' min-h-screen w-full flex bg-black justify-start items-start '>
            <div className='w-full h-full flex justify-center items-center flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-col'>
              {loading ? <div className=' h-full w-full flex items-center justify-center text-white'>
                <Loading />
              </div> :
                <div className='h-full w-full bg-black flex flex-wrap gap-12 justify-center items-center pt-8'>
                  {
                    movies?.Search ? movies?.Search?.map(({ Poster, Title, Year, imdbID }) => {
                      return (
                        <Link to={`/movie/${imdbID}`} key={imdbID}>
                          <Movie poster={Poster} title={Title} year={Year} />
                        </Link>
                      )
                    }) :
                      <span className='text-white text-5xl font-light'> Movies not found</span>
                  }
                </div>}
              {movies?.Search && !loading &&
                <div className='text-white h-full right-0'>
                  <Pagination results={movies?.totalResults} currentPageNumber={currentPageNumber} setCurrentPageNumber={setCurrentPageNumber} />
                </div>}
            </div>
          </section>
        </section>
      </main >
    </section >
  )
}

export default Omdb
