import React from 'react'
import { Controller, FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { IForm } from '../../@types/IFrom'
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
  // const { control, handleSubmit } = useForm<IForm>()
  const form = useForm<IForm>({
    defaultValues: {
      categories: 'all',
      sortBy: 'relevance',
    },
  })
  const { handleSubmit } = form
  const onSubmit = () => {
    handleSubmit((data) => {
      console.log(data)
    })()
  }

  return (
    <FormProvider {...form}>
      <form>
        <SelectBooks selectItems={categories} name='categories' />
        <SelectBooks selectItems={sort} name='sortBy' />
        <InputBooks onSubmit={onSubmit} name='q' />
      </form>
    </FormProvider>
  )
}

export default FormBooks
