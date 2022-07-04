import axios from 'axios'
import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { RootObjectBookItem } from '../@types/IBook'

const styleBookItem = {
  display: 'flex',
}
const styleBookInfo = {
  flex: '1',
}
const styleAuthor = {
  fontSize: '1rem',
  fontWeight: '600',
  color: '#5e5e5ede',
  margin: ' 10px 0',
}
const styleCategoryes = {
  color: '#5e5e5ede',
  marginTop: ' 10px',
}
const Book = () => {
  const [bookItem, setBookItem] = useState<RootObjectBookItem | null>()
  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    async function fetchBook() {
      try {
        const { data } = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyA-49MrBRLDGQVaZCRyppObhHcVEhPdq_A`
        )

        setBookItem(data)
      } catch (error) {
        navigate('/')
      }
    }
    fetchBook()
  }, [])

  const desc = bookItem?.volumeInfo?.description
    ?.replaceAll('<p>', '')
    .replaceAll('</p>', '')
    .replaceAll('<i>', '')
    .replaceAll('</i>', '')
    .replaceAll('<li>', '')
    .replaceAll('</li>', '')
    .replaceAll('<ul>', '')
    .replaceAll('</ul>', '')

  // const img =
  //   bookItem.volumeInfo.imageLinks.thumbnail &
  //   'https://kbimages1-a.akamaihd.net/a9357860-a298-4ce0-b6ae-38104093abbc/353/569/90/False/harry-potter-and-the-philosopher-s-stone-3.jpg'

  return (
    <div>
      <Container maxWidth='xl'>
        {bookItem && (
          <Box sx={styleBookItem}>
            <img
              style={{ width: '350px', marginRight: ' 100px' }}
              src={bookItem?.volumeInfo?.imageLinks?.thumbnail}
            />
            <Box sx={styleBookInfo}>
              <Typography variant='h4'>{bookItem?.volumeInfo?.title}</Typography>
              <Typography sx={styleAuthor} variant='h5'>
                {bookItem.volumeInfo.authors}
              </Typography>
              <Typography variant='body1'>{desc}</Typography>
              <Typography sx={styleCategoryes} variant='body1'>
                {bookItem?.volumeInfo?.categories}
              </Typography>
            </Box>
          </Box>
        )}
      </Container>
    </div>
  )
}

export default Book
