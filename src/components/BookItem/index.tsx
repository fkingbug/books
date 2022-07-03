import React, { FC } from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Item } from '../../redux/books/types'
import { Link } from 'react-router-dom'

const styleimg = {
  boxShadow: '1px 3px 1px -1px rgb(0 0 0 / 20%)',
}

const stylename = {
  marginTop: '10px',
  fontSize: '25px',
  fontWeight: '500',
}
const styleCategory = {
  fontSize: ' 20px',
  fontWeight: '600',
  marginTop: '15px',
}
const styleAuthor = {
  fontSize: '13px',
  fontWeight: '700',
  color: 'grey',
  marginTop: '15px',
}
const BookItem: FC<Item> = (bookItem) => {
  return (
    <Link style={{ textDecoration: 'none' }} to={`/${bookItem.id}`}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component='img'
          height='400'
          image={bookItem.volumeInfo.imageLinks?.thumbnail}
          sx={styleimg}
        />
        <CardContent>
          <Typography sx={stylename} variant='body1'>
            {bookItem.volumeInfo.title}
          </Typography>
          <Typography sx={styleCategory} variant='body1'>
            {bookItem?.volumeInfo?.categories}
          </Typography>
          <Typography sx={styleAuthor} variant='body1'>
            {bookItem?.volumeInfo?.authors}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}

export default BookItem

{
  /* <img src= />
      <p></p>
       */
}
