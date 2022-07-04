import { Container, CssBaseline } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Book from './pages/Book'
import Main from './pages/Main'

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/:id' element={<Book />} />
      </Routes>
    </div>
  )
}

export default App
