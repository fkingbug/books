import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React, { FC } from 'react'
import { Item } from '../../redux/books/types'

const styleimg = {
  boxShadow: '1px 3px 1px -1px rgb(0 0 0 / 20%)',
}

const BookItem: FC<Item> = (bookItem) => {
  console.log(`${bookItem.volumeInfo.title}__${bookItem?.volumeInfo?.categories}`)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component='img'
        height='400'
        image={bookItem.volumeInfo.imageLinks?.thumbnail}
        sx={styleimg}
      />
      <CardContent>
        <Typography variant='h5' component='div'>
          {bookItem.volumeInfo.title}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant='h5' component='div'>
          {bookItem?.volumeInfo?.categories}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default BookItem

{
  /* <img src= />
      <p></p>
       */
}

// Найденные книги отображаются карточками, каждая из которых состоит
//  из изображения обложки книги, названия книги, названия категории и
//  имен авторов. Если для книги приходит несколько категорий, то отображается
//   только первая. Авторы отображаются все. Если не приходит какой-либо части
//    данных, то вместо нее просто пустое место.
