import { Box, Button, CircularProgress, Container, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import FormBooks from '../../components/FormBooks'
import { RootState, useAppDispatch } from '../../redux/store'
import { fetchBooks } from '../../redux/books/asyncActions'
import BookItem from '../../components/BookItem'
import { ceraclBOx, styleLoadMoreBlock, styleLoadMoreBtn } from './Main.style'

const Main = () => {
  const { booksItems, totalItems, categories, q, sortBy } = useSelector(
    (state: RootState) => state.books
  )
  const dispatch = useAppDispatch()
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
        {totalItems > 0 && (
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
        )}
        {booksItems.length ? (
          <>
            <Grid container spacing={2}>
              {booksItems.map((bookItem, index) => (
                <Grid key={`${bookItem.id}__${index}`} item md={6} xs={12} lg={4} sm={6} xl={4}>
                  <BookItem {...bookItem} />
                </Grid>
              ))}
            </Grid>
            {totalItems !== booksItems.length && (
              <Box sx={styleLoadMoreBlock}>
                <Button variant='outlined' style={styleLoadMoreBtn} onClick={loadMore}>
                  Load more
                </Button>
              </Box>
            )}
          </>
        ) : (
          <Box sx={ceraclBOx}>
            <CircularProgress sx={{ width: 'auto' }} />
          </Box>
        )}
      </Container>
    </Box>
  )
}

export default Main
