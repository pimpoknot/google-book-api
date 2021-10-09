
import IBook from '../../models/BooksModel'
import { Container, ImageContainer } from './style'

interface BookPrps { 
    title: string;
    authors: any;
    subtitle?: string;
    description?: string;
    Image: string;
}

export function BookList(props: BookPrps) {
    return (
            <Container>
                <ImageContainer img={props.Image} />
                <h2>{props.title}</h2>
                <p>by {props.authors}</p>
            </Container>
    )
}