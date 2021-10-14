import styled from 'styled-components'
import Link, { LinkProps } from 'next/link'


export const Container = styled.div<ImageProps>`
    background: rgba(0, 23, 61, 1);
    box-shadow: 2px 4px 48px rgba(154, 175, 209, 0.62134);
    border-radius: 5px;
    height:200px;
    position: relative;
    cursor: pointer;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content:center;
    background-image: url(${props => props.img});
`

export const H2 = styled.h2`
    margin: 0;
    margin-top: 0.75rem;
    font-family: SF Pro, sans-serif;
    font-size: 20px;
    line-height: 21px;
    letter-spacing: 0.5px;
    text-align: left;

`


export const ReadMore = styled.a<LinkProps>`
    display: flex;
    justify-content: end;
    color: #4ABDF1;
    margin-bottom: 0.35rem;
`

export const FlexBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    max-width: 50%;
    margin-bottom: 2rem;

`

export const BookCardTitle = styled.div`
    font-family: 'Playfair Display';
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
        font-family: Playfair, sans-serif;
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        text-align: left;
        margin: 0;

        
    }
    p {
        font-size: 16px;
        font-weight: lighter;
        margin: 0;
        margin-top: 0.35rem;
    }
`

export const BookCardAuthorName = styled.p`
    position: absolute;
    font-size: 20px;
    line-height:35.99px;
    font-weight: lighter;

`

interface ImageProps {
    img: any;
}

export const BookCardThumbnail = styled.div<ImageProps>`
    width: 92px;
    height: 139px;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 5px;
    position: relative;

    img {
        object-fit: cover;
    }
    
`

export const BackgroundImageOval = styled.div`
    position: absolute;
    width: 127px;
    height: 127px;
    bottom:0;
    left: 0;
    opacity:0.5;
    background-image: url("/img/Oval.png");
`

export const RetangleBox = styled.div`
    position: absolute;
    width: 46px;
    height: 14px;
    bottom: 13px;
    left: -27px;
    background-image: url("/img/Rectangle.svg");
`

export const TriangleBox = styled.div`
    position: absolute;
    width: 32.87px;
    height: 28.22px;
    top: -9px;
    left: -7px;
    background-image: url("/img/Triangle.svg");
`

export const TitleAlign = styled.div`
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
        margin: 0;
    }

    a{  
        margin: 0;
        margin-right: 0.65rem;
    }
`