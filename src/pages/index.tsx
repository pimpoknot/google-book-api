import type { NextPage } from 'next'
import { Menu } from '../components/Menu'
import { InputSearch } from '../components/InputSearch'
import { GreetingsMessage } from '../components/GreetingsMessage'
import { Container, ContainerBook } from '../styles/Home/style'
import { BookCard } from '../components/BookCard'
import { CurrentlyRead } from '../components/CurrentlyRead'
import React, { useEffect, useState } from 'react'
import { api } from '../services/api'
import { LoaderComponent } from '../components/LoaderComponent/Loader'
import { BookList } from '../components/BookList'
import IBook from '../models/BooksModel'
import { ReviewsComponent } from '../components/ReviewsComponent'



interface BookPrps extends IBook { }

const Home: NextPage = (props) => {



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

  const handleFormSubmit = (event: any) => {
    setQuery(event.target.value)
  }

  let DefaultImage = 'https://via.placeholder.com/150';



  return (
    <>
      <InputSearch
        placeholder="Search book"
        value={query}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />
      {query === '' ? (
        <>
          {loading ? (
            <LoaderComponent />
          ) : (
            <>
              <GreetingsMessage />
              <Container>
                <BookCard />
              </Container>
                {/* <p>{LastReading.volumeInfo.title}</p> */}
                <CurrentlyRead />
              <ReviewsComponent />
            </>
          )}
        </>
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



export default Home
