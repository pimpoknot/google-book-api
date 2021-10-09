import styled from 'styled-components'
import Link, { LinkProps } from 'next/link'



export const Container = styled.div<ImageProps>`
    background: #00173D;
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
        margin: 0;
        font-weight: 700;
        font-size: 18px;
        
    }
    p {
        font-size: 16px;
        font-weight: lighter;
        margin: 0;
        margin-top: 0.5rem;
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
    overflow: hidden;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 5px;

    img {
        object-fit: cover;
    }
    
`