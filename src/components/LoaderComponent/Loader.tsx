import Loader from "react-loader-spinner";
import styled from 'styled-components'


const Container = styled.div`
    background-color: #F2F2F2;
    display: flex;
    align-items:center;
    justify-content: center;

    
`



export function LoaderComponent() {
    return (
        <Container>
            <Loader
                type="Rings"
                color="#333"
                height={300}
                width={100}
                timeout={3000} //3 secs
            />
        </Container>

    )
}