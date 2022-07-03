import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IForm } from '../../@types/IFrom'
import { fetchBooksIterface, RootObject } from './types'

export const fetchBooks = createAsyncThunk<fetchBooksIterface, IForm>(
  'pizza/fetchPizzasStatus',
  async ({ categories, q, sortBy }) => {
    const categoriesNew = categories !== 'all' ? categories : ''
    const { data } = await axios.get<fetchBooksIterface>(
      `https://www.googleapis.com/books/v1/volumes?q=${q}+subject:${categoriesNew}&orderBy=${sortBy}&key=AIzaSyA-49MrBRLDGQVaZCRyppObhHcVEhPdq_A`
    )
    return data
  }
)

//https://www.googleapis.com/books/v1/volumes?q=+inauthor:keyes&key=AIzaSyA-49MrBRLDGQVaZCRyppObhHcVEhPdq_A
//https://www.googleapis.com/books/v1/volumes?q=+subject&orderBy=relevance&key=AIzaSyA-49MrBRLDGQVaZCRyppObhHcVEhPdq_A
// const x = `https://www.googleapis.com/books/v1/volumes?q=${q}+subject:${categoriesNew}&orderBy=${sortBy}&key=AIzaSyA-49MrBRLDGQVaZCRyppObhHcVEhPdq_A`
// `https://www.googleapis.com/books/v1/volumes?${search}${categoriesNew}&orderBy=${sortBy}&key=AIzaSyA-49MrBRLDGQVaZCRyppObhHcVEhPdq_A`
