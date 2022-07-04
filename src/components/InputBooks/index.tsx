import React, { FC, KeyboardEvent } from 'react'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useController } from 'react-hook-form'
import { IForm } from '../../@types/IFrom'

interface InputBooksProps {
  name: keyof IForm
  onSubmit: () => void
}

const InputBooks: FC<InputBooksProps> = ({ name, onSubmit }) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
    defaultValue: '',
  })
  const handleClickEnter = (event: any) => {
    if (event.key === 'Enter') {
      console.log('enter press here! ')
      onSubmit()
    }
  }
  return (
    <TextField
      placeholder='Поиск книг'
      value={value}
      onChange={onChange}
      fullWidth
      onKeyPress={handleClickEnter}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton onClick={onSubmit}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
}
export default InputBooks
// endAdornment :  <InputAdornment position='end'> <SearchIcon onClick={onSubmit} />  </InputAdornment>
