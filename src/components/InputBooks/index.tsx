import React, { ChangeEvent, FC, useState } from 'react'
import { InputAdornment, styled, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { SearchInput } from './InputBooks.style'
import { Control, useController, useFormContext } from 'react-hook-form'
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
    <SearchInput
      placeholder='Поиск книг'
      value={value}
      onChange={onChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <SearchIcon onClick={onSubmit} />
          </InputAdornment>
        ),
      }}
      variant='outlined'
    />
  )
}

export default InputBooks
