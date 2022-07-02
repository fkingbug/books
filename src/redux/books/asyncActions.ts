import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootObject } from './types'

export const fetchBooks = createAsyncThunk<RootObject[], any>(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { order, sortBy, category, search, currentPage } = params
    const { data } = await axios.get<RootObject[]>(
      `https://613e3b5094dbd600172abb2c.mockapi.io/pizzas?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    )
    return data
  }
)
