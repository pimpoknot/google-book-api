import { Container, BoxContainer, ImageBox, TextContainer, ViewsContainer } from './style'
import CurrentlyImage from '../../../public/img/ReadinCurretly.svg';
import Image from 'next/image'
import React from 'react';
import { BackgroundImageOval } from './style';
import BGOval from '../../../public/img/Oval.png';
import { lastRead } from '../../services/LastReading';
import { getRandomInt } from '../../utils/randomNumber';
import Link from 'next/link';




export function CurrentlyRead(props: any) {

    const LastReading: any = lastRead.slice(-1)[0]

    console.log(LastReading)
    const DefaultImage = 'https://via.placeholder.com/150';

    const getNumber = (min: number, max: number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    return (
        <>
            <Container>
                <h2>Currently Reading</h2>
                <Link href={!LastReading ? "/" : `/ProfileBook/${LastReading.id}`}>
                    <BoxContainer>
                        <ImageBox img={!LastReading?.volumeInfo.imageLinks ? DefaultImage : LastReading.volumeInfo.imageLinks.thumbnail} />
                        <TextContainer>
                            <h3>{!LastReading ? 'empty list' : LastReading.volumeInfo.title}</h3>
                            <p>{!LastReading ? '' : LastReading.volumeInfo.authors[0]}</p>
                            <ViewsContainer>
                                <Image src={CurrentlyImage} alt={CurrentlyImage} />
                                <p>Chapter <span>{!LastReading ? '' : getNumber(1, 9)}</span> From <span>{!LastReading ? '' : getNumber(9, 20)}</span></p>
                            </ViewsContainer>
                            <BackgroundImageOval>
                                <Image src={BGOval} />
                            </BackgroundImageOval>
                        </TextContainer>
                    </BoxContainer>
                </Link>
            </Container>
        </>
    )
}