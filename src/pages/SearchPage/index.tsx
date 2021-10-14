import { useEffect, useState } from 'react'
import { BookList } from '../../components/BookList'
import { InputSearch } from '../../components/InputSearch'
import { LoaderComponent } from '../../components/LoaderComponent/Loader'
import { Menu } from '../../components/Menu'
import IBook from '../../models/BooksModel'
import { api } from '../../services/api'
import { Container, ContainerBook, TextEmpty, ArrowBack } from './style'
import Link from 'next/link'
import Image from 'next/image'

interface BookPrps extends IBook { }

export default function SearchPage() {

  const [books, setBooks] = useState<BookPrps[]>([])
  const [query, setQuery] = useState('')
  const [loading, isLoading] = useState(false)


  useEffect(() => {
    isLoading(true)
    api.get(`${query}`)
      .then((response) => {
        setBooks(response.data.items)
        setTimeout(() => {
          isLoading(false)
        }, 1000)
      })
      .catch((error) => {
        isLoading(true)
        setQuery('')
        setTimeout(() => {
          isLoading(false)
        }, 1000)
      })

  }, [query])



  const handleInputChange = (event: any) => {
    setQuery(event.target.value)
  }


  let DefaultImage = 'https://via.placeholder.com/150';
  const [amptySearch, setAmptySearch] = useState(false)



  return (
    <>
      <InputSearch
        placeholder="Search book"
        value={query}
        handleInputChange={handleInputChange}
      />
      <ArrowBack>
        <Link href="/">
          <a>
            <Image height={16} width={16} src={"/img/Back.svg"} alt={"Voltar"} />
          </a>
        </Link>
      </ArrowBack>
      {query === '' ? (
        <TextEmpty>
          <h2>Seach Ampty</h2>
        </TextEmpty>
      ) : (
        <ContainerBook>
          {books.map((books) => {
            return (
              <BookList
                key={books.id}
                link={`/ProfileBook/${books.id}`}
                title={books.volumeInfo.title}
                authors={books.volumeInfo.authors}
                Image={!books.volumeInfo.imageLinks?.thumbnail ? DefaultImage : books.volumeInfo.imageLinks?.thumbnail} />
            )
          })}
        </ContainerBook>
      )}
      <Menu />
    </>
  )
}