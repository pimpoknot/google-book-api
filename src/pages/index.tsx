import type { NextPage } from 'next'
import { Menu } from '../components/Menu'
import { InputSearch } from '../components/InputSearch'
import { GreetingsMessage } from '../components/GreetingsMessage'
import { Container } from '../styles/Home/style'
import { BookCard } from '../components/BookCard'
import { CurrentlyRead } from '../components/CurrentlyRead'
import { useEffect, useState } from 'react'
import { api } from '../services/api'
import { LoaderComponent } from '../components/LoaderComponent/Loader'



const Home: NextPage = () => {

  const [books, setBooks] = useState<Array<any>>([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    api.get(`${query}`)
      .then((response) => {
        setBooks(response.data.items)
        
      })
      .catch((error) => {
        setQuery('')
      })
  }, [query])

  console.log(books)

  const handleInputChange = (event: any) => {
    setQuery(event.target.value)
  }

  const WaitingLoading = () => {
    return (
      setTimeout(() => {
        <>
          <GreetingsMessage />
          <Container>
            <BookCard />
            <CurrentlyRead />
          </Container>
        </>

      }, 3000)
    )
  }

  return (
    <>
      <InputSearch
        placeholder="Search book"
        value={query}
        handleInputChange={handleInputChange}
      />
      {query === '' ? (
        <>
          <GreetingsMessage />
          <Container>
            <BookCard />
            <CurrentlyRead />
          </Container>
        </>
      ) : (
        books.map((books) => {
          return (
            <h1>{books.volumeInfo.title}</h1>
          )
        })
      )}
      <Menu />
    </>
  )
}

export default Home
