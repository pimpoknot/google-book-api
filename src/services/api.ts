import axios, { AxiosError, AxiosResponse } from 'axios'
import IBook from '../models/BooksModel'

interface BookData extends IBook {}

export const api = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes?q='
})





