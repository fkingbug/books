import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { ParamsProps } from '../../@types/ParamsProps'
import { RootObject } from './types'

export const fetchBooks = createAsyncThunk<RootObject, ParamsProps>(
  'books/fetchBooksStatus',
  async ({ categories, q, sortBy, itemsLength }) => {
    const categoriesNew = categories !== 'all' ? categories : ''
    itemsLength = itemsLength ? itemsLength - 1 : 0
    const { data } = await axios.get<RootObject>(
      `https://www.googleapis.com/books/v1/volumes?q=${q}+subject:${categoriesNew}&startIndex=${itemsLength}&orderBy=${sortBy}&maxResults=30&key=AIzaSyA-49MrBRLDGQVaZCRyppObhHcVEhPdq_A`
    )
    return data
  }
)
