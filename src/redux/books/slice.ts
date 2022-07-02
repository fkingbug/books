import { createSlice } from '@reduxjs/toolkit'
import { fetchBooks } from './asyncActions'
import { Status } from './types'

const initialState = {
  books: [],
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
    })
    builder.addCase(fetchBooks.rejected, (state) => {
      state.status = Status.ERROR
    })
  },
})

export default booksSlice.reducer
