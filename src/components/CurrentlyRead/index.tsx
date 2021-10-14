import { Container, BoxContainer, ImageBox, TextContainer, ViewsContainer } from './style'
import CurrentlyImage from '../../../public/img/ReadinCurretly.svg';
import Image from 'next/image'
import React from 'react';
import { BackgroundImageOval } from './style';
import BGOval from '../../../public/img/Oval.png';
import { lastRead } from '../../services/LastReading';





export function CurrentlyRead(props: any) {

    const LastReading: any = lastRead.slice(-1)[0]

        console.log(LastReading)
        const DefaultImage = 'https://via.placeholder.com/150';

    return (
        <>
            <Container>
                <h2>Currently Reading</h2>
                <BoxContainer>
                    <ImageBox img={!LastReading?.volumeInfo.imageLinks ? DefaultImage : LastReading.volumeInfo.imageLinks.thumbnail } />
                    <TextContainer>
                        <h3>{!LastReading ? 'Ultima Leitura vazia' : LastReading.volumeInfo.title}</h3>
                        <p>{!LastReading ? '' : LastReading.volumeInfo.authors[0]}</p>
                        <ViewsContainer>
                            <Image src={CurrentlyImage} alt={CurrentlyImage} />
                            <p>Chapter <span>2</span> From <span>3</span></p>
                        </ViewsContainer>
                        <BackgroundImageOval>
                            <Image src={BGOval} />
                        </BackgroundImageOval>
                    </TextContainer>
                </BoxContainer>
            </Container>
        </>
    )
}