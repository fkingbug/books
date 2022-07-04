import { Box, CircularProgress, Container, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import FormBooks from '../components/FormBooks'
import { RootState, useAppDispatch } from '../redux/store'
import { fetchBooks } from '../redux/books/asyncActions'
import BookItem from '../components/BookItem'
//booksItems

const ceraclBOx = {
  display: 'flex',
  justifyContent: 'center',
}
const Main = () => {
  const { booksItems, status, totalItems, categories, q, sortBy } = useSelector(
    (state: RootState) => state.books
  )
  const dispatch = useAppDispatch()
  console.log(booksItems.length)
  const loadMore = () => {
    dispatch(
      fetchBooks({
        categories,
        q,
        sortBy,
        itemsLength: booksItems.length,
      })
    )
  }
  useEffect(() => {
    if (!booksItems.length) {
      loadMore()
    }
  }, [])

  return (
    <Box>
      <FormBooks />
      <Container maxWidth='xl'>
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: '20px',
            marginBottom: '30px',
            fontWeight: '700',
          }}
        >
          Найдено Книг : {totalItems}
        </Typography>
        <Grid container spacing={3}>
          {booksItems.map((bookItem) => (
            <Grid item md={4}>
              <BookItem {...bookItem} />
            </Grid>
          ))}
        </Grid>
        {totalItems !== booksItems.length ? <p onClick={loadMore}>ЕЩЕ</p> : true}

        {/* <Box sx={ceraclBOx}>
            <CircularProgress sx={{ width: 'auto' }} />
          </Box> */}
      </Container>
    </Box>
  )
}

export default Main
