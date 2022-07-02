import React from 'react'
import { selectPropItem } from '../../@types/SelectProps'
import InputBooks from '../InputBooks'
import SelectBooks from '../SelectBooks'

const categories: selectPropItem[] = [
  { value: 'all', label: 'all' },
  { value: 'art', label: 'art' },
  { value: 'biography', label: 'biography' },
  { value: 'computers', label: 'computers' },
  { value: 'history', label: 'history' },
  { value: 'medical', label: 'medical' },
  { value: 'poetr', label: 'poetr' },
]
const sort: selectPropItem[] = [
  { value: 'relevance', label: 'relevance' },
  { value: 'newest', label: 'newest' },
]

const FormBooks = () => {
  return (
    <div>
      <InputBooks />
      <SelectBooks selectItems={categories} />
      <SelectBooks selectItems={sort} />
    </div>
  )
}

export default FormBooks
