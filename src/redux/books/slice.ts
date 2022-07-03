import { createSlice } from '@reduxjs/toolkit'
import { fetchBooks } from './asyncActions'
import { Status, Item } from './types'

export interface StateBook {
  booksItems: Item[]
  totalItems: number
  status: string
}

const initialState: StateBook = {
  booksItems: [],
  totalItems: 0,
  status: Status.LOADING,
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = Status.LOADING
    })
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.status = Status.SUCCESS
      state.totalItems = action.payload.totalItems
      state.booksItems = action.payload.items
    })
    builder.addCase(fetchBooks.rejected, (state) => {
      state.status = Status.ERROR
    })
  },
})

export default booksSlice.reducer
