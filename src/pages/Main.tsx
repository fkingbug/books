import { Box, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import FormBooks from '../components/FormBooks'
import { RootState, useAppDispatch } from '../redux/store'
import { fetchBooks } from '../redux/books/asyncActions'
import BookItem from '../components/BookItem'
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
      <Grid container spacing={2}>
        {booksItems &&
          booksItems.map((bookItem) => (
            <Grid item md={4}>
              <BookItem {...bookItem} />
            </Grid>
          ))}
      </Grid>
    </div>
  )
}

export default Main
