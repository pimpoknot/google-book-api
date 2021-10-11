import axios, { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BookDetailsContainer, ArrowBack, BookCover } from '../../styles/Home/style'
import Image from 'next/image'
import Link from "next/link";

interface IBook {
    id: string;
    volumeInfo?: {
        title: string;
        authors: string;
        subtitle: string;
        description?: string;
        imageLinks?: {
            thumbnail: string;
        };
    };
}

export default function ProfileBook() {

    const router = useRouter()
    const { id } = router.query
    const [books,setBooks] = useState<any>([])
    

    useEffect(() => {
             axios.get(`https://www.googleapis.com/books/v1/volumes?q=${id}`)
            .then((response: AxiosResponse) => {
                const bookDataArr = response.data.items[0]
                setBooks(bookDataArr)
            })
            .catch((error: AxiosError) => {
                console.log('Deu ruim')
            })

    }, [])

    console.log(books.volumeInfo?.title)


    let DefaultImage = 'https://via.placeholder.com/150';

        return(
            <BookDetailsContainer >
                        <section>
                            <ArrowBack>
                                <Link href="/">
                                    <a>
                                        <Image height={16} width={16} src={"/img/Back.svg"} alt={"Voltar"} />
                                    </a>
                                </Link>
                            </ArrowBack>
                            <BookCover>
                            <img
                                width={160}
                                height={230}
                                src={!books.volumeInfo?.imageLinks?.thumbnail === undefined ? DefaultImage : !books.volumeInfo?.imageLinks?.thumbnail}
                                alt={books.volumeInfo?.title}
                            />
                            <p>{books.volumeInfo?.title}</p>
                            </BookCover>
                        </section>
                    </BookDetailsContainer>
        )
}


