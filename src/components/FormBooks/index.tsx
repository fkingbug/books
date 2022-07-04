import React from 'react'
import { Box, Container } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { IForm } from '../../@types/IFrom'
import { selectPropItem } from '../../@types/SelectProps'
import { fetchBooks } from '../../redux/books/asyncActions'
import { switchFormData } from '../../redux/books/slice'
import InputBooks from '../InputBooks'
import SelectsBooks from '../SelectsBooks'
import { formStyle, styleForm, styleSelect } from './FormBooks.style'
import { RootState, useAppDispatch } from '../../redux/store'
import { useSelector } from 'react-redux'

const categoriesSelect: selectPropItem[] = [
  { value: 'all', label: 'all' },
  { value: 'art', label: 'art' },
  { value: 'biography', label: 'biography' },
  { value: 'computers', label: 'computers' },
  { value: 'history', label: 'history' },
  { value: 'medical', label: 'medical' },
  { value: 'poetr', label: 'poetr' },
]
const sortSelect: selectPropItem[] = [
  { value: 'relevance', label: 'relevance' },
  { value: 'newest', label: 'newest' },
]

const FormBooks = () => {
  const dispatch = useAppDispatch()
  const { categories, sortBy, q } = useSelector((state: RootState) => state.books)
  const form = useForm<IForm>({
    defaultValues: {
      categories,
      sortBy,
      q,
    },
  })
  const { handleSubmit } = form
  const onSubmit = () => {
    handleSubmit((data) => {
      dispatch(switchFormData(data))
      dispatch(fetchBooks(data))
    })()
  }

  return (
    <FormProvider {...form}>
      <Container maxWidth='xl' sx={formStyle}>
        <form style={styleForm}>
          <InputBooks onSubmit={onSubmit} name='q' />
          <Box sx={styleSelect}>
            <SelectsBooks selectItems={categoriesSelect} name='categories' helpername='Категории' />
            <SelectsBooks selectItems={sortSelect} name='sortBy' helpername='Сортировка' />
          </Box>
        </form>
      </Container>
    </FormProvider>
  )
}

export default FormBooks
