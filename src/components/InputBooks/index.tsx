import React, { FC, useCallback } from 'react'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useController } from 'react-hook-form'
import { ParamsProps } from '../../@types/ParamsProps'

interface InputBooksProps {
  name: keyof ParamsProps
  onSubmit: () => void
}

const InputBooks: FC<InputBooksProps> = ({ name, onSubmit }) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
  })
  const handleClickEnter = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        onSubmit()
      }
    },
    [onSubmit]
  )
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
