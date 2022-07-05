import { FormControl, FormHelperText, MenuItem, Select } from '@mui/material'
import React, { FC } from 'react'
import { useController } from 'react-hook-form'
import { SelectProps } from '../../@types/SelectProps'
import { styleTest } from './SelectsBooks.style'

const SelectsBooks: FC<SelectProps> = ({ selectItems, name, helperName }) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
  })

  return (
    <FormControl sx={styleTest}>
      <Select value={value} onChange={onChange} displayEmpty>
        {selectItems.map((items, index) => (
          <MenuItem key={index} value={items.value}>
            {items.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{helperName}</FormHelperText>
    </FormControl>
  )
}

export default SelectsBooks
