import React from 'react'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { styleHeader, styleLogo } from './Header.style'

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
