import styled from 'styled-components'



export const Container = styled.div`
  width: calc(33.3333% - 10px);
  margin: 1rem 0.25rem;
 
  h2 {
      font-size: 16px;
      margin: 0;
      color: rgba(49, 49, 49, 0.8);
  }

  p{
      margin: 0;
      font-size: 13px;
      color: rgba(49, 49, 49, 0.8);
  }

`

type ImageProps = {
    img: any;
}

export const ImageContainer = styled.div<ImageProps>`
    box-shadow: 2px 4px 48px rgba(154, 175, 209, 0.62134);
    border-radius: 5px;
    height:185px;
    position: relative;
    cursor: pointer;
    margin: 0;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content:center;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
`