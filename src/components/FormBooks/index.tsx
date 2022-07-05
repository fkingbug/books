import React, { useCallback } from 'react'
import { Box, Container } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { ParamsProps } from '../../@types/ParamsProps'
import { SelectPropItem } from '../../@types/SelectProps'
import { fetchBooks } from '../../redux/books/asyncActions'
import { switchFormData } from '../../redux/books/slice'
import InputBooks from '../InputBooks'
import SelectsBooks from '../SelectsBooks'
import { RootState, useAppDispatch } from '../../redux/store'
import { useSelector } from 'react-redux'

import { formStyle, styleForm, styleSelect } from './FormBooks.style'

const categoriesSelect: SelectPropItem[] = [
  { value: 'all', label: 'all' },
  { value: 'art', label: 'art' },
  { value: 'biography', label: 'biography' },
  { value: 'computers', label: 'computers' },
  { value: 'history', label: 'history' },
  { value: 'medical', label: 'medical' },
  { value: 'poetr', label: 'poetr' },
]
const sortSelect: SelectPropItem[] = [
  { value: 'relevance', label: 'relevance' },
  { value: 'newest', label: 'newest' },
]

const FormBooks = () => {
  const dispatch = useAppDispatch()
  const { categories, sortBy, q } = useSelector((state: RootState) => state.books)
  const form = useForm<ParamsProps>({
    defaultValues: {
      categories,
      sortBy,
      q,
    },
  })
  const { handleSubmit } = form
  const onSubmit = useCallback(() => {
    handleSubmit((data) => {
      dispatch(switchFormData(data))
      dispatch(fetchBooks(data))
    })()
  }, [handleSubmit, dispatch, switchFormData, fetchBooks])

  return (
    <FormProvider {...form}>
      <Container maxWidth='xl' sx={formStyle}>
        <form style={styleForm}>
          <InputBooks onSubmit={onSubmit} name='q' />
          <Box sx={styleSelect}>
            <SelectsBooks selectItems={categoriesSelect} name='categories' helperName='Категории' />
            <SelectsBooks selectItems={sortSelect} name='sortBy' helperName='Сортировка' />
          </Box>
        </form>
      </Container>
    </FormProvider>
  )
}

export default FormBooks
