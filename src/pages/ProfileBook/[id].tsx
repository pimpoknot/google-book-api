import axios, { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BookDetailsContainer, ArrowBack, BookCover, BookDetailsContent,BookDetailsBar } from '../../styles/Home/style'
import Image from 'next/image'
import Link from "next/link";
import { BiBookOpen } from "react-icons/bi";
import { RiHeadphoneFill } from "react-icons/ri";
import { IoShareOutline } from "react-icons/io5";
import { lastRead } from '../../services/LastReading'





export default function ProfileBook() {

    const router = useRouter()
    const { id } = router.query
    const [books, setBooks] = useState<any>([])
    const [reload, setReload] = useState(false)    


    useEffect(() => {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${id}`)
            .then((response: AxiosResponse) => {
                const bookDataArr = response.data.items[0]
                setBooks(bookDataArr)
                setReload(true)
                lastRead.push(bookDataArr)
            })
            .catch((error: AxiosError) => {
                console.log('Deu ruim')
            })
    }, [])


    let DefaultImage = 'https://via.placeholder.com/150';

    return (
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
                        src={!books.volumeInfo?.imageLinks?.thumbnail === undefined ? DefaultImage : books.volumeInfo?.imageLinks?.thumbnail}
                        alt={books.volumeInfo?.title}
                    />
                </BookCover>
            </section>
            <BookDetailsContent>
                <h1>{books.volumeInfo?.title}</h1>
                <h2>{books.volumeInfo?.authors?.[0]}</h2>
                {
                    books.volumeInfo?.description?.split('\. ').map((line:any, i:string) => (
                        <p key={i}>
                            {line}
                        </p>
                    ))
                }
                <p>{books.volumeInfo?.description}</p>
            </BookDetailsContent>
            <BookDetailsBar>
                <Link href="/">
                    <a>
                        <BiBookOpen size="18" color="#CFCBD2" /> Read
                    </a>
                </Link>
                <Link href="/">
                    <a>
                        <RiHeadphoneFill size="18" color="#CFCBD2" /> Listen
                    </a>
                </Link>
                <Link href="/">
                    <a>
                        <IoShareOutline size="18" color="#CFCBD2" /> Share
                    </a>
                </Link>
            </BookDetailsBar>
        </BookDetailsContainer>
    )
}
