import styled from 'styled-components'


export const Container = styled.section`
    margin-top: 2rem;
    padding-bottom: 5.5rem;

    h2 {
        font-size: 20px;
        padding-left: 1rem;
        font-family: SF Pro,sans-serif;
        font-size: 20px;
        line-height: 21px;
        -webkit-letter-spacing: 0.5px;
        -moz-letter-spacing: 0.5px;
        -ms-letter-spacing: 0.5px;
        letter-spacing: 0.5px;
        text-align: left;
        /* margin-bottom: 2rem; */
    }
`

interface ImageProps {
    img: string;
}

export const VideoCard = styled.div<ImageProps>`
    width: 335px;
    height:181px;
    border-radius: 5px 5px 0px 0px;
    background-image: url("/img/Bitmap.png");
    margin: 0 auto;
`