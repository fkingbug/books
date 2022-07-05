import React, { ReactElement } from 'react'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { styleHeader, styleLogo } from './Header.style'

const Header = (): ReactElement => {
  return (
    <Box sx={styleHeader}>
      <Link style={styleLogo} to='/'>
        REACTBOOKS
      </Link>
    </Box>
  )
}

export default Header
