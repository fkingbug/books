import React, { FC } from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Item } from '../../redux/books/types'
import { Link } from 'react-router-dom'
import { styleAuthor, styleCategory, styleimg, styleLink, stylename } from './BookItem.style'

const BookItem: FC<Item> = (bookItem) => {
  return (
    <Link style={styleLink} to={`/${bookItem.id}`}>
      <Card sx={{ maxWidth: 320 }}>
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
