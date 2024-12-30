import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Omdb from './components/Omdb'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Omdb />
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
