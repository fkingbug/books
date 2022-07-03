import React, { FC } from 'react'
import { InputAdornment, TextField } from '@mui/material'
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
  return (
    <TextField
      placeholder='Поиск книг'
      value={value}
      onChange={onChange}
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <SearchIcon onClick={onSubmit} />
          </InputAdornment>
        ),
      }}
    />
  )
}
export default InputBooks
// endAdornment :  <InputAdornment position='end'> <SearchIcon onClick={onSubmit} />  </InputAdornment>
