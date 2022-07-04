import { Box, Container } from '@mui/material'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { IForm } from '../../@types/IFrom'
import { selectPropItem } from '../../@types/SelectProps'
import { fetchBooks } from '../../redux/books/asyncActions'
import { switchFormData } from '../../redux/books/slice'
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

const formStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
  flexDirection: 'column',
  margin: '15px auto 50px',
}

const styleSelect = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
}

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
        <form style={{ maxWidth: '700px' }}>
          <InputBooks onSubmit={onSubmit} name='q' />
          <Box sx={styleSelect}>
            <SelectBooks selectItems={categories} name='categories' />
            <SelectBooks selectItems={sort} name='sortBy' />
          </Box>
        </form>
      </Container>
    </FormProvider>
  )
}

export default FormBooks
