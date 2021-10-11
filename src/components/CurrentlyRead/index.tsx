import { Container, BoxContainer, ImageBox, TextContainer, ViewsContainer } from './style'
import CurrentlyImage from '../../../public/img/ReadinCurretly.svg';
import Image from 'next/image'
import React from 'react';
import { BackgroundImageOval } from './style';
import BGOval from '../../../public/img/Oval.png';

export function CurrentlyRead() {
    return (
        <>
            <Container>
                <h2>Currently Reading</h2>
                <BoxContainer>
                    <ImageBox img="http://books.google.com/books/content?id=-DgQCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
                    <TextContainer>
                        <h3>Homem-Aranha: Gamerverse - vol. 2</h3>
                        <p>Tolkien</p>
                        <ViewsContainer>
                            <Image src={CurrentlyImage} alt="" />
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