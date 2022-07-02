import React, { ChangeEvent, useState } from 'react'
import { InputAdornment, styled, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { SearchInput } from './InputBooks.style'

const InputBooks = () => {
  const [search, setSearch] = useState('')
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)
  return (
    <SearchInput
      placeholder='Поиск книг'
      value={search}
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <SearchIcon onClick={() => console.log(search)} />
          </InputAdornment>
        ),
      }}
      variant='outlined'
    />
  )
}

export default InputBooks
