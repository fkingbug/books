import { Box, Container } from '@mui/material'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { IForm } from '../../@types/IFrom'
import { selectPropItem } from '../../@types/SelectProps'
import { fetchBooks } from '../../redux/books/asyncActions'
import { switchFormData } from '../../redux/books/slice'
import InputBooks from '../InputBooks'
import SelectsBooks from '../SelectsBooks'
import { formStyle, styleForm, styleSelect } from './FormBooks.style'

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
  const dispatch = useDispatch()
  const form = useForm<IForm>({
    defaultValues: {
      categories: 'all',
      sortBy: 'relevance',
      q: '',
    },
  })
  const { handleSubmit } = form
  const onSubmit = () => {
    handleSubmit((data) => {
      dispatch(switchFormData(data))
      //@ts-ignore
      dispatch(fetchBooks(data))
    })()
  }

  return (
    <FormProvider {...form}>
      <Container maxWidth='xl' sx={formStyle}>
        <form style={styleForm}>
          <InputBooks onSubmit={onSubmit} name='q' />
          <Box sx={styleSelect}>
            <SelectsBooks selectItems={categories} name='categories' helpername='Категории' />
            <SelectsBooks selectItems={sort} name='sortBy' helpername='Сортировка' />
          </Box>
        </form>
      </Container>
    </FormProvider>
  )
}

export default FormBooks
