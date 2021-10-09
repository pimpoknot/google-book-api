import Loader from "react-loader-spinner";
import styled from 'styled-components'


const Container = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #FFFFFF;
    
`



export function LoaderComponent () {
    return (
        <Loader
        type="Circles"
        color="#333"
        height={100}
        width={100}
        timeout={2000} //3 secs
        />
    )
}