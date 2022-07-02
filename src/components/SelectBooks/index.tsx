import React, { FC, useState } from 'react'
import { SelectProps } from '../../@types/SelectProps'

import CustomSelect from './CustomSelect'
import { StyledOption } from './CustomSelect.style'

const SelectBooks: FC<SelectProps> = ({ selectItems }) => {
  const [value, setValue] = useState(selectItems[0].value)
  return (
    //@ts-ignore
    <CustomSelect value={value} onChange={setValue}>
      {selectItems.map((items) => (
        <StyledOption value={items.value}>{items.label}</StyledOption>
      ))}
    </CustomSelect>
  )
}

export default SelectBooks
