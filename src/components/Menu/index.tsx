import { Container, BoxContent, Content } from './style'
import Image from 'next/image'
import bookImage from '../../../public/img/book.svg';
import UserImage from '../../../public/img/useruser.svg';
import HomeImage from '../../../public/img/home.svg';
import Link from 'next/link'

export function Menu() {
    return (
        <Container>
            <Content>
                <Link href="/">
                    <BoxContent>
                        <Image src={HomeImage} />
                        <p>Home</p>
                    </BoxContent>
                </Link>
                <BoxContent>
                    <Image src={bookImage} />
                    <p>Libraries</p>
                </BoxContent>
                <BoxContent>
                    <Image src={UserImage} />
                    <p>Profile</p>
                </BoxContent>
            </Content>
        </Container>
    )
}