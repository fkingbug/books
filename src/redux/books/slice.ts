import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ParamsProps } from '../../@types/ParamsProps'
import { fetchBooks } from './asyncActions'
import { Item } from './types'

export interface StateBook {
  booksItems: Item[]
  totalItems: number
  categories: string
  q: string
  sortBy: string
}

const initialState: StateBook = {
  booksItems: [],
  totalItems: 0,
  categories: 'all',
  q: '',
  sortBy: 'relevance',
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    switchFormData(state, action: PayloadAction<ParamsProps>) {
      state.categories = action.payload.categories
      state.sortBy = action.payload.sortBy
      state.q = action.payload.q
      state.booksItems = []
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {})
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.totalItems = action.payload.totalItems
      state.booksItems = [...state.booksItems, ...action.payload.items]
    })
    builder.addCase(fetchBooks.rejected, (state) => {})
  },
})
export const { switchFormData } = booksSlice.actions
export default booksSlice.reducer
