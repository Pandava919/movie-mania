import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Omdb from './components/Omdb'
import MovieDetails from './components/MovieDetails'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Omdb />} />
          <Route path='/movies' element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
