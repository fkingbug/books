import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Book = () => {
  const { id } = useParams()
  useEffect(() => {
    async function fetchBook() {
      try {
        const { data } = await axios.get(
          `https://books.google.com/ebooks?id=${id}&key=AIzaSyA-49MrBRLDGQVaZCRyppObhHcVEhPdq_A`
        )
      } catch (error) {}
    }
  }, [])

  return <div>Book</div>
}

export default Book
