import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import FormBooks from '../components/FormBooks'
import { RootState, useAppDispatch } from '../redux/store'
import { fetchBooks } from '../redux/books/asyncActions'
//booksItems
const Main = () => {
  const { booksItems } = useSelector((state: RootState) => state.books)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(
      fetchBooks({
        categories: 'all',
        q: '',
        sortBy: 'relevance',
      })
    )
  }, [])

  return (
    <div className='qwe'>
      <FormBooks />
      <Box>{booksItems && booksItems.map((e) => <div>{e.id}</div>)}</Box>
    </div>
  )
}

export default Main
