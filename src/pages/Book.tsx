import axios from 'axios'
import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { RootObjectBookItem } from '../@types/IBook'

const styleBookItem = {
  display: 'flex',
  '@media(max-width: 900px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },
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
const styleImg = {
  width: '328px',
  height: '400px',
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

  return (
    <div>
      <Container maxWidth='xl'>
        {bookItem && (
          <Box sx={styleBookItem}>
            <img style={styleImg} src={bookItem?.volumeInfo?.imageLinks?.thumbnail} />
            <Typography variant='h4'>{bookItem?.volumeInfo?.title}</Typography>
            <Typography sx={styleAuthor} variant='h5'>
              {bookItem.volumeInfo.authors}
            </Typography>
            <Box sx={styleBookInfo}>
              <Typography variant='body1'>{bookItem?.volumeInfo?.description}</Typography>
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
