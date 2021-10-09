import styled from 'styled-components'

export const Container = styled.header`

    margin: 0;
    padding: 0;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    width: 100%;
    
    h1 {
        color: white;
        font-weight: 400;
    }
`

export const Content = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
`

export const BoxContent = styled.div`
    
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    cursor: pointer;
    border-radius: 5px 5px 0 0;
    Img { 
        border: #000000;
    }

    p {
        margin: 0;
        margin-top: 0.55rem;
        color: gray;
        font-family: 'SF Pro Display', sans-serif;
    }

    transition: background 0.5s ease-in-out;
    &:hover {
        background: #F2F2F2;
        p {
            color: black;
        }
    }

`