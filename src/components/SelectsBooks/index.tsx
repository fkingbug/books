import { FormControl, FormHelperText, MenuItem, Select } from '@mui/material'
import React, { FC } from 'react'
import { useController } from 'react-hook-form'
import { SelectProps } from '../../@types/SelectProps'

const styleTest = {
  margin: '8px 0',
  width: ' 300px',
  '@media(max-width: 680px)': {
    width: '100% !important',
  },
}

const SelectsBooks: FC<SelectProps> = ({ selectItems, name, helpername }) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
  })

  return (
    <FormControl sx={styleTest}>
      <Select
        value={value}
        onChange={onChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        {selectItems.map((items, index) => (
          <MenuItem key={index} value={items.value}>
            {items.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{helpername}</FormHelperText>
    </FormControl>
  )
}

export default SelectsBooks
