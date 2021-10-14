
import IBook from '../../models/BooksModel'
import { Container, ImageContainer } from './style'
import Link from 'next/link'
import { ReactNode } from 'react'

interface BookPrps {
    link:string;
    title: string;
    authors: string;
    subtitle?: string;
    description?: string;
    Image: string;
}

export function BookList(props: BookPrps) {

    return (
        <Link href={props.link}>
            <Container>
                <ImageContainer img={props.Image} />
                <h2>{props.title}</h2>
                <p>by {props.authors && props.authors[0]}</p>
            </Container>
        </Link>
    )
}