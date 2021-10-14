import { Container, BookCardTitle, BookCardThumbnail, FlexBox, ReadMore, H2, BackgroundImageOval, RetangleBox, TriangleBox, TitleAlign } from './style'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React, { useEffect, useState } from 'react'
import { api } from '../../services/api'
import IBook from '../../models/BooksModel'
import Image from 'next/image'

import Link from 'next/link'
import { getViews } from '../../utils/randomNumber';

interface BookPrps extends IBook { }


export function BookCard() {

  const [books, setBooks] = useState<BookPrps[]>([])
  const [query, setQuery] = useState('all')

  useEffect(() => {
    api.get(`${query}`)
      .then((response) => {
        const bookDataArr = response.data.items
        getViews(1, 1000)
        setBooks(bookDataArr)

      })
  }, [])

  let DefaultImage = 'https://via.placeholder.com/150';

  // Static Views
  const StaticViews = getViews(1, 1000)

  return (
    <>
      <TitleAlign>
        <H2>Discovery new book</H2>
        <ReadMore href="/SearchPage">More</ReadMore>
      </TitleAlign>
      <Swiper
        spaceBetween={10}
        slidesPerView={1.1}
        onSlideChange={() => console.log('')}
        onSwiper={(swiper) => console.log('')}
      >
        {books.map((response) => {
          return (

            <SwiperSlide>
              <Link href={`/ProfileBook/${response.id}`}>
                <Container key={response.id} >
                  <BookCardTitle>
                    <FlexBox>
                      <h2>{response.volumeInfo.title}</h2>
                      <p>{response.volumeInfo.authors && response.volumeInfo.authors[0]}</p>
                      <p>{StaticViews}+ Read now </p>
                    </FlexBox>
                    <BookCardThumbnail img={!response.volumeInfo.imageLinks?.thumbnail ? DefaultImage : response.volumeInfo.imageLinks?.thumbnail}>
                      <RetangleBox />
                      <TriangleBox />
                    </BookCardThumbnail>
                  </BookCardTitle>
                  <BackgroundImageOval />
                </Container>
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )

}

