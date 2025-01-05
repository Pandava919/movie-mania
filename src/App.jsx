import React from 'react'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import Omdb from './components/Omdb'
import MovieDetails from './components/MovieDetails'

const App = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Omdb />} />
          <Route path='/movie/:id' element={<MovieDetails />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
