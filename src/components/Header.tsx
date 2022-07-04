import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import FormBooks from './FormBooks'

const styleLogo = {
  fontSize: '2.1rem',
  color: 'black',
  fontWeight: '800',
  textDecoration: 'none',
}
const styleHeader = {
  display: 'flex',
  justifyContent: 'center',
  padding: '10px 0 0 ',
}

const Header = () => {
  return (
    <Box sx={styleHeader}>
      <Link style={styleLogo} to='/'>
        REACTBOOKS
      </Link>
    </Box>
  )
}

export default Header
//https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyA-49MrBRLDGQVaZCRyppObhHcVEhPdq_A
