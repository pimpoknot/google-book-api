import { Container, BookCardTitle, BookCardThumbnail, FlexBox, ReadMore,H2 } from './style'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../services/api'
import IBook from '../../models/BooksModel'
import BGImage from '../../../public/img/Oval.png';


interface BookPrps extends IBook { }


export function BookCard() {

  const [books, setBooks] = useState<BookPrps[]>([])
  const [query, setQuery] = useState('Homem Aranha')

  useEffect(() => {
    api.get(`${query}`)
      .then((response) => {
        const bookDataArr = response.data.items
        setBooks(bookDataArr)
      })
  }, [])

  let DefaultImage = 'https://via.placeholder.com/150';

  return (
    <>
      <H2>Discovery new book</H2>
      <ReadMore href="/test">Read more</ReadMore>
      <Swiper
            spaceBetween={10}
            slidesPerView={1.1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
      {books.map((response) => {
        return (
          
            <SwiperSlide>
              <Container key={response.id} img={BGImage}>
                <BookCardTitle>
                  <FlexBox>
                    <h2>{response.volumeInfo.title}</h2>
                    <p>{response.volumeInfo.authors[0]}</p>
                  </FlexBox>
                  <BookCardThumbnail img={!response.volumeInfo.imageLinks?.thumbnail ? DefaultImage : response.volumeInfo.imageLinks?.thumbnail}/>
                </BookCardTitle>
              </Container>
            </SwiperSlide>
        )
      })}
      </Swiper>
    </>
  )

}

