
import IBook from '../../models/BooksModel'
import { Container, ImageContainer } from './style'

interface BookPrps { 
    title: string;
    authors: string;
    subtitle?: string;
    description?: string;
    Image: string;
}

export function BookList(props: BookPrps) {

    return (
            <Container>
                <ImageContainer img={props.Image} />
                <h2>{props.title}</h2>
                <p>by {props.authors && props.authors[0]}</p>
            </Container>
    )
}