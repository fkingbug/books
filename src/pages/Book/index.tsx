import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, Container, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import {
  styleAuthor,
  styleBookInfo,
  styleBookItem,
  styleCategoryes,
  styleImg,
  styleMainInfo,
} from './Book.style'
import { RootObjectBookItem } from '../../@types/IBook'

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
            <Box sx={styleMainInfo}>
              <img style={styleImg} src={bookItem?.volumeInfo?.imageLinks?.thumbnail} />
              <Typography variant='h4'>{bookItem?.volumeInfo?.title}</Typography>
              <Typography sx={styleAuthor} variant='h5'>
                {bookItem.volumeInfo.authors}
              </Typography>
            </Box>
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
