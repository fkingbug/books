import React, { FC, useState } from 'react'

import CustomSelect from './CustomSelect'
import { StyledOption } from './CustomSelect.style'
import { SelectProps } from '../../@types/SelectProps'
import { useController } from 'react-hook-form'

const SelectBooks: FC<SelectProps> = ({ selectItems, name }) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
  })

  // const sadsad = () => {
  //   onChange()
  //   onSubmit()
  // }

  return (
    <CustomSelect value={value} onChange={onChange}>
      {selectItems.map((items, index) => (
        <StyledOption key={index} value={items.value}>
          {items.label}
        </StyledOption>
      ))}
    </CustomSelect>
  )
}

export default SelectBooks
