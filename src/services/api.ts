import axios from 'axios'
import IBook from '../models/BooksModel'

interface BookData extends IBook {}

export const api = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes?q='
})



// export const fethGoogleBookApi = async (volumeId: string) => {
//     return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${volumeId}`)
//     .then((response: AxiosResponse) => {
//         response.data
//     })
//     .catch((error: AxiosError) => {
//         throw new Error('Deu ruim')
//     })
// }

