import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IForm } from '../../@types/IFrom'
import { RootObject } from './types'

export const fetchBooks = createAsyncThunk<RootObject, IForm>(
  'pizza/fetchPizzasStatus',
  async ({ categories, q, sortBy, itemsLength }) => {
    const categoriesNew = categories !== 'all' ? categories : ''
    itemsLength = itemsLength ? itemsLength - 1 : 0
    const { data } = await axios.get<RootObject>(
      `https://www.googleapis.com/books/v1/volumes?q=${q}+subject:${categoriesNew}&startIndex=${itemsLength}&orderBy=${sortBy}&maxResults=30&key=AIzaSyA-49MrBRLDGQVaZCRyppObhHcVEhPdq_A`
    )
    return data
  }
)

//https://www.googleapis.com/books/v1/volumes?q=+inauthor:keyes&key=AIzaSyA-49MrBRLDGQVaZCRyppObhHcVEhPdq_A
//https://www.googleapis.com/books/v1/volumes?q=+subject&orderBy=relevance&key=AIzaSyA-49MrBRLDGQVaZCRyppObhHcVEhPdq_A
// const x = `https://www.googleapis.com/books/v1/volumes?q=${q}+subject:${categoriesNew}&orderBy=${sortBy}&key=AIzaSyA-49MrBRLDGQVaZCRyppObhHcVEhPdq_A`
// `https://www.googleapis.com/books/v1/volumes?${search}${categoriesNew}&orderBy=${sortBy}&key=AIzaSyA-49MrBRLDGQVaZCRyppObhHcVEhPdq_A`
