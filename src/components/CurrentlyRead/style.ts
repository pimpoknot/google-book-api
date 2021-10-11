import styled from 'styled-components'

export const Container = styled.section`
    padding: 3rem 0;
    width: 90%;
    h2 {
        padding-left: 1rem;
        font-family: SF Pro, sans-serif;
        font-size: 20px;
        line-height: 21px;
        letter-spacing: 0.5px;
        text-align: left;
        margin-bottom: 2rem;

    }
`

export const BoxContainer = styled.div`
    border-radius: 0px 3px 3px 0px;
    background: rgba(238, 245, 219, 1);
    position:relative;
    height:150px;
`

type ImageProps = {
    img: string;
}

export const ImageBox = styled.div<ImageProps>`
    width: 100px;
    height: 170px;
    position: absolute;
    top: -15px;
    left: 19px;
    overflow: hidden;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

export const TextContainer = styled.div`
    position: absolute;
    right: 0;
    left: 130px;
    color: white;
    height:100%;
    border-radius: 0px 3px 3px 0px;
    overflow: hidden;
    h3{
        margin: 0;
        font-family: Playfair Display;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 27px;
        letter-spacing: 2px;
        text-align: left;
        color: rgba(42, 43, 38, 1);
        margin-top: 25px;
        overflow: hidden;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        


    }
    p {
        margin: 0;
        font-family: Roboto;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 12px;
        letter-spacing: 0px;
        text-align: left;
        color: rgba(116, 119, 109, 1);
        margin-top: 0.35rem;

    }
`

export const ViewsContainer = styled.div`
    bottom: 30px;
    position: absolute;
    /* width:190px; */
    display: flex;
    align-items: center;

    img {
        width: 19px;
    }

    p {
        font-size: 17px;
        margin-left: 0.25rem;
    }

    span {
        color: rgba(236, 99, 116, 1);
        font-weight: bold;
;
    }

`

export const BackgroundImageOval = styled.div`
    position: absolute;
    top: -32px;
    opacity: 0.8;
    right: 0;
    right: -32px;
    overflow: hidden;
    transform: rotate(157deg);

`