import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IForm } from '../../@types/IFrom'
import { fetchBooks } from './asyncActions'
import { Status, Item } from './types'

export interface StateBook {
  booksItems: Item[]
  totalItems: number
  status: string
  categories: string
  q: string
  sortBy: string
}

const initialState: StateBook = {
  booksItems: [],
  totalItems: 0,
  status: Status.LOADING,
  categories: 'all',
  q: '',
  sortBy: 'relevance',
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    switchFormData(state, action: PayloadAction<IForm>) {
      state.categories = action.payload.categories
      state.sortBy = action.payload.sortBy
      state.q = action.payload.q
      state.booksItems = []
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = Status.LOADING
    })
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.status = Status.SUCCESS
      state.totalItems = action.payload.totalItems
      state.booksItems = [...state.booksItems, ...action.payload.items]
    })
    builder.addCase(fetchBooks.rejected, (state) => {
      state.status = Status.ERROR
    })
  },
})
export const { switchFormData } = booksSlice.actions
export default booksSlice.reducer
