import styled from "styled-components";

export const InputBox = styled.div`
    width: 336px;
    height: 48px;
    margin: 0 auto;
    margin-top: 35px;
    padding:1rem;
    background: #FDFCFC;
    box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.122623);
    border-radius: 10px;
    display: flex;
    align-items: center;

`

export const Input = styled.input`
    border: none;
    padding: 1rem;
    width: 100%;
    height: 100%;
    font-weight: bold;
    &::placeholder {
        font-weight: 400;
    }

    &:focus-visible {
        outline: none;
        outline-offset: none;
    }
`