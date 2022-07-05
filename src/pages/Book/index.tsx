import React, { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { Box, Container, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import {
  styleAuthor,
  styleBookInfo,
  styleBookItem,
  styleCategories,
  styleImg,
  styleMainInfo,
} from './Book.style'
import { RootObjectBookItem } from '../../@types/IBook'

const Book = () => {
  const [bookItem, setBookItem] = useState<RootObjectBookItem | null>(null)
  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get<RootObjectBookItem>(
        `https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyA-49MrBRLDGQVaZCRyppObhHcVEhPdq_A`
      )
      .then((response: AxiosResponse<RootObjectBookItem>) => {
        setBookItem(response.data)
      })
      .catch(() => {
        navigate('/')
      })
  }, [setBookItem, navigate])

  return (
    <Box>
      <Container maxWidth='xl'>
        {bookItem && (
          <Box sx={styleBookItem}>
            <Box sx={styleMainInfo}>
              <img
                style={styleImg}
                src={bookItem?.volumeInfo?.imageLinks?.thumbnail}
                alt={bookItem?.volumeInfo?.title}
              />
              <Typography variant='h4'>{bookItem?.volumeInfo?.title}</Typography>
              <Typography sx={styleAuthor} variant='h5'>
                {bookItem?.volumeInfo.authors}
              </Typography>
            </Box>
            <Box sx={styleBookInfo}>
              <Typography variant='body1'>{bookItem?.volumeInfo?.description}</Typography>
              <Typography sx={styleCategories} variant='body1'>
                {bookItem?.volumeInfo?.categories}
              </Typography>
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  )
}

export default Book
